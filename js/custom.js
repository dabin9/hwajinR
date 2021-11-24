$(function () {
    var windowScroll = $(window).scrollTop();

    if (windowScroll > 1500) {
        $('.top_btn').addClass('on');
    } else {
        $('.top_btn').removeClass('on');
    }

    $('header .gnb').hover(function () {
        $('header .sub_menu').addClass('on');
    }, function () {
        $('header .sub_menu').removeClass('on')
    })
    $('header .sub_menu').hover(function () {
        $('header .sub_menu').addClass('on');
    }, function () {
        $('header .sub_menu').removeClass('on')
    })


    $(window).bind('mousewheel', function (e) {
        windowScroll = $(window).scrollTop();

        if (e.originalEvent.wheelDelta >= 0) {
            // mouse up
            $('header').removeClass('off');
        } else {
            // mouse down
            $('header').addClass('off');
        }


        if (windowScroll > 1500) {
            $('.top_btn').addClass('on');
        } else {
            $('.top_btn').removeClass('on');
        }
    })

    $('.top_btn').click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $('.top_btn').removeClass('on');
    })


    var swiper = new Swiper(".main_slide", {
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".main_slide_swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".main_slide_swiper-button-next",

            prevEl: ".main_slide_swiper-button-prev",
        },
    });

    $('.main_vis .btn .play').click(function () {
        if ($(this).hasClass('start')) {
            $(this).removeClass('start');
            $(this).addClass('stop');
            swiper.autoplay.stop();
        } else {
            $(this).removeClass('stop');
            $(this).addClass('start');
            swiper.autoplay.start();
        }
    })

    var swiper = new Swiper(".recruit_slide", {
        centeredSlides: true,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    var swiper = new Swiper(".board_slide", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".board_swiper-button-next",
            prevEl: ".board_swiper-button-prev",
        },
        breakpoints: {
            270: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });

    $('.dep01').click(function () {
        h = $(this).siblings('.twin_sub').find('ul').height()
        if ($(this).siblings('.twin_sub').height() > 0) {
            $('.twin_sub').stop().animate({ height: 0 }, 500);
        } else {
            $('.twin_sub').stop().animate({ height: 0 }, 500);
            $(this).siblings('.twin_sub').stop().animate({ height: h }, 500);
        }
    })

    $('.twin_box').click(function () {
        if ($('.twin_inner').hasClass('on')) {
            $('.twin_inner').removeClass('on');
        } else {
            $('.twin_inner').addClass('on');
        }
    })

    $('.twin_box').click(function () {
        if ($('.sub_head .logo').hasClass('on')) {
            $('.sub_head .logo').removeClass('on');
        } else {
            $('.sub_head .logo').addClass('on');
        }
    })

    $('header .lang .first::after').click(function () {
        if ($('.lang').hasClass('on')) {
            $('.lang').removeClass('on');
        } else {
            $('.lang').addClass('on');
        }
    })
    $('header .lang').click(function () {
        if ($('.lang').hasClass('on')) {
            $('.lang').removeClass('on');
        } else {
            $('.lang').addClass('on');
        }
    })
    $('header .lang li').click(function () {
        if ($('.lang').hasClass('on')) {
            $('.lang').removeClass('on');
        } else {
            $('.lang').addClass('on');
        }
    })


    for (let i = 0; i < $('.with_tab li').length; i++) {
        $('.with_tab li').eq(i).click(function () {
            // alert('리')
            $('.with_tab li').removeClass('active');
            $('.tab_content').removeClass('show');
            $('.with_tab li').eq(i).addClass('active');
            $('.tab_content').eq(i).addClass('show');
        })
    }










































})


//function alal(abc) {
//    document.getElementById('alert').style.display = abc;
//}



