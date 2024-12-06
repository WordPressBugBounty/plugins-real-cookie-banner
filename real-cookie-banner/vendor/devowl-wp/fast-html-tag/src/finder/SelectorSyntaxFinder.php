<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\AbstractMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\SelectorSyntaxMatch;
/**
 * Find HTML tags by a selector syntax like `div[id="my-id"]`.
 * @internal
 */
class SelectorSyntaxFinder extends TagAttributeFinder
{
    private $expression;
    private $tag;
    private $attributes;
    /**
     * See class description.
     *
     * Available matches:
     *      $match[0] => Full string
     *      $match[1] => Tag
     *      $match[2] => Attribute
     *      $match[3] => Comparator (can be empty)
     *      $match[4] => Value (can be empty)
     *
     * @see https://regex101.com/r/vlbn3Y/8
     */
    const EXPRESSION_REGEXP = '/^([A-Za-z_-]+)(?:%s)+$/m';
    /**
     * PCRE does currently not support repeating capture groups, we need to capture this manually
     * by duplicating the attribute regular expression.
     *
     * @see https://regex101.com/r/CMXjMl/5
     */
    const EXPRESSION_REGEXP_INNER_SINGLE_ATTRIBUTE = '\\[([\\w#:-]+)(?:(%s)"([^"]+)")?(?:\\s*:((?:(?!\\]\\s*\\[).)*))?\\]';
    /**
     * C'tor.
     *
     * @param string $expression
     * @param string $tag
     * @param SelectorSyntaxAttribute[] $attributes
     */
    private function __construct($expression, $tag, $attributes)
    {
        parent::__construct([$tag], [$attributes[0]->getAttribute()]);
        $this->expression = $expression;
        $this->tag = $tag;
        $this->attributes = $attributes;
    }
    /**
     * See `AbstractRegexFinder`.
     *
     * @param array $m
     */
    public function createMatch($m)
    {
        list($tag, $attributes) = self::extractAttributesFromMatch($m);
        list($linkAttribute) = $this->getRegexpAttributesInMatch($attributes);
        // @codeCoverageIgnoreStart
        if ($linkAttribute === null) {
            return \false;
        }
        // @codeCoverageIgnoreEnd
        $match = new SelectorSyntaxMatch($this, $m[0], $tag, $attributes, $linkAttribute);
        if ($this->matchesAttributes($attributes, $match)) {
            return $match;
        }
        return \false;
    }
    /**
     * Checks if the current attribute and value matches all our defined attributes.
     *
     * @param array $values
     * @param AbstractMatch $match
     * @param bool $satisfiesFunctions
     */
    public function matchesAttributes($values, $match, $satisfiesFunctions = \true)
    {
        // @codeCoverageIgnoreStart e.g. `@devowl-wp/headless-content-blocker` uses this API on non-matching tags
        if ($this->getTag() !== $match->getTag()) {
            return \false;
        }
        // @codeCoverageIgnoreEnd
        foreach ($this->attributes as $attribute) {
            $value = $values[$attribute->getAttribute()] ?? null;
            if (!$attribute->matchesComparator($value)) {
                return \false;
            }
            if ($satisfiesFunctions && !$attribute->satisfiesFunctions($match)) {
                return \false;
            }
        }
        return \true;
    }
    /**
     * Getter.
     */
    public function getExpression()
    {
        return $this->expression;
    }
    /**
     * Getter.
     */
    public function getTag()
    {
        return $this->tag;
    }
    /**
     * Getter.
     */
    public function getAttributes()
    {
        return $this->attributes;
    }
    /**
     * Create an instance from an expression like `div[id="my-id"]`.
     *
     * @param string $expression
     * @return SelectorSyntaxFinder|false Returns `false` if the expression is invalid
     */
    public static function fromExpression($expression)
    {
        $singleAttributeRegexp = \sprintf(self::EXPRESSION_REGEXP_INNER_SINGLE_ATTRIBUTE, \join('|', \array_map(function ($comp) {
            return \preg_quote($comp, '/');
        }, SelectorSyntaxAttribute::ALLOWED_COMPARATORS)));
        $fullExpressionRegexp = \sprintf(SelectorSyntaxFinder::EXPRESSION_REGEXP, $singleAttributeRegexp);
        if (\preg_match($fullExpressionRegexp, $expression)) {
            $split = \explode('[', $expression, 2);
            $tag = $split[0];
            $attributesExpression = '[' . $split[1];
            if (\preg_match_all(\sprintf('/%s/m', $singleAttributeRegexp), $attributesExpression, $attributeMatches, \PREG_SET_ORDER)) {
                $attributeInstances = [];
                foreach ($attributeMatches as $attributeMatch) {
                    $comparator = $attributeMatch[2] ?? null;
                    $comparator = empty($comparator) ? SelectorSyntaxAttribute::COMPARATOR_EXISTS : $comparator;
                    $attributeInstances[] = new SelectorSyntaxAttribute(null, $attributeMatch[1], $comparator, $attributeMatch[3] ?? null, $attributeMatch[4] ?? null);
                }
                $finder = new SelectorSyntaxFinder($expression, $tag, $attributeInstances);
                foreach ($attributeInstances as $instance) {
                    $instance->setFinder($finder);
                }
                return $finder;
            }
        }
        // @codeCoverageIgnoreStart
        return \false;
        // @codeCoverageIgnoreEnd
    }
}
