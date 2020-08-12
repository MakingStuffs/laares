<?php

/**
 * Render a simple section element with either the passed argument 
 * or the site's tagline.
 */
if (!function_exists('making_stuffs_tagline')) {
    function making_stuffs_tagline($tagline)
    { ?>
        <section class="stuffs-quote__container">
            <p>
                <?php
                if (isset($tagline) && !empty($tagline)) {
                    echo $tagline;
                } else {
                    echo get_bloginfo('description');
                }
                ?>
            </p>
        </section>
    <?php
    }
}
add_action('stuffs_before_homepage_content', 'making_stuffs_tagline', 5, 1);

/**
 * Render a flex box grid with a large tile and two smaller ones.
 */
if (!function_exists('making_stuffs_featured_grid')) {
    function making_stuffs_featured_grid()
    { ?>
        <section class="big-margin-y big-pad-x">
            <div class="stuffs-featured-grid">
                <div class="stuffs-featured-grid__main">
                    <div class="stuffs-featured-grid-main__left"></div>
                    <div class="stuffs-featured-grid-main__right">
                        <p class="stuffs-featured-grid__text">Discover our latest new flagship product</p>
                        <a href="#" title="" class="stuffs-featured-grid__link">Read more</a>
                    </div>
                </div>
                <div class="stuffs-featured-grid__secondary">
                    <div class="stuffs-featured-grid__big">
                        <p class="stuffs-featured-grid__text">Discover our latest new flagship product</p>
                        <a href="#" title="" class="stuffs-featured-grid__link">Read more</a>
                    </div>
                    <div class="stuffs-featured-grid__small">
                        <a href="#" title="" class="stuffs-featured-grid__link">Read more</a>
                    </div>
                </div>
            </div>
        </section>
    <?php
    }
}
add_action('stuffs_homepage_content', 'making_stuffs_featured_grid', 5, 0);

/**
 * Render a flex row which has a list of attributes which can be scrolled
 */
if (!function_exists('making_stuffs_attribute_row')) {
    function making_stuffs_attribute_row()
    {
    ?>
        <section class="stuffs-flex-slider">
            <div class="stuffs-flex-slider__tile">
                <p class="stuffs-flex-slider__title">An Attribute</p>
                <p class="stuffs-flex-slider__text">Some information about this attribute</p>
            </div>
            <div class="stuffs-flex-slider__tile">
                <p class="stuffs-flex-slider__title">An Attribute</p>
                <p class="stuffs-flex-slider__text">Some information about this attribute</p>
            </div>
            <div class="stuffs-flex-slider__tile">
                <p class="stuffs-flex-slider__title">An Attribute</p>
                <p class="stuffs-flex-slider__text">Some information about this attribute</p>
            </div>
        </section>
    <?php
    }
}
add_action('stuffs_homepage_content', 'making_stuffs_attribute_row', 5);

/**
 * Render list of products
 */
if (!function_exists('making_stuffs_product_cards')) {
    function making_stuffs_product_cards()
    {
        $args = array(
            'limit'     => 6,
            'order'     => 'DESC'
        );
        $products = wc_get_products($args);
    ?>
        <section class="big-margin big-padding">
            <h3 class="txt-center">New Products</h3>
            <div class="stuffs-card-deck">
                <?php
                foreach ($products as $product) {
                ?>

                    <a href="<?php echo $product->get_permalink(); ?>" alt="" class="stuffs-card-deck__card">
                        <div class="stuffs-card-deck-card__thumb">
                            <picture>
                                <?php echo get_the_post_thumbnail($product->get_id(), ['200px', '200px']); ?>
                            </picture>
                        </div>
                        <div class="stuffs-card-deck-card__content">
                            <p class="stuffs-card-deck-card__title"><?php echo $product->get_title(); ?></p>
                            <span class="stuffs-card-deck-card__text"><?php echo get_the_category_by_ID($product->get_category_ids()[0]); ?></span>
                            <?php echo wc_get_rating_html($product->get_average_rating(), $product->get_Review_count()); ?>
                        </div>
                        <div class="stuffs-card-deck-card__footer"></div>
                    </a>
                <?php } ?>
            </div>
        </section>
    <?php
    }
}
add_action('stuffs_homepage_content', 'making_stuffs_product_cards', 15);

/**
 * Render about section
 */
if (!function_exists('making_stuffs_home_about_section')) {
    function making_stuffs_home_about_section()
    { ?>
        <section class="home-about-section blue-square-before green-square-after">
            <div class="home-about-section__heading">
                <h3>What is Making Stuffs?</h3>
                <a href="#" class="home-about-section-header__link" title="Ream more about Making Stuffs">Read our story</a>
            </div>
            <div class="home-about-section__content">
                <h4>A heading</h4>
                <p> Some words about this heading</p>
                <h4>A heading</h4>
                <p> Some words about this heading</p>
                <h4>A heading</h4>
                <p> Some words about this heading</p>
                <h4>A heading</h4>
                <p> Some words about this heading</p>
            </div>
            <div class="home-about-section__footer">
                <p class="home-about-section-footer__heading">Wanna get more info!?</p>
                <a href="#" class="home-about-section-footer__button" title="Call to action">Do Something</a>
            </div>
        </section>
<?php }
}
add_action('stuffs_homepage_content', 'making_stuffs_home_about_section', 20, 0);
?>