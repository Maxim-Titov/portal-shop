var name_field = $('input[name=name]');
var phone_field = $('input[name=phone]');
var email_field = $('input[name=email]');

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

function validate() {

    if ($(name_field).is(':valid') && $(phone_field).is(':valid') && $(email_field).is(':valid')) {
        alert("Ваше повідомлення відправлено");
    }

}