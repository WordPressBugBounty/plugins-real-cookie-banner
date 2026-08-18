<?php

namespace DevOwl\RealCookieBanner\view\shortcode;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\FastHtmlTag;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Shortcode to print a cookie policy.
 * @internal
 */
class CookiePolicyShortcode
{
    use UtilsProvider;
    const TAG = 'rcb-cookie-policy';
    /**
     * Render shortcode HTML.
     *
     * @param mixed $atts
     * @return string
     */
    public static function render($atts)
    {
        $atts = \shortcode_atts([
            'sections' => null,
            // comma separated list of sections to include
            'remove-headlines' => \false,
        ], $atts, self::TAG);
        $sections = $atts['sections'] ? \explode(',', $atts['sections']) : null;
        $removeHeadlines = $atts['remove-headlines'] === 'true' ? \true : \false;
        $core = Core::getInstance();
        $html = $core->getCookieConsentManagement()->getCookiePolicy()->renderHtml(!$core->getCompLanguage()->isCurrentlyInEditorPreview(), $sections, $removeHeadlines);
        // Nested shortcodes belong in customize copy, not in the TCF services table.
        // WP's shortcode regex copies the haystack; keep the table out via FastHtmlTag skip islands.
        list($html, $skipRegions) = FastHtmlTag::extractSkipRegions($html, 'HeadlessContentBlocker');
        return FastHtmlTag::restoreSkipRegions(\do_shortcode($html), $skipRegions);
    }
}
