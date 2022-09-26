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
        //navText: ["<img src='../img/next-btn.svg'>","<img src='../img/pre-btn.svg'>"],
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
       // navText: ["<img src='../img/next-btn.svg'>", "<img src='../img/pre-btn.svg'>"],
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
       // navText: ["<img src='../img/next-btn.svg'>", "<img src='../img/pre-btn.svg'>"],
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
        const catalogList = $(".catalog-list");
        if ($(window).width() <= '495'){
            catalogList.addClass('owl-carousel');
            catalogList.addClass('owl-theme');
            catalogList.owlCarousel({
                nav: false,
                items: 1,
                loop: false,
                margin: 20,

            });
        } else {
            catalogList.removeClass('owl-carousel');
            catalogList.removeClass('owl-theme');
        }

        const pModalGallery = $(".p-modal-gallery");
        if ($(window).width() <= '795'){
            pModalGallery.addClass('owl-carousel');
            pModalGallery.addClass('owl-theme');
            pModalGallery.owlCarousel({
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
            pModalGallery.removeClass('owl-carousel');
            pModalGallery.removeClass('owl-theme');
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
