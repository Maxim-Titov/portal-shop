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
            $(name_field).attr('placeholder', "Це поле має бути заповненим");
        } else {
            $(name_field).removeClass('error');
        }

        if (phone_field.val() === '') {
            event.preventDefault();

            phone_field.addClass('error');
            $(phone_field).attr('placeholder', "Це поле має бути заповненим");
        } else {
            if (!phonePattern.test(phone_field.val())) {
                event.preventDefault();
    
                phone_field.addClass('error');

                $(phone_field).val('');
                $(phone_field).attr('placeholder', "Номер телефону введений не правильно");
            } else {
                phone_field.removeClass('error');
            }
        }

        if (email_field.val() === '') {
            event.preventDefault();

            email_field.addClass('error');
            $(email_field).attr('placeholder', "Це поле має бути заповненим");
        } else {
            if (!emailPattern.test(email_field.val())) {
                event.preventDefault();
    
                email_field.addClass('error');

                $(email_field).val('');
                $(email_field).attr('placeholder', "Адреса еектронної пошти введена не правильно");
            } else {
                email_field.removeClass('error');
            }
        }

        if ($(name_field).is(':valid') && $(phone_field).is(':valid') && $(email_field).is(':valid')) {
            alert("Ваше повідомлення відправлено");
        }
    });
});