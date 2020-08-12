<?php

/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Making_Stuffs
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function making_stuffs_body_classes($classes)
{
	// Adds a class of hfeed to non-singular pages.
	if (!is_singular()) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if (!is_active_sidebar('sidebar-1')) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter('body_class', 'making_stuffs_body_classes');

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function making_stuffs_pingback_header()
{
	if (is_singular() && pings_open()) {
		printf('<link rel="pingback" href="%s">', esc_url(get_bloginfo('pingback_url')));
	}
}
add_action('wp_head', 'making_stuffs_pingback_header');

/**
 * Home page product ratings
 */
function making_stuffs_product_ratings_extension($rating_html, $rating, $count)
{
	if (!empty($rating_html)) {
		echo $rating_html;
	} else { ?>

		<div class="star-rating unrated" role="img" aria-label="Unrated">
			<span></span>
		</div>

<?php	}
}
add_filter('woocommerce_product_get_rating_html', 'making_stuffs_product_ratings_extension', 10, 3);
