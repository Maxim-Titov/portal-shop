$(document).ready(function() {
    $('#feedback-form').on('submit', function(event) {
        var name_field = $('input[name=name]');
        var phone_field = $('input[name=phone]');
        var email_field = $('input[name=email]');

        var phonePattern = /^\+?3?8?(0\d{9})$/;
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if ($(name_field).val() === '') {
            event.preventDefault();

            $(name_field).addClass('error');
        } else {
            $(name_field).removeClass('error');
        }

        if (phone_field.val() === '') {
            event.preventDefault();

            phone_field.addClass('error');
        } else {
            if (!phonePattern.test(phone_field.val())) {
                event.preventDefault();
    
                phone_field.addClass('error');
            } else {
                phone_field.removeClass('error');
            }
        }

        if (email_field.val() === '') {
            event.preventDefault();

            email_field.addClass('error');
        } else {
            if (!emailPattern.test(email_field.val())) {
                event.preventDefault();
    
                email_field.addClass('error');
            } else {
                email_field.removeClass('error');
            }
        }

        if ($(name_field).is(':valid') && $(phone_field).is(':valid') && $(email_field).is(':valid')) {
            alert("Ваше повідомлення відправлено");
        }
    });
});