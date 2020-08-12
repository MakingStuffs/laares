<?php

/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Making_Stuffs
 */

if (!is_active_sidebar('sidebar-1')) {
	return;
}
?>
<nav id="secondary" class="sm-margin-r">
	<button class="stuffs-drawer-menu__button" aria-label="Widget Area" aria-controls="widget-sidebar">
		<i class="stuffs-three-dots-horizontal"></i>
		<span class="tooltip__right">Widget Area</span>
	</button>
	<aside id="widget-sidebar" class="widget-area stuffs-drawer-menu" role="menu" aria-expanded="false">
		<div class="stuffs-drawer-menu__container">
			<div class="stuffs-drawer-menu__header">
				<p><?php echo get_bloginfo('title'); ?></p>
				<button class="stuffs-drawer-menu__close" aria-controls="widget-sidebar">
					<span class="tooltip__left">Close</span>
				</button>
			</div>
			<div class="stuffs-drawer-menu__content">
				<?php dynamic_sidebar('sidebar-1'); ?>
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
	</aside>
</nav><!-- #secondary -->