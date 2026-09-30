<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\DeliverAnonymousAsset;

use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Utils as UtilsUtils;
use WP_Filesystem_Direct;
/**
 * Remove leftover v1 `wp-content/<32-hex>/` trees and flat hashed `.js` files.
 * @internal
 */
class LegacyLayoutCleanup
{
    const MARKER_PREFIX_BYTES = 65536;
    /**
     * Sweep leftover v1 anonymous files under `WP_CONTENT_DIR`.
     *
     * @param string[] $markers File-body substrings that must appear before anything is deleted
     */
    public static function run($markers = [])
    {
        if (\count($markers) === 0) {
            return;
        }
        $contentDir = \wp_normalize_path(\constant('WP_CONTENT_DIR') . '/');
        $hex32 = \str_repeat('[a-f0-9]', 32);
        require_once ABSPATH . 'wp-admin/includes/file.php';
        $dirs = \glob($contentDir . $hex32, \GLOB_ONLYDIR);
        if (\is_array($dirs)) {
            foreach ($dirs as $path) {
                if (\is_link($path)) {
                    continue;
                }
                if (!\is_dir(\trailingslashit($path) . 'dist') && !\is_dir(\trailingslashit($path) . 'dev')) {
                    continue;
                }
                if (!self::directoryAllowed($path, $markers)) {
                    continue;
                }
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
        $files = \glob($contentDir . $hex32 . '.js');
        if (\is_array($files)) {
            foreach ($files as $path) {
                if (!\is_file($path) || \is_link($path) || !\is_readable($path)) {
                    continue;
                }
                if (\time() - \filemtime($path) <= 28 * 24 * 60 * 60) {
                    continue;
                }
                if (!self::bodyAllowed(self::readPrefix($path), $markers)) {
                    continue;
                }
                @\unlink($path);
            }
        }
    }
    /**
     * Whether a leftover hash tree may be deleted given body markers.
     *
     * @param string $dir Hash directory (contains `dist/` or `dev/`)
     * @param string[] $markers
     */
    private static function directoryAllowed($dir, $markers)
    {
        foreach (['dist', 'dev'] as $variant) {
            $variantDir = \trailingslashit($dir) . $variant;
            if (!\is_dir($variantDir) || \is_link($variantDir)) {
                continue;
            }
            $files = \list_files($variantDir, 1);
            if (!\is_array($files)) {
                continue;
            }
            foreach ($files as $file) {
                if (\pathinfo($file, \PATHINFO_EXTENSION) !== 'js' || !\is_readable($file)) {
                    continue;
                }
                if (self::bodyAllowed(self::readPrefix($file), $markers)) {
                    return \true;
                }
            }
        }
        return \false;
    }
    /**
     * First 64KiB of a leftover JS file. Markers live in the bundle body; reading the whole file OOMs.
     *
     * @param string $path
     * @return string|false
     */
    private static function readPrefix($path)
    {
        return \file_get_contents($path, \false, null, 0, self::MARKER_PREFIX_BYTES);
    }
    /**
     * Whether file contents pass the marker gate.
     *
     * @param string|false $body
     * @param string[] $markers
     */
    private static function bodyAllowed($body, $markers)
    {
        if (!\is_string($body)) {
            return \false;
        }
        foreach ($markers as $marker) {
            if ($marker !== '' && \strpos($body, $marker) !== \false) {
                return \true;
            }
        }
        return \false;
    }
}
