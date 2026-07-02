<?php

namespace DevOwl\RealCookieBanner\view;

use DevOwl\RealCookieBanner\view\BannerCustomize;
use DevOwl\RealCookieBanner\view\customize\banner\BasicLayout;
use DevOwl\RealCookieBanner\view\customize\banner\StickyLinks;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Builds animate.css subsets from the build-time module manifest for client-side injection.
 *
 * Not delivered via wp_enqueue_style or wp_add_inline_style: an external animate.min.css blocks
 * first paint (PageSpeed Insights) and WP Rocket / other Remove Unused CSS plugins either strip
 * the link from HTML or inline the full library into Used CSS. The subset is passed through
 * localizeScript and inserted as a <style skip-rucss> tag when the banner script runs — same
 * pattern as the scoped banner stylesheet (RUCSS-compatible, no render-blocking request).
 * @internal
 */
class AnimateCss
{
    /**
     * Legacy animation names exposed in the UI but split in animate.css v4 source modules.
     */
    const ANIMATION_ALIASES = ['shake' => 'shakeX', 'lightSpeedIn' => 'lightSpeedInRight', 'lightSpeedOut' => 'lightSpeedOutRight'];
    /**
     * Hardcoded in BannerSticky (`fadeIn` / `fadeOut`) and BannerStickyBubble (`fadeInUp` / `fadeOutDown`).
     *
     * @var string[]
     */
    const STICKY_ANIMATIONS = ['fadeIn', 'fadeInUp', 'fadeOut', 'fadeOutDown'];
    /**
     * Current banner customize state.
     *
     * @var BannerCustomize
     */
    private $customize;
    /**
     * Bind subset resolution to the active banner customize state.
     *
     * @codeCoverageIgnore
     * @param BannerCustomize $customize
     */
    public function __construct(BannerCustomize $customize)
    {
        $this->customize = $customize;
    }
    /**
     * Whether banner or sticky-link animations are enabled in the current customize state.
     */
    public function hasConfiguredAnimations()
    {
        if ($this->customize->getSetting(BasicLayout::SETTING_ANIMATION_IN) !== 'none') {
            return \true;
        }
        if ($this->customize->getSetting(BasicLayout::SETTING_ANIMATION_OUT) !== 'none') {
            return \true;
        }
        return $this->customize->getSetting(StickyLinks::SETTING_ENABLED) && $this->customize->getSetting(StickyLinks::SETTING_ANIMATIONS_ENABLED);
    }
    /**
     * Whether all currently required animations are available in the manifest.
     */
    public function canInlineSubset()
    {
        $manifestKeys = \array_keys($this->getManifest());
        foreach ($this->collectRequiredAnimationNames() as $animationName) {
            $resolvedName = self::ANIMATION_ALIASES[$animationName] ?? $animationName;
            if (!\in_array($resolvedName, $manifestKeys, \true)) {
                return \false;
            }
        }
        return \true;
    }
    /**
     * Build minified inline CSS for the animations required on the current page.
     */
    public function buildInlineCss()
    {
        $manifest = $this->getManifest();
        $chunks = [$manifest['base']];
        foreach ($this->collectRequiredAnimationNames() as $animationName) {
            $resolvedName = self::ANIMATION_ALIASES[$animationName] ?? $animationName;
            if (!isset($manifest[$resolvedName])) {
                continue;
            }
            $moduleCss = $manifest[$resolvedName];
            if (\in_array($moduleCss, $chunks, \true)) {
                continue;
            }
            $chunks[] = $moduleCss;
        }
        return \implode('', $chunks);
    }
    /**
     * Resolve configured banner and sticky-link animation names for the current page.
     *
     * @return string[]
     */
    private function collectRequiredAnimationNames()
    {
        $names = [];
        $animationIn = $this->customize->getSetting(BasicLayout::SETTING_ANIMATION_IN);
        if ($animationIn !== 'none') {
            $names[] = $animationIn;
        }
        $animationOut = $this->customize->getSetting(BasicLayout::SETTING_ANIMATION_OUT);
        if ($animationOut !== 'none') {
            $names[] = $animationOut;
        }
        if ($this->customize->getSetting(StickyLinks::SETTING_ENABLED) && $this->customize->getSetting(StickyLinks::SETTING_ANIMATIONS_ENABLED)) {
            $names = \array_merge($names, self::STICKY_ANIMATIONS);
        }
        return \array_values(\array_unique($names));
    }
    /**
     * Build-time manifest keyed by animation name.
     *
     * Lines use `animationKey:minifiedCss` — only the first colon is the delimiter.
     *
     * @return array<string, string>
     */
    private function getManifest()
    {
        static $manifest = null;
        if ($manifest === null) {
            $path = __DIR__ . '/../base/others/animate-css-manifest.txt';
            $manifest = [];
            if (!\is_readable($path)) {
                return $manifest;
            }
            foreach (\file($path, \FILE_IGNORE_NEW_LINES) as $line) {
                if ($line === '' || $line[0] === '#') {
                    continue;
                }
                $delimiter = \strpos($line, ':');
                if ($delimiter === \false) {
                    continue;
                }
                $manifest[\substr($line, 0, $delimiter)] = \substr($line, $delimiter + 1);
            }
        }
        return $manifest;
    }
}
