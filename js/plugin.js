$(document).ready(function(){
    $('.offer .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4.7
            }
        }
    });
    $('.buy .icon .bi-heart').click(function(){
        $(this).hide()
        $(this).parent().find('.bi-heart-fill').show()
    })
    $('.buy .icon .bi-heart-fill').click(function(){
        $(this).hide()
        $(this).parent().find('.bi-heart').show()
    })
    new WOW().init();
})