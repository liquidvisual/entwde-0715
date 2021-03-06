/*
    HERO-CAROUSEL - Last updated: 04.05.15
*/
//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(function() {

    //==================================================
    // Variables
    //==================================================

    var TOUCH_ENABLED = $(".touch").length;

    //==================================================
    // Launch
    //==================================================

    function launchHeroCarousel() {
        var largeUp = $(window).width() > 1025; // no more touch

        bxSliderHero = $('.js-carousel').bxSlider({
            auto: false,//(largeUp ? true : false),
            mode: 'fade',
            adaptiveHeight: true,
            responsive: true,
            touchEnabled: false,
            speed: 1500,
            pause: 6000, // Slow timer
            slideMargin: 0,
            slideSelector: ".lv-hero",
            minSlides: 1,
            // controls: true,
            nextSelector: ".lv-hero-next",
            prevSelector: ".lv-hero-prev",
            nextText: "",
            prevText: "",
            infiniteLoop: true,
            useCSS: true,
            pager: (TOUCH_ENABLED ? false : true),
            pagerSelector: '.lv-hero-carousel-bullets'
            // onSliderLoad:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft');},
            // onSlideBefore: function(){  $('.lv-hero-caption').hide().removeClass('fadeInLeft');},
            // onSlideAfter:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft');}
        });
    }
    launchHeroCarousel();
});


//==================================================
//
//==================================================