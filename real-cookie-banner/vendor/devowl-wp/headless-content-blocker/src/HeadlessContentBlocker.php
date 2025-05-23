<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\FastHtmlTag;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\AbstractMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\ScriptInlineMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\StyleInlineMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\ScriptInlineFinder;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\SelectorSyntaxFinder;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\StyleInlineFinder;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\TagAttributeFinder;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\finder\match\MatchPluginCallbacks;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\finder\match\RerunOnMatchException;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\finder\StyleInlineAttributeFinder;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\AbstractMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\ScriptInlineMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\SelectorSyntaxMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\StyleInlineAttributeMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\StyleInlineMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\TagAttributeMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\internal\NegatePlugin;
use Exception;
use DevOwl\RealCookieBanner\Vendor\Sabberworm\CSS\CSSList\Document;
use SplObjectStorage;
/**
 * Initialize a new headless content blocker.
 * @internal
 */
class HeadlessContentBlocker extends FastHtmlTag
{
    /**
     * The tag-attribute map for the usual links like `script[src],link[href],iframe[href]`.
     */
    const TAG_ATTRIBUTE_MAP_LINKABLE = 'linkable';
    private $isSetup = \false;
    private $setupCallbacks = [];
    private $afterSetupCallbacks = [];
    private $beforeMatchCallbacks = [];
    private $checkResultCallbacks = [];
    private $blockedMatchCallbacks = [];
    private $notBlockedMatchCallbacks = [];
    private $keepAlwaysAttributes = [];
    private $keepAlwaysAttributesIfClass = [];
    private $keepAlwaysAttributesByCallback = [];
    private $skipInlineScriptVariableAssignments = [];
    private $skipInlineScriptVariableAssignmentsByCallback = [];
    private $inlineStyleDummyUrlPath = null;
    private $inlineStyleShouldBeExtractedByCallback = [];
    private $inlineStyleModifyDocumentsByCallback = [];
    private $inlineStyleBlockRuleByCallback = [];
    private $visualParentCallback = [];
    private $blockableStringExpressionCallback = [];
    private $beforeSetBlockedInResultCallback = [];
    private $modifyBlockablesCallback = [];
    private $replaceAlwaysAttributes = ['iframe' => ['sandbox'], 'script' => ['type'], 'style' => ['type']];
    private $visualParentIfClass = [];
    private $allowMultipleBlockerResults = \false;
    private $blockablesToHostsCache = null;
    /**
     * List of registered plugins pointing to their object instance.
     *
     * @var AbstractPlugin[][]
     */
    private $plugins = [];
    /**
     * List of blocked elements.
     *
     * @var AbstractBlockable[]
     */
    private $blockables = [];
    /**
     * Pool of all found markups.
     *
     * @var Markup[]
     */
    private $markupPool = [];
    private $markupChain = [];
    private $finderToMatcher;
    private $tagAttributeMap = [self::TAG_ATTRIBUTE_MAP_LINKABLE => ['tags' => ['script', 'link', 'iframe', 'embed', 'img', 'video', 'source', 'audio'], 'attr' => ['href', 'data-src', 'src', 'poster']]];
    /**
     * See `processMatch`.
     *
     * @var RerunOnMatchException[]
     */
    private $rerunExceptions = [];
    /**
     * Selector syntax map.
     *
     * @var string[]
     */
    private $selectorSyntaxMap = [];
    /**
     * This array holds instances of SelectorSyntaxFinder indexed by their associated tag.
     * Each entry is an array containing the first attribute of the finder and the finder instance itself.
     *
     * Why? Get possible selector syntax finders for a match. See also `findPotentialSelectorSyntaxFindersForMatch`.
     *
     * @var array<string, array<string, SelectorSyntaxFinder[]>>
     */
    private $selectorSyntaxFindersTagMatrix = [];
    /**
     * C'tor.
     */
    public function __construct()
    {
        parent::__construct('HeadlessContentBlocker');
        $this->init();
        $this->addPlugin(NegatePlugin::class);
        $this->finderToMatcher = new SplObjectStorage();
    }
    /**
     * Register a complete plugin to this headless content blocker.
     *
     * @param string $pluginName The class name of the plugin (extended from `AbstractPlugin`)
     */
    public function addPlugin($pluginName)
    {
        // @codeCoverageIgnoreStart
        if (!\class_exists($pluginName) || !\is_subclass_of($pluginName, AbstractPlugin::class)) {
            return null;
        }
        // @codeCoverageIgnoreEnd
        /**
         * Plugin.
         *
         * @var AbstractPlugin
         */
        $plugin = new $pluginName($this);
        $plugin->init();
        $className = \get_class($plugin);
        $this->plugins[$className] = $this->plugins[$className] ?? [];
        $this->plugins[$className][] = $plugin;
        // Register callbacks
        $this->addSetupCallback([$plugin, 'setup']);
        $this->addAfterSetupCallback([$plugin, 'afterSetup']);
        $this->addCallback([$plugin, 'modifyHtmlAfterProcessing']);
        $this->addBeforeMatchCallback([$plugin, 'beforeMatch']);
        $this->addBlockedMatchCallback([$plugin, 'blockedMatch']);
        $this->addNotBlockedMatchCallback([$plugin, 'notBlockedMatch']);
        $this->addCheckResultCallback([$plugin, 'checkResult']);
        $this->addKeepAlwaysAttributesCallback([$plugin, 'keepAlwaysAttributes']);
        $this->addSkipInlineScriptVariableAssignmentsCallback([$plugin, 'skipInlineScriptVariableAssignment']);
        $this->addVisualParentCallback([$plugin, 'visualParent']);
        $this->addInlineStyleShouldBeExtractedCallback([$plugin, 'inlineStyleShouldBeExtracted']);
        $this->addInlineStyleModifyDocumentsCallback([$plugin, 'inlineStyleModifyDocuments']);
        $this->addInlineStyleBlockRuleCallback([$plugin, 'inlineStyleBlockRule']);
        $this->addBlockableStringExpressionCallback([$plugin, 'blockableStringExpression']);
        $this->addBeforeSetBlockedInResultCallback([$plugin, 'beforeSetBlockedInResult']);
        $this->addModifyBlockablesCallback([$plugin, 'modifyBlockables']);
        return $plugin;
    }
    /**
     * Respect additional tags and attributes for a given map. For example, there is
     * the `self::TAG_ATTRIBUTE_MAP_LINKABLE` map which respects known linkable tags
     * like `script[src],link[href],iframe[href]`.
     *
     * @param string[] $tags Additional tags to consider for the passed map
     * @param string[] $attributes Additional tags to consider for the passed map
     * @param string $mapName Default is `self::TAG_ATTRIBUTE_MAP_LINKABLE`
     */
    public function addTagAttributeMap($tags, $attributes = [], $mapName = self::TAG_ATTRIBUTE_MAP_LINKABLE)
    {
        $this->tagAttributeMap[$mapName] = $this->tagAttributeMap[$mapName] ?? [];
        $map =& $this->tagAttributeMap[$mapName];
        $map['tags'] = \array_merge($map['tags'] ?? [], $tags);
        $map['attr'] = \array_merge($map['attr'] ?? [], $attributes);
    }
    /**
     * Respect additional selector-syntax as blockable candiates. All mentioned attributes will be checked with the defined blockables.
     * For example, `a[href][class*="my-class"]` will check if `href` got blocked through a blockable, and additionally if the class
     * matches `my-class`.
     *
     * @param string[] $selectorSyntax
     */
    public function addSelectorSyntaxMap($selectorSyntax)
    {
        $this->selectorSyntaxMap = \array_values(\array_merge($this->selectorSyntaxMap, $selectorSyntax));
    }
    /**
     * Add a blockable item. In general, this are the URLs and elements you want to block.
     *
     * @param AbstractBlockable[] $blockables
     */
    public function addBlockables($blockables)
    {
        $this->setBlockables(\array_merge($this->blockables, $blockables));
    }
    /**
     * Set blockable items. In general, this are the URLs and elements you want to block.
     *
     * @param AbstractBlockable[] $blockables
     */
    public function setBlockables($blockables)
    {
        $this->blockables = $this->runModifyBlockablesCallback($blockables);
        $this->blockablesToHostsCache = null;
    }
    /**
     * Add a callable before the content blocker gets setup.
     *
     * @param callable $callback
     */
    public function addSetupCallback($callback)
    {
        $this->setupCallbacks[] = $callback;
    }
    /**
     * Add a callable after the content blocker got setup.
     *
     * @param callable $callback
     */
    public function addAfterSetupCallback($callback)
    {
        $this->afterSetupCallbacks[] = $callback;
    }
    /**
     * Add a callable before a match got found (this does not mean that the match is blocked!).
     * Parameters: `AbstractMatcher $matcher, AbstractMatch $match`.
     *
     * @param callable $callback
     */
    public function addBeforeMatchCallback($callback)
    {
        $this->beforeMatchCallbacks[] = $callback;
    }
    /**
     * Add a callable after a match got found and the matcher decided if it should be blocked or not.
     * Parameters: `BlockedResult $result, AbstractMatcher $matcher, AbstractMatch $match`.
     * This function needs to return a `BlockedResult` instance.
     *
     * @param callable $callback
     */
    public function addCheckResultCallback($callback)
    {
        $this->checkResultCallbacks[] = $callback;
    }
    /**
     * Add a callable after a blocked match got found so you can alter the match again. Parameters:
     * `BlockedResult $result, AbstractMatcher $matcher, AbstractMatch $match`.
     *
     * @param callable $callback
     */
    public function addBlockedMatchCallback($callback)
    {
        $this->blockedMatchCallbacks[] = $callback;
    }
    /**
     * Remove a callback added through `addBlockedMatchCallback`.
     *
     * @param callable $callback
     * @codeCoverageIgnore
     */
    public function removeBlockedMatchCallback($callback)
    {
        $this->blockedMatchCallbacks = \array_filter($this->blockedMatchCallbacks, function ($c) use($callback) {
            return $c !== $callback;
        });
    }
    /**
     * Add a callable after a blocked match got not found, but a match. Parameters:
     * `BlockedResult $result, AbstractMatcher $matcher, AbstractMatch $match`.
     *
     * @param callable $callback
     */
    public function addNotBlockedMatchCallback($callback)
    {
        $this->notBlockedMatchCallbacks[] = $callback;
    }
    /**
     * In some cases we need to keep the attributes as original instead of prefix it with `consent-original-`.
     * Keep in mind, that no external data should be loaded if the attribute is set!
     *
     * @param string[] $attributes
     */
    public function addKeepAlwaysAttributes($attributes)
    {
        $this->keepAlwaysAttributes = \array_merge($this->keepAlwaysAttributes, $attributes);
    }
    /**
     * See `addKeepAlwaysAttributes`, but consider the keep only if the found match has a given class.
     *
     * @param string[][] $classToAttributesMap
     */
    public function addKeepAlwaysAttributesIfClass($classToAttributesMap)
    {
        $this->keepAlwaysAttributesIfClass = \array_merge_recursive($this->keepAlwaysAttributesIfClass, $classToAttributesMap);
    }
    /**
     * Add a callable after a match got found and the matcher decided if it should be blocked or not.
     * Parameters: `string[] $keepAttributes, AbstractMatcher $matcher, AbstractMatch $match`.
     * This function needs to return a `string[]` array!
     *
     * @param callable $callback
     */
    public function addKeepAlwaysAttributesCallback($callback)
    {
        $this->keepAlwaysAttributesByCallback[] = $callback;
    }
    /**
     * Do not block inline scripts starting with `var $variableName =`.
     *
     * @param string[] $names
     */
    public function addSkipInlineScriptVariableAssignments($names)
    {
        $this->skipInlineScriptVariableAssignments = \array_merge($this->skipInlineScriptVariableAssignments, $names);
    }
    /**
     * Add a callable after a match got found and skip a script by custom variable name.
     * Parameters: `string[] $variableNames, ScriptInlineMatcher $matcher, ScriptInlineMatch $match`.
     * This function needs to return a `string[]` array!
     *
     * @param callable $callback
     */
    public function addSkipInlineScriptVariableAssignmentsCallback($callback)
    {
        $this->skipInlineScriptVariableAssignmentsByCallback[] = $callback;
    }
    /**
     * When blocking CSS inline styles, we replace URLs with dummy URLs and we cannot rely on data-uri's
     * as we need to pass parameters, too.
     *
     * Default: `https://assets.devowl.io/packages/devowl-wp/headless-content-blocker/`
     *
     * In the folder there need to exist the following two files: `dummy.css`, `dummy.png`.
     *
     * @param string $urlPath
     * @codeCoverageIgnore
     */
    public function setInlineStyleDummyUrlPath($urlPath)
    {
        $this->inlineStyleDummyUrlPath = $urlPath;
    }
    /**
     * Decide a visual parent for an individual match.
     * Parameters: `boolean|string|number $useVisualParent, AbstractMatcher $matcher, AbstractMatch $match`.
     * This function needs to return a `boolean|string|number` array!
     *
     * @param callable $callback
     */
    public function addVisualParentCallback($callback)
    {
        $this->visualParentCallback[] = $callback;
    }
    /**
     * Allows to modify the passed string expression to a blockable.
     * Parameters: `string $expression, Blockable $blockable`.
     * This function needs to return a `string`!
     *
     * @param callable $callback
     */
    public function addBlockableStringExpressionCallback($callback)
    {
        $this->blockableStringExpressionCallback[] = $callback;
    }
    /**
     * Add a callable before an blockable and expression gets added to a `BlockedResult`.
     *
     * @param callable $callback
     */
    public function addBeforeSetBlockedInResultCallback($callback)
    {
        $this->beforeSetBlockedInResultCallback[] = $callback;
    }
    /**
     * Add a callable to modify the blockables array before it gets registered.
     *
     * @param callable $callback
     */
    public function addModifyBlockablesCallback($callback)
    {
        $this->modifyBlockablesCallback[] = $callback;
    }
    /**
     * A set of HTML tags => attribute names which should always prefix with `consent-original-`.
     *
     * @param string[][] $tagToAttributesMap
     * @codeCoverageIgnore
     */
    public function addReplaceAlwaysAttributes($tagToAttributesMap)
    {
        $this->replaceAlwaysAttributes = \array_merge_recursive($this->replaceAlwaysAttributes, $tagToAttributesMap);
    }
    /**
     * Add a callable after a blocked inline style got found and skip creation of a second document with blocked URLs.
     * Parameters: `boolean $extract, StyleInlineMatcher $matcher, StyleInlineMatch $match`.
     * This function needs to return a `boolean` array!
     *
     * @param callable $callback
     */
    public function addInlineStyleShouldBeExtractedCallback($callback)
    {
        $this->inlineStyleShouldBeExtractedByCallback[] = $callback;
    }
    /**
     * Add a callable after a blocked inline style got found, parsed and you can modify the `Document` instance.
     * Parameters: `boolean $extract, StyleInlineMatcher $matcher, StyleInlineMatch $match`.
     *
     * @param callable $callback
     */
    public function addInlineStyleModifyDocumentsCallback($callback)
    {
        $this->inlineStyleModifyDocumentsByCallback[] = $callback;
    }
    /**
     * Add a callable after a blocked inline CSS rule got found, and we need to decide to block it or not.
     * Parameters: `BlockedResult $extract, string $url, StyleInlineMatcher $matcher, StyleInlineMatch $match`.
     *
     * @param callable $callback
     */
    public function addInlineStyleBlockRuleCallback($callback)
    {
        $this->inlineStyleBlockRuleByCallback[] = $callback;
    }
    /**
     * See `Constants::HTML_ATTRIBUTE_VISUAL_PARENT` for more details about this mechanism.
     *
     * @param string[][] $classToVisualParent
     */
    public function addVisualParentIfClass($classToVisualParent)
    {
        $this->visualParentIfClass = \array_merge_recursive($this->visualParentIfClass, $classToVisualParent);
    }
    /**
     * Setup the content blocker mechanism. You need to use this before you `modifyAny/modifyHtml`
     * your content!
     */
    public function setup()
    {
        if ($this->isSetup) {
            return;
        }
        $this->isSetup = \true;
        $this->runSetupCallback();
        // Block by inline script
        $inlineScriptMatcher = new ScriptInlineMatcher($this);
        $inlineScriptFinder = new ScriptInlineFinder();
        $inlineScriptFinder->addCallback(function ($match) use($inlineScriptMatcher) {
            $this->processMatch($inlineScriptMatcher, $match);
        });
        $this->addFinder($inlineScriptFinder);
        // Block by tag-attribute map
        $tagAttributeMatcher = new TagAttributeMatcher($this);
        foreach ($this->tagAttributeMap as $map) {
            foreach ($map['attr'] as $attr) {
                $tagAttributeFinder = new TagAttributeFinder($map['tags'], [$attr]);
                $tagAttributeFinder->addCallback(function ($match) use($tagAttributeMatcher) {
                    $this->processMatch($tagAttributeMatcher, $match);
                });
                $this->addFinder($tagAttributeFinder);
            }
        }
        // Block by inline style
        $inlineStyleMatcher = new StyleInlineMatcher($this);
        $inlineStyleFinder = new StyleInlineFinder();
        $inlineStyleFinder->addCallback(function ($match) use($inlineStyleMatcher) {
            $this->processMatch($inlineStyleMatcher, $match);
        });
        $this->addFinder($inlineStyleFinder);
        // Block by SelectorSyntax (Custom Element Blocker)
        foreach ($this->getBlockables() as $blockable) {
            foreach ($blockable->getSelectorSyntaxFinder() as $selectorSyntaxFinder) {
                $selectorSyntaxMatcher = new SelectorSyntaxMatcher($this, $blockable);
                $selectorSyntaxFinder->addCallback(function ($match) use($selectorSyntaxMatcher) {
                    $this->processMatch($selectorSyntaxMatcher, $match);
                });
                $this->addFinder($selectorSyntaxFinder);
                $this->finderToMatcher[$selectorSyntaxFinder] = $selectorSyntaxMatcher;
            }
        }
        // Block by selector-syntax-map
        foreach ($this->selectorSyntaxMap as $selectorSyntax) {
            $selectorSyntaxFinder = SelectorSyntaxFinder::fromExpression($selectorSyntax);
            if ($selectorSyntaxFinder !== \false) {
                $selectorSyntaxFinder->setFastHtmlTag($this);
                // Find matches which are not yet covered by the selector-syntax-map in previous calls
                $selectorSyntaxMatcher = new SelectorSyntaxMatcher($this, null, \false);
                $selectorSyntaxFinder->addCallback(function ($match) use($selectorSyntaxMatcher) {
                    $this->processMatch($selectorSyntaxMatcher, $match);
                });
                $this->addFinder($selectorSyntaxFinder);
                $this->finderToMatcher[$selectorSyntaxFinder] = $selectorSyntaxMatcher;
            }
        }
        // Block by inline style within HTML attribute `style=""`
        $styleInlineAttributeMatcher = new StyleInlineAttributeMatcher($this);
        $styleInlineAttributeFinder = new StyleInlineAttributeFinder();
        $styleInlineAttributeFinder->addCallback(function ($match) use($styleInlineAttributeMatcher) {
            $this->processMatch($styleInlineAttributeMatcher, $match);
        });
        $this->addFinder($styleInlineAttributeFinder);
        $this->runAfterSetupCallback();
    }
    /**
     * When adding a finder, save the instances of `SelectorSyntaxFinder`.
     *
     * @param AbstractFinder $finder
     */
    public function addFinder($finder)
    {
        parent::addFinder($finder);
        if ($finder instanceof SelectorSyntaxFinder) {
            $tag = $finder->getTag();
            $firstAttribute = $finder->getAttributes()[0]->getAttribute();
            $this->selectorSyntaxFindersTagMatrix[$tag] = $this->selectorSyntaxFindersTagMatrix[$tag] ?? [];
            $this->selectorSyntaxFindersTagMatrix[$tag][] = [$firstAttribute, $finder];
        }
    }
    /**
     * A match got found from one of our finders. Run plugins and hooks.
     *
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     */
    public function processMatch($matcher, $match)
    {
        $originalMatch = $match->getOriginalMatch();
        $rerunExceptionDispatcher = [];
        foreach ($this->rerunExceptions as $idx => $exception) {
            if ($match->getInvisibleAttribute(RerunOnMatchException::ID_ATTRIBUTE_NAME) === $exception->getId()) {
                $afterProcessing = $exception->getAfterProcessing();
                $rerunExceptionDispatcher[] = function () use($afterProcessing, $match, $matcher) {
                    try {
                        if (\is_callable($afterProcessing)) {
                            $afterProcessing($match, $matcher);
                        }
                    } catch (RerunOnMatchException $e) {
                        $this->registerRerun();
                        $this->rerunExceptions[] = $e;
                    }
                };
                unset($this->rerunExceptions[$idx]);
            }
        }
        $this->rerunExceptions = \array_values($this->rerunExceptions);
        $this->runBeforeMatchCallback($matcher, $match);
        $result = null;
        try {
            $result = $matcher->match($match);
        } catch (RerunOnMatchException $e) {
            $this->registerRerun();
            $this->rerunExceptions[] = $e;
            // When writing tests for this function I did no longer found a reproduce case for this but I keep this for backwards-compatibility
            // @codeCoverageIgnoreStart
            foreach ($rerunExceptionDispatcher as $c) {
                $c();
            }
            // @codeCoverageIgnoreEnd
            $this->persistMarkupChain($originalMatch, $match);
            return;
        }
        if ($result->isBlocked()) {
            $this->runBlockedMatchCallback($result, $matcher, $match);
        } else {
            $this->runNotBlockedMatchCallback($result, $matcher, $match);
        }
        // Apply data URL transformations to blocked content
        if ($match->hasChanged()) {
            foreach ($match->getAttributes() as $key => $val) {
                $originalAttributeKey = AttributesHelper::revertTransformAttribute($key);
                if ($originalAttributeKey !== \false) {
                    $mimeType = $match->isAttributeDataUrl($originalAttributeKey);
                    if ($mimeType !== \false) {
                        // When writing tests for this function I did no longer found a reproduce case for this but I keep this for backwards-compatibility
                        // @codeCoverageIgnoreStart
                        $match->setAttribute($key, $val, $mimeType);
                        // @codeCoverageIgnoreEnd
                    }
                }
            }
        }
        foreach ($rerunExceptionDispatcher as $c) {
            $c();
        }
        $this->persistMarkupChain($originalMatch, $match);
    }
    /**
     * Persist the markup chain so we can reconstruct the original match in the scanner.
     *
     * @param string $originalMatch
     * @param AbstractMatch $match
     */
    protected function persistMarkupChain($originalMatch, $match)
    {
        if (!empty($originalMatch) && $match->hasChanged()) {
            // Temporarily disable before and after tag as this is not needed for the chain
            $beforeTag = $match->getBeforeTag();
            $afterTag = $match->getAfterTag();
            $match->setBeforeTag('');
            $match->setAfterTag('');
            $to = \md5($match->render());
            $from = \md5($originalMatch);
            if ($to !== $from) {
                $this->markupChain[$to] = $from;
            }
            $match->setBeforeTag($beforeTag);
            $match->setAfterTag($afterTag);
        }
    }
    /**
     * Run registered setup callbacks.
     */
    protected function runSetupCallback()
    {
        foreach ($this->setupCallbacks as $callback) {
            $callback();
        }
    }
    /**
     * Run registered after-setup callbacks.
     */
    protected function runAfterSetupCallback()
    {
        foreach ($this->afterSetupCallbacks as $callback) {
            $callback();
        }
    }
    /**
     * Run registered before-match callbacks.
     *
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     */
    protected function runBeforeMatchCallback($matcher, $match)
    {
        foreach ($this->beforeMatchCallbacks as $callback) {
            $callback($matcher, $match);
        }
    }
    /**
     * Run registered blocked-match callbacks.
     *
     * @param BlockedResult $result
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     */
    protected function runBlockedMatchCallback($result, $matcher, $match)
    {
        foreach ($this->blockedMatchCallbacks as $callback) {
            $callback($result, $matcher, $match);
        }
        // Delegate `MatchPluginCallbacks`
        MatchPluginCallbacks::getFromMatch($match)->runBlockedMatchCallback($result, $matcher);
    }
    /**
     * Run registered not-blocked-match callbacks.
     *
     * @param BlockedResult $result
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     */
    protected function runNotBlockedMatchCallback($result, $matcher, $match)
    {
        foreach ($this->notBlockedMatchCallbacks as $callback) {
            $callback($result, $matcher, $match);
        }
    }
    /**
     * Run registered check-result callbacks.
     *
     * @param BlockedResult $result
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     * @return BlockedResult
     */
    public function runCheckResultCallback($result, $matcher, $match)
    {
        foreach ($this->checkResultCallbacks as $callback) {
            $result = $callback($result, $matcher, $match);
        }
        return $result;
    }
    /**
     * Run registered keep-always-attributes callbacks.
     *
     * @param string[] $keepAttributes
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     * @return string[]
     */
    public function runKeepAlwaysAttributesCallback($keepAttributes, $matcher, $match)
    {
        foreach ($this->keepAlwaysAttributesByCallback as $callback) {
            $keepAttributes = $callback($keepAttributes, $matcher, $match);
        }
        return $keepAttributes;
    }
    /**
     * Run registered skip-inline-names callbacks.
     *
     * @param string[] $names
     * @param ScriptInlineMatcher $matcher
     * @param ScriptInlineMatch $match
     * @return string[]
     */
    public function runSkipInlineScriptVariableAssignmentsCallback($names, $matcher, $match)
    {
        foreach ($this->skipInlineScriptVariableAssignmentsByCallback as $callback) {
            $names = $callback($names, $matcher, $match);
        }
        return $names;
    }
    /**
     * Run registered callbacks to not extract blocked CSS rules to a second document.
     *
     * @param boolean $extract
     * @param StyleInlineMatcher $matcher
     * @param StyleInlineMatch $match
     * @return boolean
     */
    public function runInlineStyleShouldBeExtractedByCallback($extract, $matcher, $match)
    {
        foreach ($this->inlineStyleShouldBeExtractedByCallback as $callback) {
            $extract = $callback($extract, $matcher, $match);
        }
        return $extract;
    }
    /**
     * Run registered callbacks to not extract blocked CSS rules to a second document.
     *
     * @param Document $document
     * @param Document $extractedDocument
     * @param StyleInlineMatcher $matcher
     * @param StyleInlineMatch $match
     */
    public function runInlineStyleModifyDocumentsCallback($document, $extractedDocument, $matcher, $match)
    {
        foreach ($this->inlineStyleModifyDocumentsByCallback as $callback) {
            $callback($document, $extractedDocument, $matcher, $match);
        }
    }
    /**
     * Run registered check-result callbacks.
     *
     * @param BlockedResult $result
     * @param string $url
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     * @return BlockedResult
     */
    public function runInlineStyleBlockRuleCallback($result, $url, $matcher, $match)
    {
        foreach ($this->inlineStyleBlockRuleByCallback as $callback) {
            $result = $callback($result, $url, $matcher, $match);
        }
        return $result;
    }
    /**
     * Run registered check-result callbacks.
     *
     * @param boolean|string|number $visualParent
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     */
    public function runVisualParentCallback($visualParent, $matcher, $match)
    {
        foreach ($this->visualParentCallback as $callback) {
            $visualParent = $callback($visualParent, $matcher, $match);
        }
        return $visualParent;
    }
    /**
     * Run registered blockable string expression callbacks.
     *
     * @param string $expression
     * @param AbstractBlockable $blockable
     */
    public function runBlockableStringExpressionCallback($expression, $blockable)
    {
        foreach ($this->blockableStringExpressionCallback as $callback) {
            $expression = $callback($expression, $blockable);
        }
        return $expression;
    }
    /**
     * Run registered callbacks before a blockable and expression gets added to a `BlockedResult`.
     *
     * @param BlockedResult $result
     * @param AbstractBlockable $blockable
     * @param string $expression
     * @param AbstractMatcher $matcher
     * @return boolean
     */
    public function runBeforeSetBlockedInResultCallback($result, $blockable, $expression, $matcher)
    {
        $returnResult = \true;
        foreach ($this->beforeSetBlockedInResultCallback as $callback) {
            $returnResult = $callback($result, $blockable, $expression, $matcher);
            // @codeCoverageIgnoreStart
            if ($returnResult === \false) {
                break;
            }
            // @codeCoverageIgnoreEnd
        }
        return $returnResult;
    }
    /**
     * Run registered callbacks to modify the blockables array before it gets registered.
     *
     * @param AbstractBlockable[] $blockables
     * @return AbstractBlockable[]
     */
    public function runModifyBlockablesCallback($blockables)
    {
        foreach ($this->modifyBlockablesCallback as $callback) {
            $blockables = $callback($blockables);
        }
        return $blockables;
    }
    /**
     * Add a callback which should throw an `Exception` when the content blocker is not setup.
     */
    protected function init()
    {
        $this->addCallback(function ($html) {
            // @codeCoverageIgnoreStart
            if (!$this->isSetup) {
                throw new Exception('Please setup() your headless content blocker before modifying your content!');
            }
            // @codeCoverageIgnoreEnd
            return $html;
        });
    }
    /**
     * Create an expression => regular expression cache for all available URLs in available blockables.
     *
     * @param boolean $contains
     * @param AbstractBlockable[] $useBlockables
     */
    public function blockablesToHosts($contains = \true, $useBlockables = null)
    {
        $prepareRows = function ($regex) use($contains) {
            if (!\is_string($regex)) {
                return $regex;
            }
            return $contains ? '/' . \substr($regex, 2, \strlen($regex) - 4) . '/' : $regex;
        };
        if ($this->blockablesToHostsCache !== null && $useBlockables === null) {
            return \array_map($prepareRows, $this->blockablesToHostsCache);
        }
        $result = [];
        $forEachBlockables = $useBlockables === null ? $this->getBlockables() : $useBlockables;
        foreach ($forEachBlockables as $blockable) {
            // Iterate all wildcard URLs
            foreach ($blockable->getRegularExpressions() as $expression => $regex) {
                if (!isset($result[$expression]) && !empty($expression)) {
                    // First, mark as non-host / non-URL
                    $result[$expression] = \false;
                    $useExpression = \trim($expression, '*');
                    if (!Utils::startsWith($useExpression, 'http://') && !Utils::startsWith($useExpression, 'https://')) {
                        $useExpression = 'https://' . $useExpression;
                    }
                    if (\filter_var($useExpression, \FILTER_VALIDATE_URL)) {
                        $useExpression = \parse_url($useExpression);
                        $useExpression = $useExpression['host'];
                        if (\count(\explode('.', $useExpression)) > 1) {
                            // https://regex101.com/r/oDeUCV/2
                            $useExpression = \sprintf('/^(https:|http:)?\\/\\/(www\\.)?%s$/', \preg_quote($useExpression, '/'));
                            $result[$expression] = $useExpression;
                        }
                    }
                }
            }
        }
        if ($useBlockables === null) {
            $this->blockablesToHostsCache = $result;
        }
        return \array_map($prepareRows, $result);
    }
    /**
     * Find potential selector syntax finders for a given match. You need to use `matchesAttributes` on the match
     * to check if the match is covered by the returned finders.
     *
     * @param string $tag
     * @param string[] $attributeNames
     * @return SelectorSyntaxFinder[]
     */
    public function findPotentialSelectorSyntaxFindersForMatch($tag, $attributeNames)
    {
        $result = [];
        $tagFinders = $this->selectorSyntaxFindersTagMatrix[$tag] ?? [];
        foreach ($tagFinders as $entry) {
            $attributeName = $entry[0];
            $finder = $entry[1];
            if (\in_array($attributeName, $attributeNames, \true)) {
                $result[] = $finder;
            }
        }
        return $result;
    }
    /**
     * Get blockable rules starting with a given string. This does only work for non-Selector-Syntax expressions.
     *
     * Example: `avf_exclude_assets:avia_google_maps_api_script` -> search by `avf_exclude_assets:` and it will return
     * an array with `[['expression' => 'avia_google_maps_api_script', 'blockable' => AbstractBlockable instance]]`.
     *
     * @param string $prefix
     * @param boolean $onlyExpressions
     * @param AbstractBlockable[] $blockables
     * @return array[]
     */
    public function getBlockableRulesStartingWith($prefix, $onlyExpressions = \false, $blockables = null)
    {
        $result = [];
        $blockables = $blockables ?? $this->getBlockables();
        foreach ($blockables as $blockable) {
            foreach ($blockable->getOriginalExpressions() as $expression) {
                if (Utils::startsWith($expression, $prefix)) {
                    $result[] = ['expression' => \substr($expression, \strlen($prefix)), 'blockable' => $blockable];
                }
            }
        }
        return $onlyExpressions ? \array_column($result, 'expression') : $result;
    }
    /**
     * Get blockable by blocker ID.
     *
     * @param int $id
     */
    public function getBlockableById($id)
    {
        foreach ($this->getBlockables() as $blockable) {
            if ($blockable->getBlockerId() === $id) {
                return $blockable;
            }
        }
        // @codeCoverageIgnoreStart
        return null;
        // @codeCoverageIgnoreEnd
    }
    /**
     * If you pass `true`, the generated `BlockedResult` will contain multiple results and will not
     * break after the first found blockable to block.
     *
     * @param boolean $status
     */
    public function setAllowMultipleBlockerResults($status)
    {
        $this->allowMultipleBlockerResults = $status;
    }
    /**
     * Getter.
     */
    public function isAllowMultipleBlockerResults()
    {
        return $this->allowMultipleBlockerResults;
    }
    /**
     * Getter.
     */
    public function getTagAttributeMap()
    {
        return $this->tagAttributeMap;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getSelectorSyntaxMap()
    {
        return $this->selectorSyntaxMap;
    }
    /**
     * Getter.
     */
    public function getBlockables()
    {
        return $this->blockables;
    }
    /**
     * Getter.
     */
    public function getKeepAlwaysAttributes()
    {
        return $this->keepAlwaysAttributes;
    }
    /**
     * Getter.
     */
    public function getKeepAlwaysAttributesIfClass()
    {
        return $this->keepAlwaysAttributesIfClass;
    }
    /**
     * Getter.
     */
    public function getSkipInlineScriptVariableAssignments()
    {
        return $this->skipInlineScriptVariableAssignments;
    }
    /**
     * Getter.
     */
    public function getInlineStyleDummyUrlPath()
    {
        return $this->inlineStyleDummyUrlPath;
    }
    /**
     * Getter.
     */
    public function getReplaceAlwaysAttributes()
    {
        return $this->replaceAlwaysAttributes;
    }
    /**
     * Getter.
     */
    public function getVisualParentIfClass()
    {
        return $this->visualParentIfClass;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getPlugins()
    {
        return $this->plugins;
    }
    /**
     * Getter.
     */
    public function getFinderToMatcher()
    {
        return $this->finderToMatcher;
    }
    /**
     * Getter.
     *
     * @param string $className
     * @codeCoverageIgnore
     */
    public function getPluginsByClassName($className)
    {
        return $this->plugins[$className] ?? null;
    }
    /**
     * Getter.
     *
     * This also allows you to clear the markup pool by using `= []` to the retrieved reference.
     */
    public function &getMarkupPool()
    {
        return $this->markupPool;
    }
    /**
     * Find the original markup from a given markup without any transformations.
     *
     * @param Markup $markup
     */
    public function findOriginalMarkup($markup)
    {
        // @codeCoverageIgnoreStart
        if ($markup === null) {
            return null;
        }
        // @codeCoverageIgnoreEnd
        $id = $markup->getId();
        while (isset($this->markupChain[$id])) {
            $id = $this->markupChain[$id];
        }
        return $this->markupPool[$id] ?? $markup;
    }
}
