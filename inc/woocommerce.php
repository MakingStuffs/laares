<?php

/**
 * WooCommerce Compatibility File
 *
 * @link https://woocommerce.com/
 *
 * @package Making_Stuffs
 */

/**
 * WooCommerce setup function.
 *
 * @link https://docs.woocommerce.com/document/third-party-custom-theme-compatibility/
 * @link https://github.com/woocommerce/woocommerce/wiki/Enabling-product-gallery-features-(zoom,-swipe,-lightbox)
 * @link https://github.com/woocommerce/woocommerce/wiki/Declaring-WooCommerce-support-in-themes
 *
 * @return void
 */
function making_stuffs_woocommerce_setup()
{
	add_theme_support(
		'woocommerce',
		array(
			'thumbnail_image_width' => 150,
			'single_image_width'    => 300,
			'product_grid'          => array(
				'default_rows'    => 3,
				'min_rows'        => 1,
				'default_columns' => 4,
				'min_columns'     => 1,
				'max_columns'     => 6,
			),
		)
	);
	add_theme_support('wc-product-gallery-zoom');
	add_theme_support('wc-product-gallery-lightbox');
	add_theme_support('wc-product-gallery-slider');
}
add_action('after_setup_theme', 'making_stuffs_woocommerce_setup');

/**
 * WooCommerce specific scripts & stylesheets.
 *
 * @return void
 */
function making_stuffs_woocommerce_scripts()
{

	$font_path   = WC()->plugin_url() . '/assets/fonts/';
	$inline_font = '@font-face {
			font-family: "star";
			src: url("' . $font_path . 'star.eot");
			src: url("' . $font_path . 'star.eot?#iefix") format("embedded-opentype"),
				url("' . $font_path . 'star.woff") format("woff"),
				url("' . $font_path . 'star.ttf") format("truetype"),
				url("' . $font_path . 'star.svg#star") format("svg");
			font-weight: normal;
			font-style: normal;
		}';

	wp_add_inline_style('making-stuffs-style', $inline_font);
}
add_action('wp_enqueue_scripts', 'making_stuffs_woocommerce_scripts');

/**
 * Disable the default WooCommerce stylesheet.
 *
 * @link https://docs.woocommerce.com/document/disable-the-default-stylesheet/
 */
add_filter('woocommerce_enqueue_styles', '__return_empty_array');

/**
 * Add 'woocommerce-active' class to the body tag.
 *
 * @param  array $classes CSS classes applied to the body tag.
 * @return array $classes modified to include 'woocommerce-active' class.
 */
function making_stuffs_woocommerce_active_body_class($classes)
{
	$classes[] = 'woocommerce-active';

	return $classes;
}
add_filter('body_class', 'making_stuffs_woocommerce_active_body_class');

/**
 * Related Products Args.
 *
 * @param array $args related products args.
 * @return array $args related products args.
 */
function making_stuffs_woocommerce_related_products_args($args)
{
	$defaults = array(
		'posts_per_page' => 3,
		'columns'        => 3,
	);

	$args = wp_parse_args($defaults, $args);

	return $args;
}
add_filter('woocommerce_output_related_products_args', 'making_stuffs_woocommerce_related_products_args');

/**
 * Remove default WooCommerce wrapper.
 */
remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

if (!function_exists('making_stuffs_woocommerce_wrapper_before')) {
	/**
	 * Before Content.
	 *
	 * Wraps all WooCommerce content in wrappers which match the theme markup.
	 *
	 * @return void
	 */
	function making_stuffs_woocommerce_wrapper_before()
	{
?>
		<main id="primary" class="site-main">
		<?php
	}
}
add_action('woocommerce_before_main_content', 'making_stuffs_woocommerce_wrapper_before');

if (!function_exists('making_stuffs_woocommerce_wrapper_after')) {
	/**
	 * After Content.
	 *
	 * Closes the wrapping divs.
	 *
	 * @return void
	 */
	function making_stuffs_woocommerce_wrapper_after()
	{
		?>
		</main><!-- #main -->
	<?php
	}
}
add_action('woocommerce_after_main_content', 'making_stuffs_woocommerce_wrapper_after');


