<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\DeliverAnonymousAsset;

use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Utils as UtilsUtils;
use Throwable;
use WP_Filesystem_Direct;
/**
 * Create `DeliverAnonymousAsset` instances and own the uploads-scoped bucket lifecycle.
 * @internal
 */
class AnonymousAssetBuilder
{
    const COPY_EXTENSIONS = ['js', 'css'];
    const BUCKET_INDEX_FILENAME = '.bucket-index';
    /**
     * Plugin slug mixed into the bucket hash so plugins do not share folders.
     * Not used as a path segment — a slug in the URL is trivial to block.
     *
     * @var string
     */
    private $namespace;
    private $folder;
    /**
     * Optional sourceMappingURL directory resolver.
     *
     * @var callable|null
     */
    private $sourceMapBaseUrlResolver;
    /**
     * File-body markers for leftover v1 sweep.
     *
     * @var string[]
     */
    private $legacyCleanupMarkers;
    /**
     * Cache of `Utils::getUploadsRoot()`.
     *
     * @var string|false `false` when parent is not writable
     */
    private $contentDir;
    /**
     * Request-scoped: uploads/mkdir failed. Later `ready()` calls fail closed without retrying mkdir.
     *
     * @var bool
     */
    private $ensureFailed = \false;
    /**
     * The pool of collected built `DeliverAnonymousAsset` instances.
     *
     * @var DeliverAnonymousAsset[]
     */
    private $pool = [];
    /**
     * Localize-resource orchestration.
     *
     * @var LocalizeScriptResources|null
     */
    private $localizeScriptResources;
    /**
     * C'tor.
     *
     * @param string $namespace Plugin slug, e.g. `real-cookie-banner`
     * @param string $folder The absolute path to your original files
     * @param callable|null $sourceMapBaseUrlResolver `function (string $originalFilePath): string` URL prefix for `.map` files
     * @param string[] $legacyCleanupMarkers Restrict leftover v1 deletion to files containing one of these substrings
     */
    public function __construct($namespace, $folder, $sourceMapBaseUrlResolver = null, $legacyCleanupMarkers = [])
    {
        $this->namespace = $namespace;
        $this->folder = $folder;
        $this->sourceMapBaseUrlResolver = $sourceMapBaseUrlResolver;
        $this->legacyCleanupMarkers = $legacyCleanupMarkers;
    }
    /**
     * Get the URL to the anonymous folder.
     */
    public function generateFolderSrc()
    {
        $anonymousFolder = $this->ensureAnonymousFolder(\true);
        if ($anonymousFolder === \false) {
            return '';
        }
        $url = Utils::toUploadsUrl($anonymousFolder);
        return $url === \false ? '' : \trailingslashit($url);
    }
    /**
     * Create an anonymous asset. Do not forget to make it `->ready()` after you enqueued it!
     * This must be done in `wp` hook as it is the first available hook.
     *
     * @param string $handle
     * @param string $file
     * @param string $id If you pass an ID, the instance will be hold in this class pool and you can use `this::ready()`
     */
    public function build($handle, $file, $id = null)
    {
        $instance = new DeliverAnonymousAsset($this, $handle, $file);
        if ($id !== null) {
            $this->pool[$id] = $instance;
        }
        return $instance;
    }
    /**
     * Make a handle ready. Do not forget to `->build()` it previously!
     *
     * @param string $id
     * @param boolean $condition
     */
    public function ready($id, $condition = \true)
    {
        if (isset($this->pool[$id]) && $condition) {
            return $this->pool[$id]->ready();
        }
        return \false;
    }
    /**
     * Active bucket id (10-char hex).
     */
    public function getHash()
    {
        return Utils::getBucketId($this->namespace);
    }
    /**
     * Create the anonymous folder under `uploads/<bucket-id>/<dist|dev>/`.
     *
     * @param boolean|null $skipExistenceCheck
     */
    public function ensureAnonymousFolder($skipExistenceCheck = null)
    {
        if ($this->ensureFailed) {
            return \false;
        }
        if ($skipExistenceCheck === \true) {
            $uploadsRoot = $this->getContentDir();
            if (!$uploadsRoot) {
                return \false;
            }
            return $uploadsRoot . $this->getHash() . '/' . \basename($this->folder) . '/';
        }
        $uploadsRoot = $this->ensureUploadsRoot();
        if (!$uploadsRoot) {
            $this->ensureFailed = \true;
            return \false;
        }
        $hash = $this->getHash();
        $hashFolderPath = $uploadsRoot . $hash . '/';
        $folder = $hashFolderPath . \basename($this->folder) . '/';
        $bucketExisted = \is_dir($hashFolderPath);
        if ($skipExistenceCheck === null && \is_dir($folder)) {
            return \true;
        }
        if (!\wp_mkdir_p($folder)) {
            $this->ensureFailed = \true;
            return \false;
        }
        require_once ABSPATH . 'wp-admin/includes/file.php';
        UtilsUtils::runDirectFilesystem(function ($fs) use($hashFolderPath, $folder) {
            /**
             * WP_Filesystem_Direct.
             *
             * @var WP_Filesystem_Direct
             */
            $fs = $fs;
            $fs->chmod($hashFolderPath, \constant('FS_CHMOD_DIR'));
            $fs->chmod($folder, \constant('FS_CHMOD_DIR'));
        });
        \file_put_contents($hashFolderPath . self::BUCKET_INDEX_FILENAME, (string) Utils::getBucketIndex());
        $filesToCopy = \array_filter(\list_files($this->folder, 1), function ($file) {
            $extension = \pathinfo($file, \PATHINFO_EXTENSION);
            return \in_array($extension, self::COPY_EXTENSIONS, \true);
        });
        foreach ($filesToCopy as $fileToCopy) {
            $filename = $folder . self::generateFilename($hash, $fileToCopy);
            if (!Utils::writeFileCompletely($filename, Utils::readFileAndCorrectSourceMap($fileToCopy, $this->sourceMapBaseUrlResolver))) {
                // On-demand copy retries later; skip chmod for failed writes.
                continue;
            }
            UtilsUtils::runDirectFilesystem(function ($fs) use($filename) {
                /**
                 * WP_Filesystem_Direct.
                 *
                 * @var WP_Filesystem_Direct
                 */
                $fs = $fs;
                $fs->chmod($filename, \constant('FS_CHMOD_FILE'));
            });
        }
        if (!$bucketExisted) {
            try {
                LegacyLayoutCleanup::run($this->legacyCleanupMarkers);
            } catch (Throwable $e) {
                // Leftover sweep must not take down the site.
            }
            $this->purgeExpiredBuckets($uploadsRoot);
        }
        return \true;
    }
    /**
     * Recopy files in the current bucket (e.g. after a plugin update).
     */
    public function forceRecreation()
    {
        $this->ensureAnonymousFolder(\false);
    }
    /**
     * Uploads base directory, or false when not writable.
     */
    public function getContentDir()
    {
        if ($this->contentDir === null) {
            $this->contentDir = Utils::getUploadsRoot();
        }
        return $this->contentDir;
    }
    /**
     * Rewrite sourceMappingURL in a copied file using the constructor resolver.
     *
     * @param string $path
     */
    public function readFileAndCorrectSourceMap($path)
    {
        return Utils::readFileAndCorrectSourceMap($path, $this->sourceMapBaseUrlResolver);
    }
    /**
     * Localize-resource orchestration for this builder.
     *
     * @return LocalizeScriptResources
     */
    public function getLocalizeScriptResources()
    {
        if ($this->localizeScriptResources === null) {
            $this->localizeScriptResources = new LocalizeScriptResources($this);
        }
        return $this->localizeScriptResources;
    }
    /**
     * Generate the filename for a given original filename.
     *
     * @param string $hash The hash to use
     * @param string $originalFilenameOrPath
     */
    public static function generateFilename($hash, $originalFilenameOrPath)
    {
        $basename = \basename($originalFilenameOrPath);
        $extension = \pathinfo($basename, \PATHINFO_EXTENSION);
        return UtilsUtils::simpleHash($hash . $basename) . '.' . $extension;
    }
    /**
     * Remove this plugin's buckets under `uploads/`. Use this in `uninstall.php`.
     *
     * @param string $namespace Plugin slug passed to the constructor
     */
    public static function uninstall($namespace)
    {
        $uploadsRoot = Utils::getUploadsRoot();
        if ($uploadsRoot === \false || !\is_dir($uploadsRoot)) {
            return;
        }
        foreach (self::listHexBucketDirs($uploadsRoot) as $path) {
            $name = \basename($path);
            if (self::ownedBucketIndex(\trailingslashit($path), $name, $namespace) !== \false) {
                self::rmdir($path);
            }
        }
    }
    /**
     * Uploads root must be writable. WordPress already created it.
     *
     * @return string|false
     */
    protected function ensureUploadsRoot()
    {
        $uploadsRoot = $this->getContentDir();
        if (!$uploadsRoot || !\wp_is_writable($uploadsRoot)) {
            return \false;
        }
        return $uploadsRoot;
    }
    /**
     * Delete this plugin's buckets older than current + previous. Never delete `uploads/` itself.
     *
     * @param string $uploadsRoot
     */
    protected function purgeExpiredBuckets($uploadsRoot)
    {
        $current = Utils::getBucketIndex();
        foreach (self::listHexBucketDirs($uploadsRoot) as $path) {
            $name = \basename($path);
            $index = self::ownedBucketIndex(\trailingslashit($path), $name, $this->namespace);
            if ($index === \false || $index >= $current - 1) {
                continue;
            }
            self::rmdir($path);
        }
    }
    /**
     * Depth-1 `uploads/<10-hex>/` directories only. Does not recurse into year/month media trees.
     *
     * @param string $uploadsRoot
     * @return string[]
     */
    private static function listHexBucketDirs($uploadsRoot)
    {
        $dirs = \glob($uploadsRoot . \str_repeat('[a-f0-9]', Utils::FINGERPRINT_LENGTH), \GLOB_ONLYDIR);
        if (!\is_array($dirs)) {
            return [];
        }
        $out = [];
        foreach ($dirs as $path) {
            if (!\is_link($path)) {
                $out[] = $path;
            }
        }
        return $out;
    }
    /**
     * Sidecar index when `$name` is this plugin's bucket, otherwise false.
     *
     * @param string $bucketDir
     * @param string $name
     * @param string $namespace
     * @return int|false
     */
    private static function ownedBucketIndex($bucketDir, $name, $namespace)
    {
        $sidecar = $bucketDir . self::BUCKET_INDEX_FILENAME;
        if (!\is_readable($sidecar)) {
            return \false;
        }
        $index = \intval(\file_get_contents($sidecar));
        if ($name !== Utils::getBucketId($namespace, $index)) {
            return \false;
        }
        return $index;
    }
    /**
     * Recursively remove a directory via WP_Filesystem_Direct.
     *
     * @param string $path
     */
    private static function rmdir($path)
    {
        UtilsUtils::runDirectFilesystem(function ($fs) use($path) {
            /**
             * WP_Filesystem_Direct.
             *
             * @var WP_Filesystem_Direct
             */
            $fs = $fs;
            $fs->rmdir($path, \true);
        });
    }
}
