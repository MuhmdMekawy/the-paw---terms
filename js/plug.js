$(document).ready(function(){
    $('.paw-cake .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        dotsData:true,
        dotsContainer: '.owl-offres-dots',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.paw-cake .tabs .top h3').click(function(){
        $(this).css({
            "color" : "var(--black-color)" ,
            "border-bottom" : "4px solid var(--black-color)"
        }).siblings().css({
            "color" : "#888888" ,
            "border-bottom" : "none"
        })
    });
    $('.paw-cake .tabs .top h3:last-child').click();
    $('.paw-cake .tabs .top .desc').click(function(){
        $('.paw-cake .tabs .bottom .des').show().siblings().hide()
    })
    $('.paw-cake .tabs .top .spec').click(function(){
        $('.paw-cake .tabs .bottom .sp').show().siblings().hide()
    })
    $('.paw-cake .tabs .top .rev').click(function(){
        $('.paw-cake .tabs .bottom .review').show().siblings().hide()
    })
    $('.paw-cake .tabs .third textarea').focus(function(){
        $(this).select()
    })
    new WOW().init()
})