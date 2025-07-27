<?php
/**
 * Plugin Name: Interactive FAQ Block
 * Description: A custom Gutenberg block for an interactive FAQ section.
 * Version: 1.0
 * Author: Gordon Rozga
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Enqueue block assets for the block editor
function faq_block_enqueue_assets() {
    wp_enqueue_script(
        'interactive-faq-block',
        plugins_url( 'build/index.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
    );

    wp_enqueue_style(
        'interactive-faq-block-style',
        plugins_url( 'build/style.css', __FILE__ ),
        [],
        filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )
    );
}
add_action( 'enqueue_block_editor_assets', 'faq_block_enqueue_assets' );

// Enqueue the accordion.js script for the front-end
function enqueue_faq_accordion_script() {
    wp_enqueue_script(
        'faq-accordion-script',
        plugins_url('build/accordion.js', __FILE__), // Path to the accordion.js file
        [], // Dependencies if needed
        filemtime(plugin_dir_path(__FILE__) . 'build/accordion.js'),
        true // Load in footer
    );
}
add_action('wp_enqueue_scripts', 'enqueue_faq_accordion_script');
