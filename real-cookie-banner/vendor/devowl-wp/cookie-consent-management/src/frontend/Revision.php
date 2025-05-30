<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\frontend;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\CookieConsentManagement;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\services\Blocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings\AbstractConsent;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\tcf\StackCalculator;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\Utils;
/**
 * A revision is a document of all settings at the time of consent.
 *
 * *What does "independent" in context to "Revision" mean?* There are two types of revisions, the independent
 * one holds all settings and data which would not lead to a new required consent on the frontend for the cookie
 * banner. On the other side, when a non-independent setting and data changes, this needs a new consent from
 * the website visitor on the frontend.
 * @internal
 */
class Revision
{
    const TYPE_INDEPENDENT = 'independent';
    const TYPE_REQUIRE_NEW_CONSENT = 'dependent';
    const TYPE_ALL = 'all';
    const TCF_VENDOR_INDEPENDENT_KEYS = ['deviceStorageDisclosure'];
    /**
     * See `CookieConsentManagement`.
     *
     * @var CookieConsentManagement
     */
    private $cookieConsentManagement;
    /**
     * See `AbstractRevisionPersistance`.
     *
     * @var AbstractRevisionPersistance
     */
    private $persistence;
    /**
     * C'tor.
     *
     * @param CookieConsentManagement $cookieConsentManagement
     * @param AbstractRevisionPersistance $persistence
     */
    public function __construct($cookieConsentManagement, $persistence)
    {
        $this->cookieConsentManagement = $cookieConsentManagement;
        $this->persistence = $persistence;
        $persistence->setRevision($this);
    }
    /**
     * Prepare a revision JSON for frontend.
     *
     * @param array $revision
     */
    public function prepareJsonForFrontend($revision)
    {
        if (isset($revision['cookiePolicy']) && \strlen($revision['cookiePolicy']) > -1) {
            $revision['cookiePolicy'] = Utils::gzUncompressForDatabase($revision['cookiePolicy'], '');
        }
        return $revision;
    }
    /**
     * Create a MD5 hash from all available options and settings, save also as "current revision" if necessery.
     * If the hash differs, a new consent is needed!
     *
     * @param boolean|string $persist Persist the revision in database, pass `force` to force-write into the database
     * @param boolean $forceNewConsent
     * @return array 'revision' and 'hash'
     */
    public function create($persist = \false, $forceNewConsent = \true)
    {
        $settings = $this->getCookieConsentManagement()->getSettings();
        // Automatically update to the latest cookie version
        if ($persist && $forceNewConsent) {
            $this->getCookieConsentManagement()->getSettings()->getConsent()->setCookieVersion(AbstractConsent::DEFAULT_COOKIE_VERSION);
        }
        $cookiePolicy = '';
        if ($settings->getGeneral()->getCookiePolicyId() > 0) {
            $cookiePolicy = Utils::gzCompressForDatabase($this->getCookieConsentManagement()->getCookiePolicy()->renderHtml(), '');
        }
        // Create hashable revision
        $revision = \array_merge(['options' => $this->optionsToJson(self::TYPE_REQUIRE_NEW_CONSENT), 'groups' => $this->serviceGroupsToJson(), 'websiteOperator' => $this->websiteOperatorToJson(), 'predefinedDataProcessingInSafeCountriesLists' => AbstractConsent::PREDEFINED_DATA_PROCESSING_IN_SAFE_COUNTRIES_LISTS, 'nonVisualBlocker' => $this->nonVisualBlockersToJson(), 'cookiePolicy' => $cookiePolicy], $this->getPersistence()->getContextVariablesExplicit());
        $tcf = $settings->getTcf();
        if ($tcf->isActive()) {
            $revision['tcf'] = $this->tcfToJson(self::TYPE_REQUIRE_NEW_CONSENT);
        }
        $gcm = $settings->getGoogleConsentMode();
        if ($gcm->isEnabled()) {
            $revision['gcm'] = $gcm->getConsentModes();
        }
        $frontend = $this->getCookieConsentManagement()->getFrontend();
        $lazyLoadedData = $frontend->prepareLazyData($revision);
        $revision['lazyLoadedDataForSecondView'] = $lazyLoadedData;
        $revision = $this->getPersistence()->alterRevision($revision);
        $json_revision = \json_encode($revision);
        $hash = \md5($json_revision);
        $result = ['revision' => $revision, 'hash' => $hash];
        if ($persist && ($this->getPersistence()->getCurrentHash() !== $hash || $persist === 'force')) {
            $this->getPersistence()->persist($result, $forceNewConsent);
        }
        return $result;
    }
    /**
     * Create a MD5 hash from all available options and settings which do not require a new consent (independent).
     *
     * @param boolean $persist Persist the revision in database
     * @return array 'revision' and 'hash'
     */
    public function createIndependent($persist = \false)
    {
        $settings = $this->getCookieConsentManagement()->getSettings();
        // Create hashable revision
        $revision = ['options' => $this->optionsToJson(self::TYPE_INDEPENDENT), 'blocker' => $this->blockersToJson(), 'links' => $this->bannerLinkToJson(), 'languageSwitcher' => \array_map(function ($ls) {
            $result = $ls->toJson();
            // Remove the `url` as this leads to a lot of revisions (per sub page)
            unset($result['url']);
            return $result;
        }, $settings->getGeneral()->getLanguages())];
        $consentForwardingExternalHosts = $settings->getMultisite()->getExternalHosts();
        if (!empty($consentForwardingExternalHosts)) {
            $revision['consentForwardingExternalHosts'] = $consentForwardingExternalHosts;
        }
        $tcf = $settings->getTcf();
        if ($tcf->isActive()) {
            $revision['tcfMetadata'] = $this->tcfMetadataToJson();
            $revision['tcf'] = $this->tcfToJson(self::TYPE_INDEPENDENT);
        }
        $frontend = $this->getCookieConsentManagement()->getFrontend();
        $lazyLoadedData = $frontend->prepareLazyData($revision);
        $revision['lazyLoadedDataForSecondView'] = $lazyLoadedData;
        $revision = $this->getPersistence()->alterRevisionIndependent($revision);
        $json_revision = \json_encode($revision);
        $hash = \md5($json_revision);
        $result = ['revision' => $revision, 'hash' => $hash];
        if ($persist) {
            $this->getPersistence()->persistIndependent($result, $hash);
        }
        return $result;
    }
    /**
     * Get settings as array object so it can be used within e.g. JSON or serialize to the frontend.
     *
     * @param string $type See `TYPE_` constants
     */
    public function optionsToJson($type = self::TYPE_ALL)
    {
        $result = [];
        $settings = $this->getCookieConsentManagement()->getSettings();
        $general = $settings->getGeneral();
        $consent = $settings->getConsent();
        $multisite = $settings->getMultisite();
        $tcf = $settings->getTcf();
        $countryBypass = $settings->getCountryBypass();
        $gcm = $settings->getGoogleConsentMode();
        if ($type === self::TYPE_ALL || $type === self::TYPE_INDEPENDENT) {
            $result['isBannerActive'] = $general->isBannerActive();
            $result['isBlockerActive'] = $general->isBlockerActive();
            $result['hidePageIds'] = $general->getAdditionalPageHideIds();
            $result['isRespectDoNotTrack'] = $consent->isRespectDoNotTrack();
            $result['failedConsentDocumentationHandling'] = $consent->getFailedConsentDocumentationHandling();
            $result['isSaveIp'] = $consent->isSaveIpEnabled();
            $result['consentDuration'] = $consent->getConsentDuration();
            $result['isBannerLessConsent'] = $consent->isBannerLessConsent();
            $result['bannerLessConsentShowOnPageIds'] = $consent->getBannerLessConsentShowOnPageIds();
        }
        if ($type === self::TYPE_ALL || $type === self::TYPE_REQUIRE_NEW_CONSENT) {
            $result['operatorContactAddress'] = $general->getOperatorContactAddress();
            $result['operatorCountry'] = $general->getOperatorCountry();
            $result['operatorContactPhone'] = $general->getOperatorContactPhone();
            $result['operatorContactEmail'] = $general->getOperatorContactEmail();
            $result['operatorContactFormId'] = $general->getOperatorContactFormId();
            $result['cookiePolicyId'] = $general->getCookiePolicyId();
            $result['territorialLegalBasis'] = $general->getTerritorialLegalBasis();
            $result['setCookiesViaManager'] = $general->getSetCookiesViaManager();
            $result['isAcceptAllForBots'] = $consent->isAcceptAllForBots();
            $result['cookieDuration'] = $consent->getCookieDuration();
            $result['cookieVersion'] = $consent->getCookieVersion();
            $result['isDataProcessingInUnsafeCountries'] = $consent->isDataProcessingInUnsafeCountries();
            $result['isAgeNotice'] = $consent->isAgeNoticeEnabled();
            $result['ageNoticeAgeLimit'] = $consent->getAgeNoticeAgeLimit();
            $result['isListServicesNotice'] = $consent->isListServicesNoticeEnabled();
            $result['isConsentForwarding'] = $multisite->isConsentForwarding();
            $result['forwardTo'] = $multisite->getForwardTo();
            $result['crossDomains'] = $multisite->getCrossDomains();
            $result['isTcf'] = $tcf->isActive();
            // $result['tcfPublisherCc'] = // deprecated, operator country is used instead
            // $result['tcfScopeOfConsent'] = // no longer in use
            $result['isCountryBypass'] = $countryBypass->isActive();
            $result['countryBypassCountries'] = $countryBypass->getCountries();
            $result['countryBypassType'] = $countryBypass->getType();
            $result['isGcm'] = $gcm->isEnabled();
            $result['isGcmCollectAdditionalDataViaUrlParameters'] = $gcm->isCollectAdditionalDataViaUrlParameters();
            $result['isGcmRedactAdsDataWithoutConsent'] = $gcm->isRedactAdsDataWithoutConsent();
            $result['isGcmListPurposes'] = $gcm->isListPurposes();
        }
        // Not needed in frontend / revision
        // $countryBypass->getNextUpdateTime();
        // $gcm->isShowRecommandationsWithoutConsent()
        return $result;
    }
    /**
     * TCF data (vendors, declarations, stacks, ...) to array.
     *
     * TCF Policy 2025-01-16.5.0.a, Chapter IV, point 21(8) defines (without annotations):
     *
     * > 8. If a Vendor that was not included in a prior use of the Framework UI is added by the Publisher,
     * > the Publisher must resurface or instruct its CMP to resurface the Framework UI to establish that
     * > Vendor’s Legal Bases before signalling that the Vendor’s Legal Bases have been established. It also
     * > means resurfacing the UI, for example, when a previously surfaced Vendor claims a previously
     * > undisclosed Purpose or changes its declared Legal Basis for a previously disclosed Purpose before
     * > signalling that the Vendor’s Legal Bases have been established.
     *
     * This means, we **must** according to the TCF policy resurface the cookie banner if:
     *
     * - An new vendor configuration is created
     * - A legal basis of an of a purpose existing vendor configuration has been changed
     * - A new purpose has been added by a vendor
     *
     * From a legal point of view, all information according to Art. 13 GDPR are relevant for a informed consent,
     * which includes more information from the vendor definition as required by TCF (e.g. privacy policy link or
     * contact information of the vendor).
     *
     * **Suggested solution**: All data of the vendor except of the device disclosure (controlled by the vendor's
     * server, but not IAB Europe) trigger a resurface. This should be a balance between legal compliance,
     * fulfilling the IAB Europe requirements and user-friendliness.
     *
     * @see https://iabeurope.eu/iab-europe-transparency-consent-framework-policies/
     * @see https://app.clickup.com/t/8698ggfna?comment=90120113671756&threadedComment=90120113906767
     *
     * @param string $type See `TYPE_` constants
     */
    public function tcfToJson($type = self::TYPE_ALL)
    {
        $tcf = $this->getCookieConsentManagement()->getSettings()->getTcf();
        if (!$tcf->isActive()) {
            return \false;
        }
        $gvl = $tcf->getGvl();
        $vendorConfigurations = $tcf->getVendorConfigurations();
        $output = ['vendors' => [], 'stacks' => [], StackCalculator::DECLARATION_TYPE_PURPOSES => [], StackCalculator::DECLARATION_TYPE_SPECIAL_PURPOSES => [], StackCalculator::DECLARATION_TYPE_FEATURES => [], StackCalculator::DECLARATION_TYPE_SPECIAL_FEATURES => [], StackCalculator::DECLARATION_TYPE_DATA_CATEGORIES => [], 'vendorConfigurations' => []];
        $usedDeclarations = [StackCalculator::DECLARATION_TYPE_PURPOSES => [], StackCalculator::DECLARATION_TYPE_SPECIAL_PURPOSES => [], StackCalculator::DECLARATION_TYPE_FEATURES => [], StackCalculator::DECLARATION_TYPE_SPECIAL_FEATURES => [], StackCalculator::DECLARATION_TYPE_DATA_CATEGORIES => []];
        foreach ($vendorConfigurations as $vendorConfiguration) {
            $vendorId = $vendorConfiguration->getVendorId();
            if (\in_array($type, [self::TYPE_REQUIRE_NEW_CONSENT, self::TYPE_ALL], \true)) {
                $output['vendorConfigurations'][$vendorId] = $vendorConfiguration->toJson();
            }
            $output['vendors'][$vendorId] = $vendorConfiguration->getVendor();
            if ($type !== self::TYPE_ALL) {
                foreach ($output['vendors'][$vendorId] as $key => $value) {
                    $isIndependent = \in_array($key, self::TCF_VENDOR_INDEPENDENT_KEYS, \true);
                    if ($type === self::TYPE_REQUIRE_NEW_CONSENT && $isIndependent || $type === self::TYPE_INDEPENDENT && !$isIndependent) {
                        unset($output['vendors'][$vendorId][$key]);
                    }
                }
            }
            foreach ($usedDeclarations as $declaration => $used) {
                $usedDeclarations[$declaration] = \array_values(\array_unique(\array_merge($vendorConfiguration->getUsedDeclarations()[$declaration], $used)));
            }
        }
        // Map declaration types to objects and mark unused
        if (\in_array($type, [self::TYPE_REQUIRE_NEW_CONSENT, self::TYPE_ALL], \true)) {
            $output = \array_merge($output, $gvl->allDeclarations(['onlyReturnDeclarations' => \true]));
            foreach (StackCalculator::DECLARATION_TYPES as $declaration) {
                foreach ($output[$declaration] as $id => $declarationObject) {
                    if (isset($usedDeclarations[$declaration]) && !\in_array($id, $usedDeclarations[$declaration], \true)) {
                        $output['unused'][$declaration][] = $id;
                    }
                }
            }
            foreach (StackCalculator::DECLARATION_TYPES as $declaration) {
                $output['unused'][$declaration] = $output['unused'][$declaration] ?? [];
            }
            // Calculate stacks on used
            if (\count($usedDeclarations) > 0) {
                $output['stacks'] = (new StackCalculator($gvl->stacks()['stacks'], $usedDeclarations))->calculateBestSuitableStacks();
            }
        } else {
            // In independent revision we currently hold the vendors only with their device disclosure
            return ['vendors' => (object) $output['vendors']];
        }
        // Cast the output values to objects as they can be empty
        foreach (\array_keys($output) as $key) {
            $output[$key] = (object) $output[$key];
        }
        return $output;
    }
    /**
     * TCF metadata to array.
     */
    public function tcfMetadataToJson()
    {
        $tcf = $this->getCookieConsentManagement()->getSettings()->getTcf();
        if (!$tcf->isActive()) {
            return \false;
        }
        $gvl = $tcf->getGvl();
        list($gvlSpecificationVersion, $tcfPolicyVersion, $vendorListVersion) = $gvl->getLatestVersions();
        return ['publisherCc' => $this->getCookieConsentManagement()->getSettings()->getGeneral()->getOperatorCountry(), 'gvlSpecificationVersion' => $gvlSpecificationVersion, 'tcfPolicyVersion' => $tcfPolicyVersion, 'vendorListVersion' => $vendorListVersion, 'scope' => $tcf->getScopeOfConsent(), 'language' => $gvl->getCurrentLanguage()];
    }
    /**
     * Operator as own object as it is needed in this format for `@devowl-wp/react-cookie-banner`.
     */
    public function websiteOperatorToJson()
    {
        $general = $this->getCookieConsentManagement()->getSettings()->getGeneral();
        return ['address' => $general->getOperatorContactAddress(), 'country' => $general->getOperatorCountry(), 'contactEmail' => $general->getOperatorContactEmail(), 'contactPhone' => $general->getOperatorContactPhone(), 'contactFormUrl' => $general->getOperatorContactFormUrl()];
    }
    /**
     * All service groups as JSON representation.
     *
     * @return array[]
     */
    public function serviceGroupsToJson()
    {
        $result = [];
        foreach ($this->getCookieConsentManagement()->getSettings()->getGeneral()->getServiceGroups() as $group) {
            $result[] = $group->toJson();
        }
        return $result;
    }
    /**
     * All content blockers as JSON representation.
     *
     * @return array[]
     */
    public function blockersToJson()
    {
        $result = [];
        foreach ($this->getCookieConsentManagement()->getSettings()->getGeneral()->getBlocker() as $blocker) {
            $result[] = $blocker->toJson();
        }
        return $result;
    }
    /**
     * All non-visual content blockers as they should require a new consent.
     *
     * @return array[]
     */
    public function nonVisualBlockersToJson()
    {
        $result = [];
        foreach ($this->getCookieConsentManagement()->getSettings()->getGeneral()->getBlocker() as $blocker) {
            if ($blocker->isVisual()) {
                continue;
            }
            $criteria = $blocker->getCriteria();
            $nonVisualRow = ['id' => $blocker->getId(), 'rules' => $blocker->getRules()];
            if ($criteria !== Blocker::DEFAULT_CRITERIA) {
                $nonVisualRow['criteria'] = $criteria;
            }
            switch ($criteria) {
                case Blocker::CRITERIA_SERVICES:
                    $nonVisualRow['services'] = $blocker->getServices();
                    break;
                case Blocker::CRITERIA_TCF_VENDORS:
                    $nonVisualRow['tcfVendors'] = $blocker->getTcfVendors();
                    $nonVisualRow['tcfPurposes'] = $blocker->getTcfPurposes();
                    break;
                default:
                    break;
            }
            $result[] = $nonVisualRow;
        }
        return $result;
    }
    /**
     * All banner links as JSON representation.
     *
     * @return array[]
     */
    public function bannerLinkToJson()
    {
        $result = [];
        foreach ($this->getCookieConsentManagement()->getSettings()->getGeneral()->getBannerLinks() as $link) {
            $result[] = $link->toJson();
        }
        return $result;
    }
    /**
     * Get the current active revision. If there is not current revision (only after activating the plugin itself),
     * the current revision hash gets calculated from current settings.
     *
     * @return string
     */
    public function getEnsuredCurrentHash()
    {
        $hash = $this->getPersistence()->getCurrentHash();
        if (empty($hash)) {
            $hash = $this->create(\true)['hash'];
        }
        return $hash;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getCookieConsentManagement()
    {
        return $this->cookieConsentManagement;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getPersistence()
    {
        return $this->persistence;
    }
}
