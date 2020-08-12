<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Making_Stuffs
 */

?>

<footer id="colophon" class="site-footer">
	<section class="footer-mailer">
		<form id="mail-sub" class="footer-mailer__form">
			<div class="footer-mailer__content">
				<h4>Stay in the Loop!</h4>
				<p>Enter your email address below and we will keep you updated with all our exclusive offers and new releases.</p>
				<p>Don't worry, we won't sell your data or spam you!</p>
			</div>
			<div class="stuffs-input w-100p">
				<input placeholder="yourname@example.com" type="email" name="email" aria-label="Enter email" required />
				<button role="submit" form="mail-sub" class="has-icon" aria-label="Subscribe">
					<i class="stuffs-mail-list-subscribe"></i>
					<span class="tooltip__top">
						Subscribe
					</span>
				</button>
			</div>
		</form>
	</section>
	<section class="footer-info">
		<?php dynamic_sidebar('sidebar-2'); ?>
	</section>
	<div class="site-info">
		<a href="<?php echo esc_url(__('https://wordpress.org/', 'making-stuffs')); ?>">
			<?php
			/* translators: %s: CMS name, i.e. WordPress. */
			printf(esc_html__('Proudly powered by %s', 'making-stuffs'), 'WordPress');
			?>
		</a>
		<span class="sep"> | </span>
		<?php
		/* translators: 1: Theme name, 2: Theme author. */
		printf(esc_html__('Theme: %1$s by %2$s.', 'making-stuffs'), 'making-stuffs', '<a href="https://makingstuffs.co.uk">{ Making Stuffs }</a>');
		?>
	</div><!-- .site-info -->
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>