<?php

/**
 * Single Product Price
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/price.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.0.0
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

global $product;

$regular_price = $product->get_regular_price();
$sale_price = $product->get_sale_price();
$stock_status = $product->get_stock_Status();
$price = $product->get_price();
$low_stock = $product->get_low_stock_amount();
$symbol = get_woocommerce_currency_symbol();

	// If it is a grouped product the price will be handled by the grouped table.
	if ( $product->is_type('grouped') ) {
		return;
	}

?>

<div class="single-product-price">
	<?php
	// Variable product
	if ($product->is_type('variable')) {
		// Min
		$min_price_regular = $product->get_variation_regular_price();
		$min_price_sale = $product->get_variation_sale_price();
		$min_price = $product->get_variation_price();

		// Max
		$max_price_regular = $product->get_variation_regular_price('max');
		$max_price_sale = $product->get_variation_sale_price('max');
		$max_price = $product->get_variation_price('max');
	?>
		<div class="<?php echo esc_attr(apply_filters('woocommerce_product_price_class', 'price')); ?>">
			<div class="stuffs-row wrap align-center">
				<strong>
					<?php echo $symbol . $min_price . ' - ' . $symbol . $max_price; ?>
				</strong>
			</div>
		</div>
		<?php
		// Simple product
	} elseif ($product->is_type('simple')) {

		if ($price == $sale_price) {

			$percent = (1 - ($sale_price / $regular_price)) * 100;
			$percent = number_format($percent, 0);
			$discount = number_format($regular_price - $sale_price, 2);
			$sale_output = $symbol . number_format($sale_price, 2);
			$regular_output = $symbol . number_format($regular_price, 2);
			$saving_output = 'You save ' . $symbol . $discount . ' (' . $percent . '%)';
			//on sale
		?>
			<div class="<?php echo __(apply_filters('woocommerce_product_price_class', 'price sm-margin')); ?>">
				<div class="stuffs-row wrap align-center justify-center">
					<ins>
						<strong>
							<?php echo __($sale_output, 'making-stuffs'); ?>
						</strong>
					</ins>
					<del>
						<span>
							<?php echo __($regular_output, 'making-stuffs'); ?>
						</span>
					</del>
				</div>
				<p class="saving txt-center">
					<?php echo __($saving_output, 'making-stuffs'); ?>
				</p>
			</div>

		<?php
		} else {
		?>
			<div class="<?php echo esc_attr(apply_filters('woocommerce_product_price_class', 'price sm-margin')); ?>">
				<div class="stuffs-row wrap align-center justify-center">
					<strong>
						<?php echo $symbol . number_format($regular_price, 2); ?>
					</strong>
				</div>
			</div>
		<?php
		}
	} ?>
</div>