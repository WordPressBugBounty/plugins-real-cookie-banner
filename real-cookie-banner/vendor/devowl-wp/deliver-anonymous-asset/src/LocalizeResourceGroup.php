<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\DeliverAnonymousAsset;

/**
 * Defines one localized resource group and generates assignment-only JavaScript resources.
 * @internal
 */
class LocalizeResourceGroup
{
    private $name;
    private $path;
    private $strategy;
    private $required;
    private $include;
    private $exclude;
    /**
     * Set by `extract()` when `include` peels fields from a list/map of objects.
     *
     * @var bool
     */
    private $peelCollection = \false;
    /**
     * Creates a resource group from configuration.
     *
     * @param string $name
     * @param array $definition
     */
    public function __construct($name, $definition = [])
    {
        $this->name = $name;
        $this->path = $definition['path'] ?? '';
        $this->strategy = $definition['strategy'] ?? 'lazy';
        $this->required = (bool) ($definition['required'] ?? \false);
        $this->include = \is_array($definition['include'] ?? null) ? $definition['include'] : [];
        $this->exclude = \is_array($definition['exclude'] ?? null) ? $definition['exclude'] : [];
        $this->normalizeWildcardPath();
    }
    /**
     * Factory for resource group definitions.
     *
     * @param string $name
     * @param array $definition
     */
    public static function fromArray($name, $definition = [])
    {
        return new self($name, $definition);
    }
    /**
     * Returns the resource group name.
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * Returns the loading strategy (`defer` or `lazy`).
     */
    public function getStrategy()
    {
        return $this->strategy;
    }
    /**
     * Returns whether this group is required for optimized output.
     */
    public function isRequired()
    {
        return $this->required;
    }
    /**
     * Extract this group's payload from localized data and mutate `$l10n` in-place.
     *
     * @param array $l10n
     * @return mixed
     */
    public function extract(&$l10n)
    {
        if (!\is_array($l10n) || $this->path === '') {
            return null;
        }
        $value = $this->getValueByPath($l10n, $this->path);
        if ($value === null) {
            return null;
        }
        if ($this->shouldPeel($value)) {
            $this->peelCollection = \true;
            return $this->extractPeeledFields($l10n, $value);
        }
        $payload = $this->applyIncludeExclude($value);
        // Keep excluded (or non-included) keys in $l10n so they remain in the inline script.
        $remainder = \is_array($value) ? \array_diff_key($value, $payload) : null;
        if (!empty($remainder)) {
            $this->setValueByPath($l10n, $this->path, $remainder);
        } else {
            $this->unsetValueByPath($l10n, $this->path);
        }
        return $payload;
    }
    /**
     * Generates the JavaScript resource output for this group.
     *
     * @param string $bucketId
     * @param mixed $payload
     */
    public function generateJavaScript($bucketId, $payload)
    {
        if ($this->peelCollection) {
            return $this->generateCollectionAssignmentsScript($bucketId, $payload);
        }
        $target = $this->toJsAccessor('o', $this->path);
        $json = $this->jsonEncode($payload);
        $init = $this->ensureIntermediatePathJs('o', $this->path);
        if ($init === '') {
            return \sprintf('(function(b){var o=window[b],m=o.__m,e=%s,d=%s;%s=typeof e==="object"&&e?m(e,d):d;})(%s);', $target, $json, $target, $this->jsonEncode($bucketId));
        }
        return \sprintf('(function(b){var o=window[b],m=o.__m;%svar e=%s,d=%s;%s=typeof e==="object"&&e?m(e,d):d;})(%s);', $init, $target, $json, $target, $this->jsonEncode($bucketId));
    }
    /**
     * `others.items[].purpose` → path `others.items` + include `purpose`.
     */
    private function normalizeWildcardPath()
    {
        if (\strpos($this->path, '[]') === \false) {
            return;
        }
        if (!\preg_match('/^(.+?)\\[\\](?:\\.(.*))?$/', $this->path, $m)) {
            return;
        }
        $this->path = $m[1];
        if (isset($m[2]) && $m[2] !== '') {
            \array_unshift($this->include, $m[2]);
        }
    }
    /**
     * Peel `include` paths from the value at `path`; keep the skeleton in `$l10n`.
     *
     * @param array $l10n
     * @param array $value
     * @return array<int, array{keys: array<int|string>, value: mixed}>
     */
    private function extractPeeledFields(&$l10n, $value)
    {
        $payload = [];
        $isCollection = $this->isCollectionOfArrays($value) && (!$this->includeHasWildcard() || \array_keys($value) === \range(0, \count($value) - 1));
        if ($isCollection) {
            foreach ($value as $key => &$row) {
                if (!\is_array($row)) {
                    continue;
                }
                foreach ($this->include as $spec) {
                    $this->peelBySpec($row, $this->parseIncludeSpec($spec), [$key], $payload);
                }
            }
            unset($row);
        } else {
            foreach ($this->include as $spec) {
                $this->peelBySpec($value, $this->parseIncludeSpec($spec), [], $payload);
            }
        }
        $this->setValueByPath($l10n, $this->path, $value);
        return $payload;
    }
    /**
     * Tokenize `technicalDefinitions[].purpose` into property / iterate steps.
     *
     * @param string $spec
     * @return string[]
     */
    private function parseIncludeSpec($spec)
    {
        $steps = [];
        foreach (\explode('.', $spec) as $part) {
            if ($part === '') {
                continue;
            }
            $iterate = \substr($part, -2) === '[]';
            $name = $iterate ? \substr($part, 0, -2) : $part;
            if ($name !== '') {
                $steps[] = $name;
            }
            if ($iterate) {
                $steps[] = '[]';
            }
        }
        return $steps;
    }
    /**
     * Walk one include spec, record leaf assignments, unset extracted values in-place.
     *
     * @param mixed $node
     * @param string[] $steps
     * @param array<int|string> $prefix
     * @param array<int, array{keys: array<int|string>, value: mixed}> $payload
     */
    private function peelBySpec(&$node, $steps, $prefix, &$payload)
    {
        if ($steps === [] || !\is_array($node)) {
            return;
        }
        $head = $steps[0];
        $rest = \array_slice($steps, 1);
        if ($head === '[]') {
            foreach ($node as $key => &$child) {
                $this->peelBySpec($child, $rest, \array_merge($prefix, [$key]), $payload);
            }
            unset($child);
            return;
        }
        if (!\array_key_exists($head, $node)) {
            return;
        }
        if ($rest === []) {
            if (\in_array($head, $this->exclude, \true)) {
                return;
            }
            $payload[] = ['keys' => \array_merge($prefix, [$head]), 'value' => $node[$head]];
            unset($node[$head]);
            return;
        }
        $this->peelBySpec($node[$head], $rest, \array_merge($prefix, [$head]), $payload);
    }
    /**
     * Direct assignments onto existing nodes, keyed by original index or property name.
     * Shared prefixes become short locals when that shrinks the file.
     *
     * @param string $bucketId
     * @param array<int, array{keys: array<int|string>, value: mixed}> $payload
     */
    private function generateCollectionAssignmentsScript($bucketId, $payload)
    {
        $trie = ['c' => []];
        foreach ($payload as $assignment) {
            if (!isset($assignment['keys'], $assignment['value']) || !\is_array($assignment['keys'])) {
                continue;
            }
            $this->insertTrie($trie, $assignment['keys'], $assignment['value']);
        }
        $pathInit = $this->ensurePathJs('o', $this->path);
        $decls = ['o=window[b]'];
        $stmts = '';
        $aliasIndex = 0;
        $this->emitCompressedTrie($trie, $this->toJsAccessor('o', $this->path), $decls, $stmts, $aliasIndex);
        if ($pathInit === '') {
            return \sprintf('(function(b){var %s;%s})(%s);', \implode(',', $decls), $stmts, $this->jsonEncode($bucketId));
        }
        // Split root decl from aliases so path-init runs between them
        $rootDecl = \array_shift($decls);
        $aliasPart = $decls !== [] ? 'var ' . \implode(',', $decls) . ';' : '';
        return \sprintf('(function(b){var %s;%s%s%s})(%s);', $rootDecl, $pathInit, $aliasPart, $stmts, $this->jsonEncode($bucketId));
    }
    /**
     * Inserts one assignment path into the prefix trie.
     *
     * @param array $trie
     * @param array<int|string> $keys
     * @param mixed $value
     */
    private function insertTrie(&$trie, $keys, $value)
    {
        $cursor =& $trie;
        foreach ($keys as $key) {
            if (!isset($cursor['c'][$key])) {
                $cursor['c'][$key] = [];
            }
            $cursor =& $cursor['c'][$key];
        }
        $cursor['v'] = $value;
    }
    /**
     * Counts assignment leaves under a trie node.
     *
     * @param array $node
     */
    private function countTrieLeaves($node)
    {
        $n = \array_key_exists('v', $node) ? 1 : 0;
        if (!isset($node['c']) || !\is_array($node['c'])) {
            return $n;
        }
        foreach ($node['c'] as $child) {
            $n += $this->countTrieLeaves($child);
        }
        return $n;
    }
    /**
     * Comma-decl cost vs repeating `$accessor` once per descendant leaf.
     *
     * @param string $accessor
     * @param int $uses
     */
    private function aliasSavesBytes($accessor, $uses)
    {
        $accLen = \strlen($accessor);
        $varLen = 1;
        $cost = 2 + $varLen + $accLen;
        $saved = $uses * ($accLen - $varLen);
        return $saved > $cost;
    }
    /**
     * Next short local name; skips `b` (bucket) and `o` (root) because `var` hoists.
     *
     * @param int $index
     */
    private function nextAliasName(&$index)
    {
        $chars = 'acdefghijklmnpqrstuvwxyz';
        $i = $index++;
        $len = \strlen($chars);
        return $i < $len ? $chars[$i] : 'a' . ($i - $len);
    }
    /**
     * Emits alias declarations and leaf assignments from the prefix trie.
     *
     * @param array $node
     * @param string $accessor
     * @param string[] $decls
     * @param string $stmts
     * @param int $aliasIndex
     */
    private function emitCompressedTrie($node, $accessor, &$decls, &$stmts, &$aliasIndex)
    {
        if (\array_key_exists('v', $node)) {
            $stmts .= $accessor . '=' . $this->jsonEncode($node['v']) . ';';
        }
        if (!isset($node['c']) || !\is_array($node['c']) || $node['c'] === []) {
            return;
        }
        $uses = $this->countTrieLeaves($node);
        if ($uses >= 2 && $this->aliasSavesBytes($accessor, $uses)) {
            $name = $this->nextAliasName($aliasIndex);
            $decls[] = $name . '=' . $accessor;
            $accessor = $name;
        }
        foreach ($node['c'] as $key => $child) {
            $childAccessor = $accessor . '[' . $this->jsonEncode($key) . ']';
            $isIntermediate = isset($child['c']) && \is_array($child['c']) && $child['c'] !== [];
            if ($isIntermediate) {
                $name = $this->nextAliasName($aliasIndex);
                $fallback = $this->trieChildKeysAreNumeric($child) ? '[]' : '{}';
                $decls[] = $name . '=(' . $childAccessor . '=' . $childAccessor . '||' . $fallback . ')';
                $this->emitCompressedTrie($child, $name, $decls, $stmts, $aliasIndex);
            } else {
                $this->emitCompressedTrie($child, $childAccessor, $decls, $stmts, $aliasIndex);
            }
        }
    }
    /**
     * Whether the child keys of the trie node are numeric.
     *
     * @param array $trieNode
     */
    private function trieChildKeysAreNumeric($trieNode)
    {
        if (!isset($trieNode['c']) || !\is_array($trieNode['c']) || $trieNode['c'] === []) {
            return \false;
        }
        foreach (\array_keys($trieNode['c']) as $k) {
            if (!\is_int($k)) {
                return \false;
            }
        }
        return \true;
    }
    /**
     * `include` peels nested fields; collection at `path` iterates each child first.
     *
     * @param mixed $value
     */
    private function shouldPeel($value)
    {
        if (\count($this->include) === 0 || !\is_array($value)) {
            return \false;
        }
        if ($this->includeHasWildcard()) {
            return \true;
        }
        return $this->isCollectionOfArrays($value);
    }
    /**
     * Whether any include spec iterates a nested collection via `[]`.
     *
     * @return bool
     */
    private function includeHasWildcard()
    {
        foreach ($this->include as $spec) {
            if (\strpos($spec, '[]') !== \false) {
                return \true;
            }
        }
        return \false;
    }
    /**
     * True when every value is an array (list or named map of objects).
     *
     * @param mixed $value
     */
    private function isCollectionOfArrays($value)
    {
        if (!\is_array($value) || $value === []) {
            return \false;
        }
        foreach ($value as $row) {
            if (!\is_array($row)) {
                return \false;
            }
        }
        return \true;
    }
    /**
     * Applies include/exclude filtering to extracted payloads.
     *
     * @param mixed $value
     * @return mixed
     */
    private function applyIncludeExclude($value)
    {
        if (!\is_array($value)) {
            return $value;
        }
        $filtered = $value;
        if (\count($this->include) > 0) {
            $filtered = [];
            foreach ($this->include as $key) {
                if (\array_key_exists($key, $value)) {
                    $filtered[$key] = $value[$key];
                }
            }
        }
        foreach ($this->exclude as $key) {
            unset($filtered[$key]);
        }
        return $filtered;
    }
    /**
     * Reads a nested value from an array by dotted path.
     *
     * @param array $array
     * @param string $path
     * @return mixed
     */
    private function getValueByPath($array, $path)
    {
        $segments = \explode('.', $path);
        $cursor = $array;
        foreach ($segments as $segment) {
            if (!\is_array($cursor) || !\array_key_exists($segment, $cursor)) {
                return null;
            }
            $cursor = $cursor[$segment];
        }
        return $cursor;
    }
    /**
     * Writes a nested value into an array by dotted path.
     *
     * @param array $array
     * @param string $path
     * @param mixed $value
     */
    private function setValueByPath(&$array, $path, $value)
    {
        $segments = \explode('.', $path);
        $cursor =& $array;
        foreach ($segments as $segment) {
            if (!\is_array($cursor)) {
                $cursor = [];
            }
            if (!\array_key_exists($segment, $cursor) || !\is_array($cursor[$segment])) {
                $cursor[$segment] = [];
            }
            $cursor =& $cursor[$segment];
        }
        $cursor = $value;
    }
    /**
     * Unsets a nested value in an array by dotted path.
     *
     * @param array $array
     * @param string $path
     */
    private function unsetValueByPath(&$array, $path)
    {
        $segments = \explode('.', $path);
        $last = \array_pop($segments);
        if ($last === null) {
            return;
        }
        $cursor =& $array;
        foreach ($segments as $segment) {
            if (!\is_array($cursor) || !\array_key_exists($segment, $cursor)) {
                return;
            }
            $cursor =& $cursor[$segment];
        }
        if (\is_array($cursor) && \array_key_exists($last, $cursor)) {
            unset($cursor[$last]);
        }
    }
    /**
     * Converts a dotted path to a JavaScript object accessor.
     *
     * @param string $base
     * @param string $path
     */
    private function toJsAccessor($base, $path)
    {
        $segments = \explode('.', $path);
        $out = $base;
        foreach ($segments as $segment) {
            $out .= '["' . $segment . '"]';
        }
        return $out;
    }
    /**
     * Emits JS statements that ensure each intermediate segment of a dotted path
     * exists as an object. Prevents "Cannot read properties of undefined" when
     * deferred resource scripts load in arbitrary order.
     *
     * @param string $base  JS expression for the root (e.g. `o`)
     * @param string $path  Dotted path (e.g. `others.frontend`)
     * @param bool $includeLastSegment  When true, ensures the entire path including the leaf.
     * @return string JS statements like `o["others"]=o["others"]||{};`
     */
    private function ensurePathSegmentsJs($base, $path, $includeLastSegment)
    {
        $segments = \explode('.', $path);
        $target = $includeLastSegment ? $segments : \array_slice($segments, 0, -1);
        if (\count($target) === 0) {
            return '';
        }
        $stmts = '';
        $accessor = $base;
        foreach ($target as $segment) {
            $accessor .= '["' . $segment . '"]';
            $stmts .= $accessor . '=' . $accessor . '||{};';
        }
        return $stmts;
    }
    /**
     * Ensures intermediate path segments exist (all except the last).
     *
     * @param string $base
     * @param string $path
     * @return string
     */
    private function ensureIntermediatePathJs($base, $path)
    {
        return $this->ensurePathSegmentsJs($base, $path, \false);
    }
    /**
     * Ensures all path segments exist (including the last).
     *
     * @param string $base
     * @param string $path
     * @return string
     */
    private function ensurePathJs($base, $path)
    {
        return $this->ensurePathSegmentsJs($base, $path, \true);
    }
    /**
     * Encodes values as JSON in WordPress and PHPUnit environments.
     *
     * @param mixed $value
     * @return string
     */
    private function jsonEncode($value)
    {
        if (\function_exists('wp_json_encode')) {
            return \wp_json_encode($value);
        }
        return \json_encode($value);
    }
}
