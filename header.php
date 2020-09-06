<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Making_Stuffs
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'making-stuffs'); ?></a>

		<header id="masthead" class="site-header">
			<div class="stuffs-row justify-between align-center big-margin-b">
				<div class="site-branding">
					<?php

					if (has_custom_logo()) {
						the_custom_logo();
					} elseif (is_front_page() && is_home()) {
					?>
						<h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></h1>
					<?php
					} else { ?>
						<p class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></p>
					<?php
					}
					$making_stuffs_description = get_bloginfo('description', 'display');
					if ($making_stuffs_description  && !has_custom_logo() || is_customize_preview() && !has_custom_logo()) :
					?>
						<p class="site-description"><?php echo $making_stuffs_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
													?></p>
					<?php endif; ?>
				</div><!-- .site-branding -->
				<nav id="top-menu" class="top-menu">
					<button class="stuffs-drawer-menu__button" aria-label="Login/Register" aria-controls="user-menu">
						<i class="stuffs-user"></i>
						<span class="tooltip__left">Login/Register</span>
					</button>
					<div id="user-menu" class="stuffs-drawer-menu justify-even" role="menu" aria-expanded="false">
						<div class="stuffs-drawer-menu__container">
							<div class="stuffs-drawer-menu__header">
								<p><?php echo get_bloginfo('title'); ?></p>
								<button class="stuffs-drawer-menu__close" aria-controls="user-menu">
									<span class="tooltip__left">Close</span>
								</button>
							</div>
							<div class="stuffs-drawer-menu__content">
								<p class="stuffs-drawer-menu-content__header">Your Account</p>
								<?php
								if (is_user_logged_in()) { ?>
									<ul class="stuffs-drawer-menu__links">
										<li class="stuffs-drawer-menu__link"><a href="<?php echo get_site_url(); ?>/my-account" title="Go to your account dashboard">Dashboard</a></li>
										<li class="stuffs-drawer-menu__link"><a href="<?php echo get_site_url(); ?>/my-account/orders" title="View your previous orders">Orders</a></li>
										<li class="stuffs-drawer-menu__link"><a href="<?php echo get_site_url(); ?>/my-account/edit-address" title="View/edit your saved addresses">Addresses</a></li>
										<li class="stuffs-drawer-menu__link"><a href="<?php echo get_site_url(); ?>/my-account/edit-account" title="View/edit your account details">Account Details</a></li>
										<li class="stuffs-drawer-menu__link"><a href="<?php echo wp_logout_url($_SERVER['REQUEST_URI']); ?>" title="Logout from <?php echo get_bloginfo('name'); ?>">Logout</a></li>
									</ul>
								<?php } else { ?>
									<ul class="stuffs-drawer-menu__links">
										<li class="stuffs-drawer-menu__link"><a href="<?php echo get_site_url(); ?>/wp-login.php" title="Login to <?php echo get_bloginfo('name'); ?>">Login</a></li>
										<li class="stuffs-drawer-menu__link"><a href="<?php echo get_site_url(); ?>/wp-login.php?action=register" title="Register for <?php echo get_bloginfo('name'); ?>">Register</a></li>
									</ul>
								<?php } ?>
							</div>
							<div class="stuffs-drawer-menu__footer">
								<div class="stuffs-social__tiny">
									<a href="#facebook" title="" rel="noopenener norefferer">
										<span class="tooltip">Facebook</span>
									</a>
									<a href="#instagram" title="" rel="noopenener norefferer">
										<span class="tooltip">Instagram</span>
									</a>
									<a href="#twitter" title="" rel="noopenener norefferer">
										<span class="tooltip">Twitter</span>
									</a>
									<a href="#github" title="" rel="noopenener norefferer">
										<span class="tooltip">Github</span>
									</a>
									<a href="#reddit" title="" rel="noopenener norefferer">
										<span class="tooltip">Reddit</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<button class="stuffs-drawer-menu__button" aria-label="Basket" aria-controls="basket-menu">
						<i class="stuffs-basket"></i>
						<span class="tooltip__left">Basket</span>
					</button>
					<div id="basket-menu" class="stuffs-drawer-menu" role="menu" aria-expanded="false">
						<div class="stuffs-drawer-menu__container">
							<div class="stuffs-drawer-menu__header">
								<p>Your Basket</p>
								<button class="stuffs-drawer-menu__close" aria-controls="basket-menu">
									<span class="tooltip__left">Close</span>
								</button>
							</div>
							<div class="stuffs-drawer-menu__content">
								<?php
								/**
								 * @Hooked making_stuffs_drawer_cart, 10
								 */
								do_action('making_stuffs_drawer_basket_contents');
								?>
							</div>
							<div class="stuffs-drawer-menu__footer">
								<div class="stuffs-social__tiny">
									<a href="#facebook" title="" rel="noopenener norefferer">
										<span class="tooltip">Facebook</span>
									</a>
									<a href="#instagram" title="" rel="noopenener norefferer">
										<span class="tooltip">Instagram</span>
									</a>
									<a href="#twitter" title="" rel="noopenener norefferer">
										<span class="tooltip">Twitter</span>
									</a>
									<a href="#github" title="" rel="noopenener norefferer">
										<span class="tooltip">Github</span>
									</a>
									<a href="#reddit" title="" rel="noopenener norefferer">
										<span class="tooltip">Reddit</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav><!-- #top-menu -->
			</div><!-- .stuffs-row -->
			<div class="stuffs-row justify-between align-center">
				<?php get_sidebar(); ?>
				<nav id="site-navigation" class="main-navigation auto-margin-r">
					<button class="stuffs-drawer-menu__button" aria-controls="primary-menu" aria-expanded="false">
						<i class="stuffs-burger-menu"></i>
						<span class="tooltip__right">
							<?php esc_html_e('Primary Menu', 'making-stuffs'); ?>
						</span>
					</button>
					<div class="stuffs-drawer-menu" id="primary-menu" role="menu" aria-expanded="false">
						<div class="stuffs-drawer-menu__container">
							<div class="stuffs-drawer-menu__header">
								<p><?php echo get_bloginfo('title'); ?></p>
								<button class="stuffs-drawer-menu__close" aria-controls="primary-menu">
									<span class="tooltip__left">Close</span>
								</button>
							</div>
							<div class="stuffs-drawer-menu__content stuffs-column justify-between">
								<p class="stuffs-drawer-menu-content__header" id="menu-title">Main Menu</p>
								<?php
								wp_nav_menu(
									array(
										'theme_location' => 'menu-1',
										'menu_id'        => 'primary-menu-list',
										'menu_class'	=> 'stuffs-drawer-menu__links'
									)
								);
								?>
								<button id="menu-back-button" aria-hidden="true" class="stuffs-drawer-menu-content__back-button">
									<i class="stuffs-claret-left"></i>
								</button>
							</div>
							<div class="stuffs-drawer-menu__footer">
								<div class="stuffs-social__tiny">
									<a href="#facebook" title="" rel="noopenener norefferer">
										<span class="tooltip">Facebook</span>
									</a>
									<a href="#instagram" title="" rel="noopenener norefferer">
										<span class="tooltip">Instagram</span>
									</a>
									<a href="#twitter" title="" rel="noopenener norefferer">
										<span class="tooltip">Twitter</span>
									</a>
									<a href="#github" title="" rel="noopenener norefferer">
										<span class="tooltip">Github</span>
									</a>
									<a href="#reddit" title="" rel="noopenener norefferer">
										<span class="tooltip">Reddit</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav><!-- #site-navigation -->
				<div class="stuffs-search-bar">
					<input class="stuffs-search-bar__input">
					<button type="submit" class="stuffs-search-bar__submit">
						<i class="stuffs-search"></i>
						<span class="tooltip__left">
							Submit
						</span>
					</button>
				</div>
			</div>
		</header><!-- #masthead -->
		<div class="stuffs-social__tiny sm-pad-x big-pad-y feint-border-b bg-dark">
			<a class="fade-05" href="#facebook" title="" rel="noopenener norefferer">
				<span class="tooltip bg-very-dark">Facebook</span>
			</a>
			<a class="fade-05" href="#instagram" title="" rel="noopenener norefferer">
				<span class="tooltip bg-very-dark">Instagram</span>
			</a>
			<a class="fade-05" href="#twitter" title="" rel="noopenener norefferer">
				<span class="tooltip bg-very-dark">Twitter</span>
			</a>
			<a class="fade-05" href="#github" title="" rel="noopenener norefferer">
				<span class="tooltip bg-very-dark">Github</span>
			</a>
			<a class="fade-05" href="#reddit" title="" rel="noopenener norefferer">
				<span class="tooltip bg-very-dark">Reddit</span>
			</a>
		</div>