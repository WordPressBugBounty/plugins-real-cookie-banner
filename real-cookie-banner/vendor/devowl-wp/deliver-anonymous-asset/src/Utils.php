<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\DeliverAnonymousAsset;

use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Utils as UtilsUtils;
/**
 * Calendar bucket ids and uploads-scoped paths.
 * @internal
 */
class Utils
{
    const BUCKET_PERIOD_SECONDS = 5184000;
    const FINGERPRINT_LENGTH = 10;
    /**
     * Read a JavaScript file and update the sourceMappingURL so the file can be
     * served from any URL. Without a resolver the mapping comment is stripped.
     *
     * @param string $path The path to the original file (not the anonymous file)
     * @param callable|null $resolver `function (string $originalFilePath): string` returning a URL prefix (directory) for the `.map` file
     */
    public static function readFileAndCorrectSourceMap($path, $resolver = null)
    {
        $content = \file_get_contents($path);
        if (!\is_string($content)) {
            return '';
        }
        $startWith = '//# sourceMappingURL=';
        $lastNl = \strrpos($content, "\n");
        $lastLine = $lastNl === \false ? $content : \substr($content, $lastNl + 1);
        if (\substr($lastLine, 0, \strlen($startWith)) !== $startWith) {
            return $content;
        }
        $before = $lastNl === \false ? '' : \substr($content, 0, $lastNl);
        $mapFile = $path . '.map';
        if (!\is_callable($resolver) || !\file_exists($mapFile)) {
            return $before;
        }
        $rewritten = $startWith . \wp_make_link_relative(\trailingslashit($resolver($path)) . \basename($mapFile));
        return $lastNl === \false ? $rewritten : $before . "\n" . $rewritten;
    }
    /**
     * Write `$content` to `$path` only when every byte lands. Uses a temp file + rename so
     * readers never observe a truncated body at the final hashed URL; cleans up on failure.
     *
     * @param string $path
     * @param string $content
     * @return bool
     */
    public static function writeFileCompletely($path, $content)
    {
        $content = (string) $content;
        $expected = \strlen($content);
        $tmp = \dirname($path) . '/' . \uniqid('anon-write-', \true) . '.tmp';
        $written = \file_put_contents($tmp, $content);
        if ($written === \false || $written !== $expected) {
            if (\is_file($tmp)) {
                // phpcs:ignore WordPress.PHP.NoSilencedErrors.Discouraged -- best-effort cleanup
                @\unlink($tmp);
            }
            return \false;
        }
        // phpcs:ignore WordPress.PHP.NoSilencedErrors.Discouraged -- rename can warn on cross-fs
        if (!@\rename($tmp, $path)) {
            // phpcs:ignore WordPress.PHP.NoSilencedErrors.Discouraged -- best-effort cleanup
            @\unlink($tmp);
            return \false;
        }
        return \true;
    }
    /**
     * HTTP URL for a path under the uploads `basedir`. False if the path is not under that root.
     * Uses WordPress' basedir/baseurl pair so a custom `upload_path` still yields a reachable URL.
     *
     * @param string $absolutePath
     * @return string|false
     */
    public static function toUploadsUrl($absolutePath)
    {
        $uploads = \wp_upload_dir(null, \false);
        if (!empty($uploads['error']) || empty($uploads['basedir']) || empty($uploads['baseurl'])) {
            return \false;
        }
        $root = \trailingslashit(\wp_normalize_path($uploads['basedir']));
        $path = \wp_normalize_path($absolutePath);
        if (\strpos($path, $root) !== 0) {
            return \false;
        }
        return \trailingslashit(\set_url_scheme($uploads['baseurl'])) . \substr($path, \strlen($root));
    }
    /**
     * Calendar bucket index (60-day periods).
     *
     * @param int|null $now
     */
    public static function getBucketIndex($now = null)
    {
        return \intdiv($now === null ? \time() : $now, self::BUCKET_PERIOD_SECONDS);
    }
    /**
     * 10-char hex id for the active (or given) calendar bucket.
     * Mixes install salt + plugin slug so the folder is neither a stable EasyList pin
     * nor shared with another plugin.
     *
     * @param string $namespace Plugin slug, e.g. `real-cookie-banner`
     * @param int|null $bucketIndex
     */
    public static function getBucketId($namespace, $bucketIndex = null)
    {
        $index = $bucketIndex === null ? self::getBucketIndex() : $bucketIndex;
        $nonceSeed = \substr(UtilsUtils::getNonceSalt(), 0, 5);
        return \substr(\hash('sha256', ABSPATH . '|' . $nonceSeed . '|' . $namespace . '|' . (string) $index), 0, self::FINGERPRINT_LENGTH);
    }
    /**
     * Absolute path to the uploads base directory. Does not create it.
     *
     * @return string|false
     */
    public static function getUploadsRoot()
    {
        $uploads = \wp_upload_dir(null, \false);
        if (!empty($uploads['error']) || empty($uploads['basedir'])) {
            return \false;
        }
        $folder = \untrailingslashit(\wp_normalize_path($uploads['basedir']));
        if (!\is_dir($folder) || !\wp_is_writable($folder)) {
            return \false;
        }
        return \trailingslashit($folder);
    }
}
