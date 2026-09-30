<?php

namespace DevOwl\RealCookieBanner\comp;

use DevOwl\RealCookieBanner\base\UtilsProvider;
use WP_Post;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Skip automatic scanner rescans for WooCommerce stock-only product saves (e.g. POS sync).
 *
 * Listens to `woocommerce_before_product_object_save`, which WooCommerce builds at runtime as
 * `woocommerce_before_{object_type}_object_save` (`WC_Product::$object_type` is `product`).
 *
 * @see https://github.com/woocommerce/woocommerce/blob/2c17a3cdf85fa1fd2a5bfc59dc6aff24e3f8ad56/plugins/woocommerce/includes/abstracts/abstract-wc-product.php#L1559
 * @see https://wordpress.org/plugins/woocommerce/
 * @see https://wordpress.org/plugins/woo-izettle-integration/
 * @see https://de.wordpress.org/plugins/zettle-pos-integration/
 * @internal
 */
class WooCommerceScanner
{
    use UtilsProvider;
    /**
     * WooCommerce product props that do not change cookie-relevant page output.
     */
    const STOCK_ONLY_PRODUCT_CHANGE_KEYS = ['stock_quantity', 'stock_status', 'manage_stock', 'backorders', 'low_stock_amount'];
    /**
     * Post meta keys written by WooCommerce stock sync without content edits.
     *
     * @see https://wordpress.org/plugins/woo-izettle-integration/
     */
    const STOCK_ONLY_META_KEYS = ['_stock', '_stock_status', '_manage_stock', '_backorders', '_low_stock_amount', 'izettle_current_stock_value', '_edit_lock', '_edit_last'];
    /**
     * Singleton instance.
     *
     * @var WooCommerceScanner
     */
    private static $me = null;
    /**
     * Pending WooCommerce product changes keyed by product ID.
     *
     * @var array<int, array<string, mixed>>
     */
    private $pendingProductChanges = [];
    /**
     * Register hooks in `init` action.
     */
    public function init()
    {
        if (!\class_exists('WooCommerce')) {
            return;
        }
        \add_action('woocommerce_before_product_object_save', [$this, 'woocommerce_before_product_object_save'], 10, 1);
        \add_filter('RCB/Scanner/OnChangeDetection/Skip', [$this, 'skip_stock_only_product_save'], 10, 2);
    }
    /**
     * Record WooCommerce product changes before `save_post` so stock-only updates can be ignored.
     *
     * @param object $product
     */
    public function woocommerce_before_product_object_save($product)
    {
        $changes = $product->get_changes();
        if (!empty($changes)) {
            $this->pendingProductChanges[$product->get_id()] = $changes;
        }
    }
    /**
     * Skip automatic rescans when a product save only changed stock-related data.
     *
     * @param boolean $skip
     * @param WP_Post $post
     */
    public function skip_stock_only_product_save($skip, $post)
    {
        if ($skip || !\in_array($post->post_type, ['product', 'product_variation'], \true)) {
            return $skip;
        }
        return $this->isStockOnlyProductSave((int) $post->ID);
    }
    /**
     * Check if a WooCommerce product save only changed stock-related data.
     *
     * @param int $post_id
     */
    protected function isStockOnlyProductSave($post_id)
    {
        if (!isset($this->pendingProductChanges[$post_id])) {
            return \false;
        }
        $changes = $this->pendingProductChanges[$post_id];
        unset($this->pendingProductChanges[$post_id]);
        unset($changes['date_modified'], $changes['date_modified_gmt']);
        if (empty($changes)) {
            return \true;
        }
        foreach ($changes as $key => $value) {
            if ($key === 'meta_data') {
                if (!$this->isStockOnlyMetaDataChange($value)) {
                    return \false;
                }
                continue;
            }
            if (!\in_array($key, self::STOCK_ONLY_PRODUCT_CHANGE_KEYS, \true)) {
                return \false;
            }
        }
        return \true;
    }
    /**
     * Check if changed product meta is limited to stock-related keys.
     *
     * @param mixed $metaChanges
     */
    protected function isStockOnlyMetaDataChange($metaChanges)
    {
        if (!\is_array($metaChanges) || \count($metaChanges) === 0) {
            return \false;
        }
        foreach ($metaChanges as $metaChange) {
            if (!\is_array($metaChange)) {
                return \false;
            }
            $key = $metaChange['key'] ?? '';
            if (!\in_array($key, self::STOCK_ONLY_META_KEYS, \true)) {
                return \false;
            }
        }
        return \true;
    }
    /**
     * Get singleton instance.
     *
     * @codeCoverageIgnore
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\comp\WooCommerceScanner() : self::$me;
    }
}
