<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\DeliverAnonymousAsset;

use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Utils as UtilsUtils;
use WP_Filesystem_Direct;
/**
 * Bucket-backed localize orchestration for an `AnonymousAssetBuilder`.
 * @internal
 */
class LocalizeScriptResources
{
    /**
     * Builder.
     *
     * @var AnonymousAssetBuilder
     */
    private $builder;
    /**
     * C'tor.
     *
     * @param AnonymousAssetBuilder $builder
     */
    public function __construct($builder)
    {
        $this->builder = $builder;
    }
    /**
     * Localize script via bucket-backed resources and an inline bootstrap.
     * Returns enqueued defer-group handles, or false for fallback to `anonymous_localize_script`.
     *
     * Defer groups are prepended as dependencies of `$handle` so WordPress prints them
     * before the handle (resource tags, bootstrap `before` inline, then handle tag).
     * The consumer applies `enableDeferredEnqueue` to the returned handles.
     *
     * Each entry maps a group name to its definition:
     * - `path`     — Dot-separated path into `$l10n` (e.g. `'others.bannerI18n'` or `'others'`).
     * - `strategy` — `'defer'` emits a separate `<script src>`, `'lazy'` loads on demand via `.fetch()`.
     * - `required` — If `true`, returns `false` when the path resolves to `null` (default `false`).
     * - `include`  — Whitelist of top-level keys (or `key[].nested` paths) to extract into the resource file.
     * - `exclude`  — Top-level keys or dotted paths to keep in the inline script and omit from the
     *                resource file (e.g. `'pageRequestUuid4'`, `'frontend.languageSwitcher'`).
     *
     * @param string $handle
     * @param string $objectName
     * @param array $l10n
     * @param array<string, array{path: string, strategy: 'defer'|'lazy', required?: bool, include?: string[], exclude?: string[]}> $resourceGroups
     * @return string[]|false
     */
    public function wpLocalizeScriptResources($handle, $objectName, $l10n, $resourceGroups = [])
    {
        if (!$this->builder->ensureAnonymousFolder()) {
            return \false;
        }
        $scripts = \wp_scripts();
        if (!$scripts->query($handle)) {
            return \false;
        }
        $bucketId = $this->builder->getHash();
        $manifest = [];
        $enqueued = [];
        foreach ($resourceGroups as $name => $definition) {
            $group = LocalizeResourceGroup::fromArray($name, \is_array($definition) ? $definition : []);
            $payload = $group->extract($l10n);
            if ($payload === null) {
                if ($group->isRequired()) {
                    return \false;
                }
                continue;
            }
            $resourceContent = $group->generateJavaScript($bucketId, $payload);
            $url = $this->writeLocalizedResourceContent($resourceContent);
            if ($url === \false) {
                return \false;
            }
            if ($group->getStrategy() === 'defer') {
                $resourceHandle = $handle . '-localize-' . $group->getName();
                $inFooter = (bool) $scripts->get_data($handle, 'group');
                // `null` omits `?ver=`; the content-hashed filename already cache-busts.
                \wp_register_script($resourceHandle, $url, [], null, $inFooter);
                \wp_enqueue_script($resourceHandle);
                $enqueued[] = $resourceHandle;
                // Inject as dependency so WordPress prints the resource before the main handle.
                if (isset($scripts->registered[$handle])) {
                    $scripts->registered[$handle]->deps[] = $resourceHandle;
                }
            }
            $manifest[$group->getName()] = ['strategy' => $group->getStrategy(), 'url' => $url];
        }
        if (\count($enqueued) > 0 && isset($scripts->registered[$handle])) {
            $scripts->registered[$handle]->deps = \array_values(\array_unique($scripts->registered[$handle]->deps));
        }
        $inline = $this->buildInlineBootstrapScript($bucketId, $objectName, $l10n, $manifest);
        // Attach bootstrap to the first resource handle so the execution order is:
        // 1. Inline bootstrap (sets window["_"+bucket] with base payload)
        // 2. Resource scripts (merge their extracted data into the existing object)
        // 3. Main handle (the application entry point)
        if (\count($enqueued) > 0) {
            \wp_add_inline_script($enqueued[0], $inline, 'before');
        } else {
            \wp_add_inline_script($handle, $inline, 'before');
        }
        return $enqueued;
    }
    /**
     * Writes a localized resource file and returns its public URL.
     * Filename is `simpleHash(bucketId + sha256(content))` so the URL cannot be blocked by group name.
     * Existing files are left untouched — same content hashes to the same path.
     *
     * @param string $content
     * @return string|false
     */
    public function writeLocalizedResourceContent($content)
    {
        $anonymousFolder = $this->builder->ensureAnonymousFolder(\true);
        if ($anonymousFolder === \false) {
            return \false;
        }
        $filename = AnonymousAssetBuilder::generateFilename($this->builder->getHash(), \hash('sha256', $content) . '.js');
        $path = $anonymousFolder . $filename;
        if (!\is_file($path)) {
            // Filename hashes the intended body; a truncated write would stick forever under that URL.
            if (!Utils::writeFileCompletely($path, $content)) {
                return \false;
            }
            UtilsUtils::runDirectFilesystem(function ($fs) use($path) {
                /**
                 * WP_Filesystem_Direct.
                 *
                 * @var WP_Filesystem_Direct
                 */
                $fs = $fs;
                $fs->chmod($path, \constant('FS_CHMOD_FILE'));
            });
        }
        $url = Utils::toUploadsUrl($path);
        return $url === \false ? \false : $url;
    }
    /**
     * Builds inline bootstrap JavaScript with lazy `fetch()` support.
     *
     * @param string $bucketId
     * @param string $objectName
     * @param array $l10n
     * @param array<string, array{strategy: string, url: string}> $manifest
     */
    private function buildInlineBootstrapScript($bucketId, $objectName, $l10n, $manifest)
    {
        $payload = $this->jsonEncode(\array_merge($l10n, ['__resources' => $manifest]));
        $bucket = $this->jsonEncode($bucketId);
        $name = $this->jsonEncode($objectName);
        /*
         * Readable template:
         * (function (bucketId, publicName, payload) {
         *     var inFlight = {};
         *     payload.fetch = function (groupName) {
         *         var meta = (payload.__resources || {})[groupName];
         *         if (!meta) return Promise.reject(new Error("unknown resource group: " + groupName));
         *         if (meta.strategy !== "lazy") return Promise.resolve(payload);
         *         if (inFlight[groupName]) return inFlight[groupName];
         *         inFlight[groupName] = new Promise(function (resolve, reject) {
         *             var script = document.createElement("script");
         *             script.src = meta.url;
         *             script.onload = function () { resolve(payload); };
         *             script.onerror = reject;
         *             document.head.appendChild(script);
         *         });
         *         return inFlight[groupName];
         *     };
         *     // "_" prefix: all-digit bucket ids are Window index properties and cannot be set.
         *     window["_" + bucketId] = payload;
         *     try { window[publicName] = payload; } catch (e) {}
         * })(bucketId, objectName, payload);
         */
        return <<<JS
(function(b,n,p){var f={};p.fetch=function(g){var r=(p.__resources||{})[g];if(!r){return Promise.reject(new Error("unknown resource group: "+g));}if(r.strategy!=="lazy"){return Promise.resolve(p);}if(f[g]){return f[g];}f[g]=new Promise(function(ok,no){var s=document.createElement("script");s.src=r.url;s.onload=function(){ok(p)};s.onerror=no;document.head.appendChild(s)});return f[g];};p.__m=function m(t,s){if(Array.isArray(t)&&Array.isArray(s)){for(var i=0;i<s.length;i++)t[i]=t[i]&&s[i]&&typeof t[i]==="object"&&typeof s[i]==="object"?m(t[i],s[i]):s[i];return t}for(var k in s){var a=t[k],c=s[k];t[k]=a&&c&&typeof a==="object"&&typeof c==="object"?m(a,c):c}return t};window["_"+b]=p;try{window[n]=p;}catch(e){}})({$bucket},{$name},{$payload});
JS;
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