if (!function_exists('making_stuffs_woocommerce_cart_link_fragment')) {
	/**
	 * Cart Fragments.
	 *
	 * Ensure cart contents update when products are added to the cart via AJAX.
	 * Calls the making_stuffs_drawer_cart function and assigns its 
	 * output to the div.drawer-cart element in the fragments array.
	 *
	 * @param array $fragments Fragments to refresh via AJAX.
	 * @return array Fragments to refresh via AJAX.
	 */
	function making_stuffs_woocommerce_cart_link_fragment($fragments)
	{
		ob_start();
		making_stuffs_drawer_cart();
		$fragments['div.drawer-cart'] = ob_get_clean();

		return $fragments;
	}
}
add_filter('woocommerce_add_to_cart_fragments', 'making_stuffs_woocommerce_cart_link_fragment');

if (!function_exists('making_stuffs_woocommerce_cart_link')) {
	/**
	 * Cart Link.
	 *
	 * Displayed a link to the cart including the number of items present and the cart total.
	 *
	 * @return void
	 */
	function making_stuffs_woocommerce_cart_link()
	{
	?>
		<a class="cart-contents" href="<?php echo esc_url(wc_get_cart_url()); ?>" title="<?php esc_attr_e('View your shopping cart', 'making-stuffs'); ?>">
			<?php
			$item_count_text = sprintf(
				/* translators: number of items in the mini cart. */
				_n('%d item', '%d items', WC()->cart->get_cart_contents_count(), 'making-stuffs'),
				WC()->cart->get_cart_contents_count()
			);
			?>
			<span class="amount"><?php echo wp_kses_data(WC()->cart->get_cart_subtotal()); ?></span> <span class="count"><?php echo esc_html($item_count_text); ?></span>
		</a>
	<?php
	}
}

/**
 * Uses the get_template_part function in WP to get the 
 * drawer basket's contents. Added to the making_stuffs_drawer_basket_contents
 * hook.
 * 
 * @return void
 * 
 */
if (!function_exists('making_stuffs_drawer_cart')) {
	function making_stuffs_drawer_cart()
	{
		get_template_part('template-parts/woocommerce/basket', 'contents-drawer');
	}
}
add_action('making_stuffs_drawer_basket_contents', 'making_stuffs_drawer_cart');

/**
 * Place single product gallery and summary into a flex row
 */

if (!function_exists('making_stuffs_before_single_product_summary')) {
	function making_stuffs_before_single_product_summary()
	{
	?>
		<div class="single-product-info">
		<?php
	}
}
add_action('woocommerce_before_single_product_summary', 'making_stuffs_before_single_product_summary', 15, 0);

/**
 * Close single product gallery and summary row
 */

if (!function_exists('making_stuffs_after_single_product_summary')) {
	function making_stuffs_after_single_product_summary()
	{
		?>
		</div>
	<?php
	}
}
add_action('woocommerce_after_single_product_summary', 'making_stuffs_after_single_product_summary', 5, 0);

/**
 * Add a custom class to the image gallery on single product pages
 * 
 * @param array list of classes to be applied to the gallery wrapper
 * @return array modified list of classes to be applied to the gallery wrapper
 */

if (!function_exists('making_stuffs_single_product_images_filter')) {
	function making_stuffs_single_product_images_filter($args)
	{
		$args[] = 'single-product-gallery';
		return $args;
	}
}
add_filter('woocommerce_single_product_image_gallery_classes', 'making_stuffs_single_product_images_filter', 15, 1);

/**
 * Remove add_to_cart link from loop products
 */
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10);

/**
 * Put product loop content into a div
 */
if (!function_exists('making-stuffs_before_shop_loop_title')) {
	function stuffs_before_shop_loop_title()
	{ ?>
		<div class="sm-pad">
		<?php }
}
add_action('woocommerce_before_shop_loop_item_title', 'stuffs_before_shop_loop_title', 11);

/**
 * Close product loop content div
 */
if (!function_exists('making-stuffs_after_shop_loop_item')) {
	function stuffs_after_shop_loop_item()
	{ ?>
		</div>
		<?php }
}
add_action('woocommerce_after_shop_loop_item', 'stuffs_after_shop_loop_item', 4);

