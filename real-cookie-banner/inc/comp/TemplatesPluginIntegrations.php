<?php

namespace DevOwl\RealCookieBanner\comp;

use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\settings\GoogleConsentMode;
use DevOwl\RealCookieBanner\Utils;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\AbstractTemplate;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\BlockerTemplate;
use Jetpack;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Provide native integrations to known plugins which are associated to a template.
 *
 * Example: RankMath SEO: Deactivate Analytics template when the "Install code" option is activated.
 * @internal
 */
class TemplatesPluginIntegrations
{
    const SLUG_RANKMATH_SEO_PRO = 'seo-by-rank-math-pro';
    const SLUG_RANKMATH_SEO_FREE = 'seo-by-rank-math';
    const SLUG_ANALYTIFY_PRO = 'wp-analytify-pro';
    const SLUG_ANALYTIFY_FREE = 'wp-analytify';
    const SLUG_EXACTMETRICS_PRO_LEGACY = 'google-analytics-dashboard-for-wp-premium';
    const SLUG_EXACTMETRICS_PRO = 'exactmetrics-premium';
    const SLUG_EXACTMETRICS_FREE = 'google-analytics-dashboard-for-wp';
    const SLUG_MONSTERINSIGHTS_PRO = 'google-analytics-premium';
    const SLUG_MONSTERINSIGHTS_FREE = 'google-analytics-for-wordpress';
    const SLUG_GA_GOOGLE_ANALYTICS_PRO = 'ga-google-analytics-pro';
    const SLUG_GA_GOOGLE_ANALYTICS_FREE = 'ga-google-analytics';
    const SLUG_WOOCOMMERCE_GOOGLE_ANALYTICS_FREE = 'woocommerce-google-analytics-integration';
    const SLUG_WP_PIWIK = 'wp-piwik';
    const SLUG_MATOMO_PLUGIN = 'matomo';
    const SLUG_PERFMATTERS = 'perfmatters';
    const SLUG_WOOCOMMERCE_GOOGLE_ANALYTICS_PRO = 'woocommerce-google-analytics-pro';
    const OPTION_NAME_USERS_CAN_REGISTER = 'users_can_register';
    const OPTION_NAME_SHOW_COMMENTS_COOKIES_OPT_IN = 'show_comments_cookies_opt_in';
    const OPTION_NAME_RANK_MATH_GA = 'rank_math_google_analytic_options';
    const OPTION_NAME_ANALYTIFY_AUTHENTICATION = 'wp-analytify-authentication';
    const OPTION_NAME_ANALYTIFY_PROFILE = 'wp-analytify-profile';
    const OPTION_NAME_ANALYTIFY_GOOGLE_TOKEN = 'pa_google_token';
    const OPTION_NAME_EXACTMETRICS_SITE_PROFILE = 'exactmetrics_site_profile';
    const OPTION_NAME_MONSTERINSIGHTS_SITE_PROFILE = 'monsterinsights_site_profile';
    const OPTION_NAME_GA_GOOGLE_ANALYTICS = 'gap_options';
    const OPTION_NAME_GA_GOOGLE_ANALYTICS_PRO = 'gapro_configure';
    const OPTION_NAME_WOOCOMMERCE_GOOGLE_ANALYTICS = 'woocommerce_google_analytics_settings';
    const OPTION_NAME_WP_PIWIK = 'wp-piwik_global-track_mode';
    const OPTION_NAME_MATOMO_PLUGIN = 'matomo-global-option';
    const OPTION_NAME_PERFMATTERS_GA = 'perfmatters_options';
    const OPTION_NAME_JETPACK_SITE_STATS = 'stats_options';
    const OPTION_NAME_WOOCOMMERCE_GEOLOCATION = 'woocommerce_default_customer_address';
    // Currently, geo-location is only used for custom address
    const OPTION_NAME_WOOCOMMERCE_GOOGLE_ANALYTICS_PRO_ACCOUNT_ID = 'wc_google_analytics_pro_account_id';
    const OPTION_NAME_WOOCOMMERCE_GOOGLE_ANALYTICS_PRO_SETTINGS = 'woocommerce_google_analytics_pro_settings';
    const OPTION_NAME_SEOPRESS_GOOGLE_ANALYTICS = 'seopress_google_analytics_option_name';
    const OPTION_NAME_WOOCOMMERCE_FEATURE_ORDER_ATTRIBUTION = 'woocommerce_feature_order_attribution_enabled';
    const OPTION_NAME_CF_TURNSTILE_LOGIN = 'cfturnstile_login';
    const OPTION_NAME_CF_TURNSTILE_REGISTER = 'cfturnstile_register';
    const OPTION_NAME_CF_TURNSTILE_RESET = 'cfturnstile_reset';
    const OPTION_NAME_GTM4WP = 'gtm4wp-options';
    // Network options
    const OPTION_NAME_EXACTMETRICS_NETWORK_PROFIL = 'exactmetrics_network_profile';
    const OPTION_NAME_MONSTERINSIGHTS_NETWORK_PROFIL = 'monsterinsights_network_profile';
    const INVALIDATE_WHEN_OPTION_CHANGES = [self::OPTION_NAME_USERS_CAN_REGISTER, self::OPTION_NAME_RANK_MATH_GA, self::OPTION_NAME_ANALYTIFY_AUTHENTICATION, self::OPTION_NAME_ANALYTIFY_PROFILE, self::OPTION_NAME_ANALYTIFY_GOOGLE_TOKEN, self::OPTION_NAME_EXACTMETRICS_SITE_PROFILE, self::OPTION_NAME_MONSTERINSIGHTS_SITE_PROFILE, self::OPTION_NAME_GA_GOOGLE_ANALYTICS, self::OPTION_NAME_GA_GOOGLE_ANALYTICS_PRO, self::OPTION_NAME_WOOCOMMERCE_GOOGLE_ANALYTICS, self::OPTION_NAME_WP_PIWIK, self::OPTION_NAME_MATOMO_PLUGIN, self::OPTION_NAME_PERFMATTERS_GA, self::OPTION_NAME_JETPACK_SITE_STATS, self::OPTION_NAME_WOOCOMMERCE_GEOLOCATION, self::OPTION_NAME_WOOCOMMERCE_GOOGLE_ANALYTICS_PRO_ACCOUNT_ID, self::OPTION_NAME_WOOCOMMERCE_GOOGLE_ANALYTICS_PRO_SETTINGS, self::OPTION_NAME_WOOCOMMERCE_FEATURE_ORDER_ATTRIBUTION, self::OPTION_NAME_SHOW_COMMENTS_COOKIES_OPT_IN, self::OPTION_NAME_EXACTMETRICS_NETWORK_PROFIL, self::OPTION_NAME_MONSTERINSIGHTS_NETWORK_PROFIL];
    const ADD_MAIN_URL_TO_SCAN_QUEUE_WHEN_OPTION_CHANGES = [self::OPTION_NAME_SEOPRESS_GOOGLE_ANALYTICS, self::OPTION_NAME_MATOMO_PLUGIN, '/^wp-piwik/', self::OPTION_NAME_GTM4WP];
    const ADD_USER_LOGIN_URLS_TO_SCAN_QUEUE_WHEN_OPTION_CHANGES = [self::OPTION_NAME_CF_TURNSTILE_LOGIN, self::OPTION_NAME_CF_TURNSTILE_REGISTER, self::OPTION_NAME_CF_TURNSTILE_RESET, self::OPTION_NAME_USERS_CAN_REGISTER];
    /**
     * Singleton instance.
     *
     * @var TemplatesPluginIntegrations
     */
    private static $me = null;
    /**
     * C'tor.
     *
     * @codeCoverageIgnore
     */
    protected function __construct()
    {
        // Silence is golden.
    }
    /**
     * Initialize update hooks. Do this at the earliest `init` action with `priority=0` as other plugins could
     * read options already in `init` action.
     */
    public function init()
    {
        $callbackInvalidateTemplatesCache = function () {
            \wp_rcb_invalidate_templates_cache();
        };
        $addedHomeUrl = \false;
        $scanner = Core::getInstance()->getScanner();
        $callbackAddHomeUrlToScanner = function () use(&$addedHomeUrl, $scanner) {
            if (!$addedHomeUrl) {
                $addedHomeUrl = \true;
                $scanner->addUrlsToQueue([\home_url()]);
            }
        };
        $addedUserLoginUrls = \false;
        $callbackAddUserLoginUrlsToScanner = function () use(&$addedUserLoginUrls, $scanner) {
            if (!$addedUserLoginUrls) {
                $addedUserLoginUrls = \true;
                $scanner->addUrlsToQueue($scanner->getUserLoginUrls());
            }
        };
        // Check by regex options
        $callbackRegex = function ($optionName) use($callbackAddHomeUrlToScanner, $callbackAddUserLoginUrlsToScanner, $callbackInvalidateTemplatesCache) {
            foreach (self::ADD_MAIN_URL_TO_SCAN_QUEUE_WHEN_OPTION_CHANGES as $optionNameToCheck) {
                $isRegex = Utils::startsWith($optionNameToCheck, '/');
                if ($isRegex && \preg_match($optionNameToCheck, $optionName) || !$isRegex && $optionName === $optionNameToCheck) {
                    $callbackAddHomeUrlToScanner();
                    break;
                }
            }
            foreach (self::ADD_USER_LOGIN_URLS_TO_SCAN_QUEUE_WHEN_OPTION_CHANGES as $optionNameToCheck) {
                $isRegex = Utils::startsWith($optionNameToCheck, '/');
                if ($isRegex && \preg_match($optionNameToCheck, $optionName) || !$isRegex && $optionName === $optionNameToCheck) {
                    $callbackAddUserLoginUrlsToScanner();
                    break;
                }
            }
            foreach (self::INVALIDATE_WHEN_OPTION_CHANGES as $optionNameToCheck) {
                if ($isRegex && \preg_match($optionNameToCheck, $optionName) || !$isRegex && $optionName === $optionNameToCheck) {
                    $callbackInvalidateTemplatesCache();
                    break;
                }
            }
        };
        \add_action('updated_option', $callbackRegex);
        \add_action('update_site_option', $callbackRegex);
        \add_action('added_option', $callbackRegex);
        \add_action('add_site_option', $callbackRegex);
        \add_action('deleted_option', $callbackRegex);
        \add_action('delete_site_option', $callbackRegex);
        // Misc compatibilities
        \add_action('wpforms_settings_updated', $callbackInvalidateTemplatesCache);
        $this->serverSideConsentInjection();
    }
    /**
     * Server-side inject into plugins via filters and check for consent.
     */
    protected function serverSideConsentInjection()
    {
        if (!\is_admin()) {
            \add_filter('option_' . self::OPTION_NAME_WOOCOMMERCE_GEOLOCATION, [$this, 'serverSideConsentInjection_option_woocommerce_default_customer_address']);
            \add_filter('mailchimp_allowed_to_use_cookie', function ($cookieName) {
                return \wp_rcb_consent_given('http', $cookieName, '*')['cookieOptIn'];
            });
            // Facebook for WordPress (CAPI)
            \add_filter('before_conversions_api_event_sent', function ($events) {
                return \wp_rcb_consent_given('http', '_fbp', Utils::host(Utils::HOST_TYPE_MAIN_WITH_ALL_SUBDOMAINS))['cookieOptIn'] ? $events : [];
            });
            // Pretty Links
            \add_filter('prli_track_link', function ($track_me) {
                return $track_me ? \wp_rcb_consent_given('http', 'prli_click_*', '*')['cookieOptIn'] : $track_me;
            });
            // Pixel Your Site
            \add_filter('pys_disable_all_cookie', function ($isDeactivated) {
                if ($isDeactivated) {
                    return $isDeactivated;
                }
                return !\wp_rcb_consent_given('http', 'pys_session_limit', '*')['cookieOptIn'];
            });
            // WooCommerce Google Analytics: Disable Consent Mode management as this is our responsibility
            \add_filter('woocommerce_ga_gtag_consent_modes', function ($modes) {
                return GoogleConsentMode::getInstance()->isEnabled() ? [] : $modes;
            });
        }
        // WPForms
        if (\wp_doing_ajax() && isset($_REQUEST['action']) && \in_array($_REQUEST['action'], ['wpforms_submit'], \true)) {
            \add_filter('wpforms_setting', function ($value, $key) {
                if (\in_array($key, ['gdpr', 'gdpr-disable-details'], \true)) {
                    $cookieOptIn = \wp_rcb_consent_given('http', '_wpfuuid', '*')['cookieOptIn'];
                    if (!$cookieOptIn) {
                        return \true;
                    }
                }
                return $value;
            }, 10, 2);
        }
    }
    /**
     * See `serverSideConsentInjection`.
     *
     * @param string $set_default_location_to
     */
    public function serverSideConsentInjection_option_woocommerce_default_customer_address($set_default_location_to)
    {
        if (\in_array($set_default_location_to, ['geolocation', 'geolocation_ajax'], \true) && \wp_rcb_consent_given('http', 'woocommerce_geo_hash', '*')['cookieOptIn'] === \false) {
            return 'base';
        }
        return $set_default_location_to;
    }
    /**
     * Check if cookie is recommended by native integrations of plugins we know.
     *
     * @param boolean $recommended
     * @param string $identifier
     */
    public function templates_cookies_recommended($recommended, $identifier)
    {
        switch ($identifier) {
            case 'wordpress-user-login':
                return \get_option(self::OPTION_NAME_USERS_CAN_REGISTER) > 0;
            case 'cloudflare':
                $recommended = isset($_SERVER['HTTP_CF_CONNECTING_IP']) && !empty($_SERVER['HTTP_CF_CONNECTING_IP']);
                break;
            case 'ezoic-essential':
            case 'ezoic-marketing':
            case 'ezoic-preferences':
            case 'ezoic-statistic':
                $recommended = isset($header['x-middleton']);
                break;
            case 'jetpack-site-stats':
                if (\class_exists(Jetpack::class) && \method_exists(Jetpack::class, 'is_module_active')) {
                    $recommended = Jetpack::is_module_active('stats');
                }
                break;
            case 'woocommerce-geolocation':
                \remove_filter('option_' . self::OPTION_NAME_WOOCOMMERCE_GEOLOCATION, [$this, 'serverSideConsentInjection_option_woocommerce_default_customer_address']);
                $recommended = \in_array(\get_option(self::OPTION_NAME_WOOCOMMERCE_GEOLOCATION), ['geolocation', 'geolocation_ajax'], \true);
                \add_filter('option_' . self::OPTION_NAME_WOOCOMMERCE_GEOLOCATION, [$this, 'serverSideConsentInjection_option_woocommerce_default_customer_address']);
                break;
            /**
             * MonsterInsights and ExactMetrics are merging the `gtag('config', 'G|UA-)` directive
             * in JavaScript into one inline script, but are using only one `googletagmanager.com/gtag/js?id=UA`
             * script => our scanner could not reliable detect, which service is really used. E.g. using both
             * in MonsterInsights leads to only one found service (UA).
             *
             * @see https://i.imgur.com/Vr3AqB5.png
             */
            case 'monsterinsights-analytics-4':
                if (\function_exists('monsterinsights_get_v4_id') && !empty(\monsterinsights_get_v4_id())) {
                    $recommended = \true;
                }
                break;
            case 'exact-metrics-analytics-4':
                if (\function_exists('exactmetrics_get_v4_id') && !empty(\exactmetrics_get_v4_id())) {
                    $recommended = \true;
                }
                break;
            case 'wpforms':
                if (\function_exists('wpforms_setting')) {
                    $gdprEnhancements = \wpforms_setting('gdpr', \false);
                    $gdprDisableUuid = $gdprEnhancements && \wpforms_setting('gdpr-disable-uuid');
                    $gdprDisableIp = $gdprEnhancements && \wpforms_setting('gdpr-disable-details');
                    $recommended = !$gdprDisableUuid || !$gdprDisableIp;
                }
                break;
            default:
                break;
        }
        return $recommended;
    }
    /**
     * Check if blocker is recommended by native integrations of plugins we know.
     *
     * @param boolean $recommended
     * @param string $identifier
     */
    public function templates_blocker_recommended($recommended, $identifier)
    {
        switch ($identifier) {
            default:
                break;
        }
        return $recommended;
    }
    /**
     * Check if a cookie is enabled by native integrations of plugins we know.
     *
     * @param string $identifier
     */
    public function templates_cookies_enabled($identifier)
    {
        switch ($identifier) {
            case 'wordpress-comments':
                return \get_option(self::OPTION_NAME_SHOW_COMMENTS_COOKIES_OPT_IN);
            case 'wordpress-user-login':
                return \get_option(self::OPTION_NAME_USERS_CAN_REGISTER) > 0;
            default:
                break;
        }
        return null;
    }
    /**
     * Check multiple plugins for native integration.
     *
     * @param boolean $isActive
     * @param string $plugin
     * @param string $identifier
     * @param string $type
     */
    public function templates_plugin_false_positives($isActive, $plugin, $identifier, $type)
    {
        switch ($plugin) {
            case self::SLUG_RANKMATH_SEO_PRO:
            case self::SLUG_RANKMATH_SEO_FREE:
                $option = \get_option(self::OPTION_NAME_RANK_MATH_GA);
                return \is_array($option) && isset($option['install_code']) && $option['install_code'];
            case self::SLUG_ANALYTIFY_PRO:
            case self::SLUG_ANALYTIFY_FREE:
                $googleToken = \get_option(self::OPTION_NAME_ANALYTIFY_GOOGLE_TOKEN);
                $auth = \get_option(self::OPTION_NAME_ANALYTIFY_AUTHENTICATION);
                if (!empty($googleToken)) {
                    $profile = \get_option(self::OPTION_NAME_ANALYTIFY_PROFILE);
                    return \is_array($profile) && isset($profile['install_ga_code']) && $profile['install_ga_code'] === 'on';
                }
                return \is_array($auth) && isset($auth['manual_ua_code']) && !empty($auth['manual_ua_code']);
            case self::SLUG_EXACTMETRICS_PRO_LEGACY:
            case self::SLUG_EXACTMETRICS_PRO:
            case self::SLUG_EXACTMETRICS_FREE:
                return \function_exists('exactmetrics_get_ua') && !empty(\exactmetrics_get_ua()) || \function_exists('exactmetrics_get_v4_id') && !empty(\exactmetrics_get_v4_id());
            case self::SLUG_MONSTERINSIGHTS_PRO:
            case self::SLUG_MONSTERINSIGHTS_FREE:
                return \function_exists('monsterinsights_get_ua') && !empty(\monsterinsights_get_ua()) || \function_exists('monsterinsights_get_v4_id') && !empty(\monsterinsights_get_v4_id());
            case self::SLUG_GA_GOOGLE_ANALYTICS_PRO:
                if (!\function_exists('ga_google_analytics_pro_options')) {
                    return \false;
                }
                $option = \ga_google_analytics_pro_options();
                return \is_array($option) && isset($option['gapro_id']) && !empty($option['gapro_id']);
            case self::SLUG_GA_GOOGLE_ANALYTICS_FREE:
                if (!\function_exists('ga_google_analytics_options')) {
                    return \false;
                }
                $option = \ga_google_analytics_options();
                return \is_array($option) && isset($option['tracking_id']) && !empty($option['tracking_id']);
            case self::SLUG_WOOCOMMERCE_GOOGLE_ANALYTICS_FREE:
                $option = \get_option(self::OPTION_NAME_WOOCOMMERCE_GOOGLE_ANALYTICS);
                if (!\is_array($option)) {
                    return \false;
                }
                return isset($option['ga_id']) && !empty($option['ga_id']);
            case self::SLUG_WP_PIWIK:
                return \get_option(self::OPTION_NAME_WP_PIWIK) !== 'disabled';
            case self::SLUG_MATOMO_PLUGIN:
                // See https://github.com/matomo-org/matomo-for-wordpress/blob/2b97336961867136b7be60d9241b874160e88b95/classes/WpMatomo/Settings.php#L217-L221
                foreach ([1, 2] as $int) {
                    $option = $int === 1 ? \get_option(self::OPTION_NAME_MATOMO_PLUGIN) : \get_site_option(self::OPTION_NAME_MATOMO_PLUGIN);
                    if (!\is_array($option) || !isset($option['track_mode'])) {
                        continue;
                    }
                    if ($option['track_mode'] !== 'disabled') {
                        return \true;
                    }
                }
                return \false;
            case self::SLUG_PERFMATTERS:
                $option = \get_option(self::OPTION_NAME_PERFMATTERS_GA);
                if (!\is_array($option) || !isset($option['analytics'])) {
                    return \false;
                }
                $enable_local_ga = $option['analytics']['enable_local_ga'] ?? null;
                return $enable_local_ga === '1';
            case self::SLUG_WOOCOMMERCE_GOOGLE_ANALYTICS_PRO:
                $optionSettings = \get_option(self::OPTION_NAME_WOOCOMMERCE_GOOGLE_ANALYTICS_PRO_SETTINGS);
                if (!\is_array($optionSettings) || !isset($optionSettings['enabled'])) {
                    return \false;
                }
                $optionAccountId = \get_option(self::OPTION_NAME_WOOCOMMERCE_GOOGLE_ANALYTICS_PRO_ACCOUNT_ID);
                $trackingId = $optionSettings['tracking_id'] ?? null;
                return (!empty($optionAccountId) || !empty($trackingId)) && $optionSettings['enabled'] === 'yes';
            default:
                break;
        }
        switch ($identifier) {
            case 'woocommerce-order-attribution':
                return \get_option(self::OPTION_NAME_WOOCOMMERCE_FEATURE_ORDER_ATTRIBUTION) === 'yes';
            default:
                break;
        }
        return $isActive;
    }
    /**
     * Allows to add rules and rule groups to the blocker template before it is persisted.
     *
     * @param AbstractTemplate $template
     */
    public function templates_before_persist($template)
    {
        $identifier = $template->identifier;
        if ($template instanceof BlockerTemplate) {
            switch ($identifier) {
                case 'wordpress-comments':
                    $ruleExpression = 'form[action*="wp-comments-post.php"]';
                    $hasRule = \false;
                    foreach ($template->rules as $rule) {
                        if ($rule['expression'] === $ruleExpression) {
                            $hasRule = \true;
                        }
                    }
                    if (!$hasRule) {
                        $template->rules[] = ['expression' => $ruleExpression, 'roles' => [BlockerTemplate::ROLE_SCANNER]];
                    }
                    break;
                default:
                    break;
            }
        }
    }
    /**
     * Get singleton instance.
     *
     * @codeCoverageIgnore
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\comp\TemplatesPluginIntegrations() : self::$me;
    }
}
