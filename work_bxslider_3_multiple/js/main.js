$(document).ready(function () {

    $('.basic_slider').bxSlider();

    $('.control_slider').bxSlider();

    $('.img_control_slider').bxSlider();

    $('.multiple_slider').bxSlider({
        minSlides:2,
        maxSlides:4,
        moveSlides:1,
        slideWidth:300,
        slideMargin:20,
        // pager:false,
        // controls:false
    });



});