/**
 * Reorder the title and rating on the single product page
 */
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10);
add_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 5);

/**
 * Change the priority of the excerpt
 */
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20);
add_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 7);

/**
 * Move the sale flash into the product's info container
 */
remove_action('woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10);
add_action('woocommerce_single_product_summary', 'woocommerce_show_product_sale_flash', 0);

/**
 * Render the add to cart button after the input field.
 * Takes one argument -- whether or not this button is part of a
 * group of inputs. If so hides the add to cart text;
 * 
 * @param boolean $for_group defaults to false
 * @return void
 */
if (!function_exists('making_stuffs_single_add_to_cart_button')) {
	function making_stuffs_single_add_to_cart($for_group = false)
	{
		global $product;

		if ($product->is_sold_individually()) : ?>
			<button type="submit" name="add-to-cart" value="<?php echo esc_attr($product->get_id()); ?>" class="no-input single_add_to_cart_button button alt has-icon">
				Add to Basket
				<i class="stuffs-basket"></i>
				<span class="tooltip__top">
					<?php echo esc_html($product->single_add_to_cart_text()); ?>
				</span>
			</button>

		<?php else : ?>

			<button type="submit" name="add-to-cart" value="<?php echo esc_attr($product->get_id()); ?>" class="single_add_to_cart_button button alt has-icon">
				<?php echo $for_group ? '' : 'Add to cart'; ?>
				<i class="stuffs-basket"></i>
				<span class="tooltip__top">
					<?php echo esc_html($product->single_add_to_cart_text()); ?>
				</span>
			</button>

		<?php endif;
	}
}
add_action('woocommerce_after_add_to_cart_quantity', 'making_stuffs_single_add_to_cart', 0, 1);

/**
 * Return sale price with new price first
 * 
 * @return string containing the HTML markup for the price of sale items.
 */
if (!function_exists('making_stuffs_sale_price_html')) {
	function making_stuffs_sale_price_html()
	{
		global $product;

		$regular_price = number_format($product->get_regular_price(), 2);
		$sale_price = number_format($product->get_sale_price(), 2);
		$currency_symbol = get_woocommerce_currency_symbol();
		$html = '<ins>'
			. '<span class="woocommerce-Price-amount amount">'
			. '<span class="woocommerce-Price-currencySymbol">'
			. $currency_symbol
			. '</span>'
			. $sale_price
			. '</span>'
			. '</ins>'
			. '<del>'
			. '<span class="woocommerce-Price-amount amount">'
			. '<span class="woocommerce-Price-currencySymbol">'
			. $currency_symbol
			. '</span>'
			. $regular_price
			. '</span>'
			. '</del>';

		return $html;
	}
}

/**
 * Render a HTMl element with the stock status for the current product
 * 
 * @return void
 */

if (!function_exists('making_stuffs_stock_status')) {
	function making_stuffs_stock_status()
	{
		global $product;

		$stock_count = $product->get_stock_quantity();
		$low_amount = $product->get_low_stock_amount();
		$low_stock = $stock_count <= $low_amount;
		if (!$product->is_in_stock()) { ?>
			<div class="stuffs-row justify-center align-center big-margin-b">
				<span class="stock" outStock>Out of Stock</span>
			</div>
			<?php } else {
			if ($product->managing_stock()) { ?>
				<span class="stock" <?php echo $low_stock ? 'lowStock' : 'inStock'; ?>>
					<?php echo $low_stock ? 'Low stock' : 'In stock'; ?>
					<span class="stock-count tooltip__top">
						<?php echo $low_stock ? 'Only ' . $stock_count . ' left' : $stock_count . ' in stock'; ?>
					</span>
				</span>
			<?php } else { ?>
				<span class="stock" inStock>
					In stock
				</span>
		<?php }
		}
	}
}
add_action('woocommerce_before_add_to_cart_button', 'making_stuffs_stock_status');
add_action('making_stuffs_product_stock', 'making_stuffs_stock_status');

/**
 * Output content before the shop loop
 */

if (!function_exists('making_stuffs_before_shop_loop')) {
	function making_stuffs_before_shop_loop()
	{ ?>
		<section class="stuffs-shop-loop">
			<div class="woocommerce-products-header">
				<?php if (apply_filters('woocommerce_show_page_title', true)) : ?>
					<h2 class="woocommerce-products-header__title page-title"><?php woocommerce_page_title(); ?></h2>
				<?php endif; ?>

				<?php
				/**
				 * Hook: woocommerce_archive_description.
				 *
				 * @hooked woocommerce_taxonomy_archive_description - 10
				 * @hooked woocommerce_product_archive_description - 10
				 */
				do_action('woocommerce_archive_description');
				?>
			</div>
		<?php };
}
add_action('woocommerce_before_shop_loop', 'making_stuffs_before_shop_loop', 5, 0);
/**
 * Output content after the woocommerce shop loop
 */

if (!function_exists('making_stuffs_after_shop_loop')) {
	function making_stuffs_after_shop_loop()
	{ ?>
		</section>
	<?php };
}
add_action('woocommerce_after_shop_loop', 'making_stuffs_after_shop_loop', 10, 0);

/**
 * Modified wc_cart_totals_coupon_html
 * 
 * @param string|WC_Coupon $coupon Coupon data or code.
 */
function making_stuffs_cart_totals_coupon_html($coupon)
{

	if (is_string($coupon)) {
		$coupon = new WC_Coupon($coupon);
	}

	$discount_amount_html = '';

	$amount               = WC()->cart->get_coupon_discount_amount($coupon->get_code(), WC()->cart->display_cart_ex_tax);
	$discount_amount_html = '-' . wc_price($amount);

	if ($coupon->get_free_shipping() && empty($amount)) {
		$discount_amount_html = __('Free shipping coupon', 'woocommerce');
	}

	$discount_amount_html = apply_filters('woocommerce_coupon_discount_amount_html', $discount_amount_html, $coupon);
	$coupon_html          = $discount_amount_html . ' <a href="' . esc_url(add_query_arg('remove_coupon', rawurlencode($coupon->get_code()),  wc_get_cart_url())) . '" class="woocommerce-remove-coupon" data-coupon="' . esc_attr($coupon->get_code()) . '"><i class="stuffs-cancel_presentation"></i><span class="tooltip__top">Remove coupon</span></a>';

	echo wp_kses(apply_filters('woocommerce_cart_totals_coupon_html', $coupon_html, $coupon, $discount_amount_html), array_replace_recursive(wp_kses_allowed_html('post'), array('a' => array('data-coupon' => true)))); // phpcs:ignore PHPCompatibility.PHP.NewFunctions.array_replace_recursiveFound
}

/**
 * Remove select2 from woocommerce
 */
function making_stuffs_remove_select_woo()
{
	if (class_exists('woocommerce')) {
		wp_dequeue_style('selectWoo');
		wp_deregister_style('selectWoo');
		wp_dequeue_script('selectWoo');
		wp_deregister_script('selectWoo');
	}
}
add_action('wp_enqueue_scripts', 'making_stuffs_remove_select_woo', 100);

/**
 * Alter the args which are passed to the woocommerce_form_fields_args action
 * 
 * @param array arguments to be filtered
 * @return array filtered array of arguments
 */
function making_stuffs_wc_form_fields_filter($args)
{
	array_push($args['class'], 'stuffs-input has-label');

	if ($args['type'] === 'country') {
		array_push($args['class'], 'has-select');
	}

	if ($args['type'] === 'state') {
		array_push($args['class'], 'has-select');
	}


	return $args;
}
add_filter('woocommerce_form_field_args', 'making_stuffs_wc_form_fields_filter', 10, 1);

/**
 * Reorders the fields returned by the woocommerce_checkout_fields filter
 * 
 * @param array fields to be filtered
 * @return array reordered list of fields
 */
function making_stuffs_checkout_fields_reorder($fields)
{
	return $fields;
}
add_filter('woocommerce_checkout_fields', 'making_stuffs_checkout_fields_reorder', 10, 1);