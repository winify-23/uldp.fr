


jQuery(document).ready(function () {

    jQuery("#header #bottom_header .header_main_menu_home > nav > .menu > li:first-child .nolink").on('click', function () {
        jQuery("#header #bottom_header .header_main_menu_home > nav > .menu").toggleClass('expend');
    });

    jQuery("#slideshow, .widget-slider-homepage .field-collection-container").owlCarousel({
        animateOut: 'fadeOut',
        responsiveClass: true,
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        slideSpeed: 500,
        autoplay: true,
        autoplayTimeout: 7000,
        dragEndSpeed: 880

    });


    $('.widget-aup-community-homepage .tab_item_community_home .tab_title').appendTo(".widget-aup-community-homepage-tabs");
    $('.widget-aup-community-homepage-tabs .tab_title:first-child').addClass('active');

    let owl = jQuery('.widget-aup-community-homepage > .field-collection-container').owlCarousel({
        animateOut: 'fadeOut',
        responsiveClass: true,
        items: 1,
        nav: false,
        dots: true,
        loop: false,
        autoplay: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
    });
    $('.widget-aup-community-homepage-tabs .tab_title').click(function () {
        $('.widget-aup-community-homepage-tabs .tab_title').removeClass('active')
        owl.trigger('to.owl.carousel', [$(this).index(), 1000]);
        $(this).addClass('active');
    })



    /* SCROLL */

    if (detectIE() == false) {
        var selecteurScroll = jQuery(document);
    }
    else {
        var selecteurScroll = jQuery('body');
    }

    var headerHeight = jQuery('#top_header').height();

    selecteurScroll.scroll(function () {
        var scrollTop = jQuery(window).scrollTop();
        if (headerHeight < scrollTop) {
            jQuery('#home_hamburger').addClass('fixed');
        }
        else {
            jQuery('#home_hamburger').removeClass('fixed');
        }
    });

});


function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}