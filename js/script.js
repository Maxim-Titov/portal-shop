$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        mobileFirst: true,
        arrows: true,
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow')
    });
});