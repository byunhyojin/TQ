$(function(){
    AOS.init();
    intro=gsap.timeline({
        onComplete:function(){
        $('body').removeClass('hidden')
    }
    })
    intro.to('.loading .t-logo',{opacity:1})
    intro.to('.loading .t-logo',{opacity:0,})
    intro.to('.loading',{height:0});
    $('.nav-item').hover(function(){
       
        $(this).find('.about-sub').stop().slideDown()
    },function(){
        $(this).find('.about-sub').stop().slideUp()
    });
    
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        if (curr > 0) {
            $('.hd-inner').addClass('on')
        } else {
            $('.hd-inner').removeClass('on')
            }
        })
    const headTxt = new SplitType('.headline .wrap', { types:'words, chars',});
    gsap.set('.headline .char',{
        yPercent:100
    })
    gsap.to('.headline .wrap:nth-child(1) .char',{
        delay:1,
        yPercent:0,
        stagger:{
            amount:0.8,
            from:"start"
        },
    })
    gsap.to('.headline .wrap:nth-child(2) .char',{
        delay:1.5,
        yPercent:0,
        stagger:{
            from:"start",
            amount:0.6
        }
    })
    gsap.to('.headline .wrap:nth-child(3) .char',{ 
        delay:2,
        yPercent:0,
        stagger:{
            from:"start",
            amount:0.8,
        },})
    const SolutionSwiper = new Swiper('.solution-swiper', {
        slidesPerView: '2',
        navigation: {
            nextEl: ".btn-box .solution-next",
            prevEl: ".btn-box .solution-prev",
        },
        breakpoints: {
            980: {
                  slidesPerView: 3,  
                 
                },
              },
    });
    const ProductSwiper = new Swiper('.product-swiper', {
        slidesPerView:'2',
        navigation: {
            nextEl:".btn-box .product-next",
            prevEl:".btn-box .product-prev"
        },
        breakpoints: {
            980: {
                  slidesPerView: 3,  
                
                },
              },
    });
    const VentureSwiper = new Swiper('.venture-swiper', {
        slidesPerView: '2',
        navigation: {
            nextEl: ".btn-box .venture-next",
            prevEl: ".btn-box .venture-prev",
        },
        breakpoints: {
            980: {
                  slidesPerView: 3,  
                 
                },
              },
        
    });
    $('.nav-section a').click(function(e){
        e.preventDefault();
        tab=$(this).attr('href');
        $(this).addClass('on').siblings().removeClass('on')
        $(tab).addClass('on').siblings().removeClass('on')
    })
    $('.hide-bg').each(function(index,element){
    gsap.to(element,{
        scrollTrigger:{
            trigger:element,
            start:"0% 80%",
            end:"",
        },
        height:0
    })
    })

    $('.search-icon').click(function (e) {
        e.preventDefault();
        $('.search').addClass('on');
    })

    $('.logo-x').click(function (e) {
        e.preventDefault();
        $('.search').removeClass('on');
    })
    
    $('.menu').click(function(e) {
        e.preventDefault();
        $('.menu-box').addClass('on');
        $('.bg').addClass('on')});

    $('.menu-x').click(function(e) {
        e.preventDefault();
        $('.menu-box').removeClass('on');
        $('.bg').removeClass('on');})
    const MySwiper = new Swiper('.my-swiper', {
        slidesPerView: '2',
        spaceBetween:30,
        navigation: {
            nextEl: ".btn.button-next",
            prevEl: ".btn.button-prev",
        },
        breakpoints: {
        1200: {
              slidesPerView: 3,  //브라우저가 1200보다 클 때
              spaceBetween: 50,
            },
          },
    
        
    });
 
    const SustainSwiper = new Swiper('.sustain-swiper', {
        navigation: {
        nextEl: ".btn .btn-prev",
        prevEl: ".btn .btn-next",
    },
    });
    const SustaintxtSwiper = new Swiper('.sustaintxt-swiper', {
    touchRatio:0
    });
    SustainSwiper.controller.control = SustaintxtSwiper
})