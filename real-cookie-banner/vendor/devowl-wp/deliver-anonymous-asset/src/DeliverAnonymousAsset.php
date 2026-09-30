<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\DeliverAnonymousAsset;

use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Utils as UtilsUtils;
use WP_Filesystem_Direct;
use WP_Scripts;
/**
 * Deliver anonymous assets through `wp-content/uploads`.
 * @internal
 */
class DeliverAnonymousAsset
{
    /**
     * Builder.
     *
     * @var AnonymousAssetBuilder
     */
    private $builder;
    private $handle;
    private $file;
    /**
     * C'tor.
     *
     * @param AnonymousAssetBuilder $builder
     * @param string $handle
     * @param string $file
     * @codeCoverageIgnore
     */
    public function __construct($builder, $handle, $file)
    {
        $this->builder = $builder;
        $this->handle = $handle;
        $this->file = $file;
        \add_filter('attribute_escape', [$this, 'attribute_escape']);
        \add_filter('script_loader_tag', [$this, 'script_loader_tag'], 10, 2);
        \add_filter('wp_inline_script_attributes', [$this, 'wp_inline_script_attributes'], 100);
    }
    /**
     * The handle is enqueued, let's modify the `WP_Dependency`.
     */
    public function ready()
    {
        if (!$this->builder->ensureAnonymousFolder()) {
            return \false;
        }
        $scripts = \wp_scripts();
        $script = $scripts->query($this->handle);
        if (!$script) {
            return \false;
        }
        $usedFilenameWithoutExtension = \explode('.', \basename($script->src))[0];
        if (\preg_match('/^[a-f0-9]{10}$/', $usedFilenameWithoutExtension) || \preg_match('/^[a-f0-9]{32}$/', $usedFilenameWithoutExtension)) {
            return \false;
        }
        $src = $this->generateSrc();
        if ($src === '') {
            return \false;
        }
        $script->src = $src;
        $chunks = $scripts->get_data($this->handle, 'chunks');
        if (\is_array($chunks)) {
            foreach ($chunks as &$chunkUrl) {
                $filenameAndQueryString = \explode('?', \basename($chunkUrl), 2);
                $filename = $filenameAndQueryString[0];
                $queryString = $filenameAndQueryString[1] ?? '';
                $anonymousChunkFilename = AnonymousAssetBuilder::generateFilename($this->builder->getHash(), $filename);
                $srcDir = $script->src;
                if (\strpos($srcDir, '://') !== \false) {
                    $parsed = \parse_url($srcDir);
                    $path = isset($parsed['path']) ? \dirname($parsed['path']) : '';
                    $srcDir = $parsed['scheme'] . '://' . $parsed['host'] . (isset($parsed['port']) ? ':' . $parsed['port'] : '') . $path;
                } else {
                    $srcDir = \dirname($srcDir);
                }
                $chunkUrl = $srcDir . '/' . $anonymousChunkFilename . (empty($queryString) ? '' : '?' . $queryString);
            }
            $scripts->add_data($this->handle, 'chunks', $chunks);
        }
        return \true;
    }
    /**
     * Generate the file in our content directory and return the URL.
     */
    protected function generateSrc()
    {
        $anonymousFolder = $this->builder->ensureAnonymousFolder(\true);
        if ($anonymousFolder === \false) {
            return '';
        }
        $contentPath = $anonymousFolder . AnonymousAssetBuilder::generateFilename($this->builder->getHash(), $this->file);
        if (!\file_exists($contentPath)) {
            // Keep the original registered URL when the source is missing or the copy fails —
            // advertising the hashed path would 404 on the page.
            if (!\is_readable($this->file)) {
                return '';
            }
            if (!Utils::writeFileCompletely($contentPath, $this->builder->readFileAndCorrectSourceMap($this->file))) {
                return '';
            }
            UtilsUtils::runDirectFilesystem(function ($fs) use($contentPath) {
                /**
                 * WP_Filesystem_Direct.
                 *
                 * @var WP_Filesystem_Direct
                 */
                $fs = $fs;
                $fs->chmod($contentPath, \constant('FS_CHMOD_FILE'));
            });
        }
        $src = Utils::toUploadsUrl($contentPath);
        return $src === \false ? '' : $src;
    }
    /**
     * Modify CData script tag.
     *
     * @param string $safe_text The text after it has been escaped.
     */
    public function attribute_escape($safe_text)
    {
        if ($safe_text === $this->handle) {
            // phpcs:disable
            $backtrace = @\debug_backtrace();
            // phpcs:enable
            foreach ($backtrace as $bt) {
                if (isset($bt['function'], $bt['class']) && $bt['function'] === 'print_extra_script' && $bt['class'] === WP_Scripts::class) {
                    return \md5(\rand());
                }
            }
        }
        return $safe_text;
    }
    /**
     * Modify tags to now show any `id` attribute.
     *
     * @param string $tag The `<script>` tag for the enqueued script.
     * @param string $handle The script's registered handle.
     */
    public function script_loader_tag($tag, $handle)
    {
        $isLocalizeResourceHandle = \strpos($handle, $this->handle . '-localize-') === 0;
        if ($handle === $this->handle || $isLocalizeResourceHandle) {
            // WordPress may render attributes with single or double quotes.
            return \preg_replace('/\\s+id=(["\'])' . \preg_quote($handle . '-js', '/') . '\\1/', '', $tag);
        }
        return $tag;
    }
    /**
     * Remove `id` from inline script attributes for the base and localize resource handles.
     *
     * @param array<string, string|bool> $attributes
     * @return array<string, string|bool>
     */
    public function wp_inline_script_attributes($attributes)
    {
        $id = isset($attributes['id']) && \is_string($attributes['id']) ? $attributes['id'] : '';
        if ($id === '') {
            return $attributes;
        }
        $isBaseInlineId = $id === $this->handle . '-js-before' || $id === $this->handle . '-js-after';
        $isLocalizeInlineId = \strpos($id, $this->handle . '-localize-') === 0 && (\substr($id, -10) === '-js-before' || \substr($id, -9) === '-js-after');
        if ($isBaseInlineId || $isLocalizeInlineId) {
            unset($attributes['id']);
        }
        return $attributes;
    }
}
