$(document).ready(function() {

    $('.hamburger').on('click', function () {
        $('#main-menu').toggleClass('main-menu-hiden');
        $('.main-menu-overlay').toggleClass('main-menu-overlay-hidden');
    });

    $('.main-menu-overlay').on('click', function () {
        $('#main-menu').toggleClass('main-menu-hiden');
        $('.main-menu-overlay').toggleClass('main-menu-overlay-hidden');
    })

    $(".carousel1").owlCarousel({
        items: 1,
        loop:true,
        margin: 40
        // autoplay:true,
          // autoplayTimeout:4000
    });
    $(".carousel").owlCarousel({
        nav: true,
        navText: ["<img src='../img/next-btn.svg'>","<img src='../img/pre-btn.svg'>"],
        items: 4,
        loop: false,
        margin: 20,
        // autoplay:true,
        // autoplayTimeout:4000
        responsive: {
            0: {
                nav: false,
                items: 1,
                margin:30
            },
            480: {
                nav: false,
                items: 1
            },
            // breakpoint from 768 up
            766: {
                items: 2
            },
            1100: {
                items: 4
            }
        }
    });
    $(".carousel-reviews").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        nav: true,
        margin: 20,
        navText: ["<img src='../img/next-btn.svg'>", "<img src='../img/pre-btn.svg'>"],
        items: 4,
        loop: false,
        // autoplay:true,
        // autoplayTimeout:4000
        responsive: {
            0: {
                nav: false,
                items: 1,
                margin:30
            },
            480: {
                nav: false,
                items: 2
            },
            // breakpoint from 768 up
            766: {
                nav: false,
                items: 2
            },
            1100: {
                items: 4
            }
        }
    });

    $(".slider").owlCarousel({
        dots: false,
        items: 1,
        loop:true,

        // autoplay:true,
        // autoplayTimeout: 3000

    });

    $(".design-done-sliders").owlCarousel({
        dot: true,
        nav: true,
        navText: ["<img src='../img/next-btn.svg'>", "<img src='../img/pre-btn.svg'>"],
        items: 1,
        loop:true,
        margin: 20,
        // autoplay:true,
        // autoplayTimeout: 3000
        responsive: {
            0: {
                nav: false,
                dot: false
            },
            480: {
                nav: false,
                dot: false
            },
            // breakpoint from 768 up
            766: {
                dot: true,
                nav: false
            },
            1100: {
                dot: true,
                nav: true
            }
        }
    });

    function windowSize(){
        if ($(window).width() <= '495'){
            $(".catalog-list").addClass('owl-carousel');
            $(".catalog-list").addClass('owl-theme');
            $(".catalog-list").owlCarousel({
                nav: false,
                items: 1,
                loop: false,
                margin: 20,

            });
        } else {
            $(".catalog-list").removeClass('owl-carousel');
            $(".catalog-list").removeClass('owl-theme');
        };

        if ($(window).width() <= '795'){
            $(".p-modal-gallery").addClass('owl-carousel');
            $(".p-modal-gallery").addClass('owl-theme');
            $(".p-modal-gallery").owlCarousel({
                nav: false,
                items: 1,
                loop: false,
                margin: 20,
                responsive: {
                    0: {
                        nav: false,
                        items: 1,
                        margin:30
                    },
                    480: {
                        nav: false,
                        items: 1
                    },
                    768: {
                        nav: false,
                        items: 2
                    },
                    1100: {
                        items: 4
                    }
                }
            });
        } else {
            $(".p-modal-gallery").removeClass('owl-carousel');
            $(".p-modal-gallery").removeClass('owl-theme');
        };

        $('.p-modal-image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                image: {
                    verticalFit: false
                },
                gallery: {
                    enabled: true
                }
            });

    };

    windowSize();

    $( ".catalog-writem" ).on( "click", function() {
        $('#p-modal').modal();
    });


});
