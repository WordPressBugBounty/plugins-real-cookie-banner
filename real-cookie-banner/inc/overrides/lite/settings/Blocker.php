<?php

namespace DevOwl\RealCookieBanner\lite\settings;

use DevOwl\RealCookieBanner\settings\Blocker as SettingsBlocker;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/** @internal */
trait Blocker
{
    // Documented in IOverrideBlocker
    public function overrideGetOrderedCastMeta($post, &$meta)
    {
        // Free never resolves visualThumbnail; leftover Pro wrapped/hero meta must not reach the frontend.
        $meta[SettingsBlocker::META_NAME_VISUAL_TYPE] = 'default';
    }
}
