var name_field = $('input[name=name]');
var phone_field = $('input[name=phone]');
var email_field = $('input[name=email]');

function validate() {

    if ($(name_field).is(':empty')) {
        $(name_field).css("outline-color", "red");
        $(name_field).css("box-shadow", "inset 0 0 10px 3px red");
    }
    
    if ($(phone_field).is(':empty')) {
        $(phone_field).css("outline-color", "red");
        $(phone_field).css("box-shadow", "inset 0 0 10px 3px red");
    }
    
    if ($(email_field).is(':empty')) {
        $(email_field).css("outline-color", "red");
        $(email_field).css("box-shadow", "inset 0 0 10px 3px red");
    }

    if ($(name_field).is(':valid') && $(phone_field).is(':valid') && $(email_field).is(':valid')) {
        alert("Ваше повідомлення відправлено");
    }

}