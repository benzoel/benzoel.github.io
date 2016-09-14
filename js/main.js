$(function () {
    $(".b-slider").owlCarousel({
        pagination: true,
        loop: true,
        margin: 0,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        animateOut: 'fadeInLeft',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    });
    $(".b-action__slider").owlCarousel({
        pagination: false,
        loop: true,
        margin: 30,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    });
    $(".b-hit__slider").owlCarousel({
        pagination: false,
        loop: true,
        margin: 30,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    });
    $('.b-open__menu').on('click', function () {
        $('.b-menu-wrap').toggleClass('j-open');
    });
    $('.b-open__menu').click(function () {
        $('.b-open__menu-item').toggleClass('b-active');
    });
    $(window).on('resize', function () {
        if ($(window).width() < 960) {
            $('.b-header__menu').appendTo('.top-menu-wrap');
        } else {
            $('.b-header__menu').appendTo('.b-header__right-top');
        }
    });
    $(window).trigger('resize');
})

