<?php 
    /**
     * The template for displaying the content on the home page of the website.
     * By using this template it will not be possible to implement the Gutenberg 
     * editor on the home page. It will, instead, have a static layout which can 
     * be controlled/altered by the customizer.
     * 
     * @package Making_Stuffs
     */
    
     /**
      * Hooked: making_stuffs_tagline, 5, 1
      */
      do_action('stuffs_before_homepage_content');
      
      /**
       * Hooked: making_stuffs_featured_products, 5, 0
       * Hooked: making_stuffs_tagline, 10, 1
       */
     do_action('stuffs_homepage_content');
