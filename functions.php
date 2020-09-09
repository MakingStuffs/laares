<?php

/**
 * Making Stuffs functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Making_Stuffs
 */

if (!defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

if (!function_exists('making_stuffs_setup')) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function making_stuffs_setup()
	{
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Making Stuffs, use a find and replace
		 * to change 'making-stuffs' to the name of your theme in all the template files.
		 */
		load_theme_textdomain('making-stuffs', get_template_directory() . '/languages');

		// Add default posts and comments RSS feed links to head.
		add_theme_support('automatic-feed-links');

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support('title-tag');

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support('post-thumbnails');

		// This theme uses wp_nav_menu() in two locations.
		register_nav_menu('menu-1', esc_html__('Primary menu. Located in the offscreen drawer. Menu items with children will not redirect to a new page, they act as placeholders.', 'making-stuffs'));
		register_nav_menu('menu-2', esc_html__('Desktop menu. Only visible on screens larger than 650px. Does not support dropdowns.', 'making-stuffs'));

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'making_stuffs_custom_background_args',
				array(
					'default-color' => '#f8f8f8',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support('customize-selective-refresh-widgets');

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 50,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action('after_setup_theme', 'making_stuffs_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function making_stuffs_content_width()
{
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters('making_stuffs_content_width', 640);
}
add_action('after_setup_theme', 'making_stuffs_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function making_stuffs_widgets_init()
{
	register_sidebar(array(
		'name'          => esc_html__('Drawer Menu Widgets', 'making-stuffs'),
		'id'            => 'sidebar-1',
		'description'   => esc_html__('Add widgets here.', 'making-stuffs'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>'
	));
	register_sidebar(array(
		'name'          => esc_html__('Footer Widget Area', 'making-stuffs'),
		'id'            => 'sidebar-2',
		'description'   => esc_html__('Add widgets here.', 'making-stuffs'),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h5 class="widget-title">',
		'after_title'   => '</h5>'
	));
}
add_action('widgets_init', 'making_stuffs_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function making_stuffs_scripts()
{
	wp_enqueue_style('making-stuffs-style', get_stylesheet_uri(), array(), _S_VERSION);
	wp_style_add_data('making-stuffs-style', 'rtl', 'replace');

	wp_enqueue_script('making-stuffs-navigation', get_template_directory_uri() . '/js/frontend.js', array(), _S_VERSION, true);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'making_stuffs_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if (class_exists('WooCommerce')) {
	require get_template_directory() . '/inc/woocommerce.php';
}

/**
 * Import custom actions
 */

require get_template_directory() . '/inc/stuffs-actions.php';

/**
 * Simple function to limit the number of words in a give string
 * @param string string to altered
 * @param number number of words to limit to
 * @return string limited to $limit characters
 */
if (!function_exists('making_stuffs_word_limit')) {
	function making_stuffs_word_limit($text, $limit)
	{
		if (str_word_count($text) > $limit) {
			$words = str_word_count($text, 2);
			$word_indexes = array_keys($words);
			$text = trim(substr($text, 0, $word_indexes[$limit]));
			$text .= "...";
		}
		return $text;
	}
}
