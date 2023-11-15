$(document).ready(function () {

    // header > header-up language
    $('.language').click(function () {
        $('.language .de2').toggle()
        $('.language>a>span').toggleClass('active')
    })

    // 메뉴
    $('.header-nav>li').click(function (e) {
            e.preventDefault()

            $('.header-nav>li').find('a').removeClass('border')
            $(this).find('a').addClass('border')
            $('.mask').addClass('mask-show')


            let idx = $(this).index()
            $('.nav-content > li').removeClass('active')
            $('.nav-content >li').eq(idx).addClass('active')
        }
        // 다시 클릭하면 닫히기...ㅠㅠ?
    )
    $('.header-nav>li').dblclick(function (e) {
        $('.mask').removeClass('mask-show')
        e.preventDefault()
        let idx = $(this).index()

        $('.nav-content > li').removeClass('active')
        $('.header-nav>li').find('a').removeClass('border')
    })
    // 2차 댑스
    $('.nav-content-de1 li').click(function (e) {
        e.preventDefault()
        $(this).find('.nav-content-de2 li').toggleClass('show')
        $('.After').addZ('.nav-content-de2 li').toggleClass('show')
    })

    // 돋보기
    $('.header-find').click(function () {
        $('.header-search').addClass('header-search-active')
        $('.mask').addClass('mask-show')
    })
    $('.xbtn').click(function () {
        $('.header-search').removeClass('header-search-active')
        $('.mask').removeClass('mask-show')
    })

    // 헴버거
    $('.ham').click(function () {
        $('.hamburger').addClass('hamburger-active')
    })
    $('.ham-x').click(function () {
        $('.hamburger').removeClass('hamburger-active')
    })

    //마스크
    $('.mask').click(function () {
        $('.header-search').removeClass('header-search-active')
        $('.mask').removeClass('mask-show')
        $('.nav-content >li').hide()
        $('.header-nav>li').find('a').removeClass('border')
    })

    // 스크롤
    $(window).scroll(function () {
        let st = $(this).scrollTop()
        if (st > 32) {
            $('.header-down').addClass('header-down-active')
            $('.header-down inner').addClass('inner-active')
            $('.nav-content').addClass('nav-content-scroll')
            $('.header-nav li a').addClass('scroll')
        } else { // 아니면
            $('.header-down').removeClass('header-down-active')
            $('.header-down inner').removeClass('inner-active')
            $('.nav-content').removeClass('nav-content-scroll')
            $('.header-nav li a').removeClass('scroll')
        }
    })

    // banner-up >find chart
    $('.findchart').click(function () {
        $('.findchart ul').toggle()
    })

    $(".chart").bxSlider({
        auto: true,
        pager: false,
        speed: 300,
        controls: false,
        slideWidth: 130,
        maxSlides: 1,
        infiniteLoop: true,
        autoContols: true,
        touchEnabled: (navigator.maxTouchPoints > 0),
    });
    // eightbox > one-stop
    $(".one-stop-banner").bxSlider({
        maxSlides: 7,
        minSlided: 3,
        infiniteLoop: false,
        slideMargin: 20,
        slideWidth: 87,
    });

    // eight box news
    $('.news-nav li').click(function (e) {
        e.preventDefault()
        $('.news-nav li').find('a').removeClass('active')
        $(this).find('a').addClass('active')

        $('.news-item').hide()

        let idx = $(this).index()
        $('.news-item').eq(idx).show()
    })
    $('.news-nav li').eq(0).trigger('click')

    // service
    $(".service-banner").bxSlider({
        maxSlides: 8,
        minSlided: 6,
        slideWidth: 137,
        slideMargin: 22,
        infiniteLoop: false,
    });
    // banner-down
    $(".down-slider").bxSlider({
        maxSlides: 5,
        minSlided: 1,
        pager: false,
        slideWidth: 200,
        slideMargin: 12,
        infiniteLoop: false,
        moveslides: 5,
    });
})