$(document).ready(function() {
    $('#payment-form').on('submit', function(event) {
        let card_num = $('input[name=card-buy]');
        let cvv = $('input[name=cvv-buy]');
        let pin = $('input[name=pin-buy]');
        let owner_name = $('input[name=name-buy]');
        let owner_surname = $('input[name=surname-buy]');
        let city = $('input[name=city-buy]');
        let street = $('input[name=street-buy]');
        let house_num = $('input[name=num-buy]');

        if ($(card_num).val() === '') {
            event.preventDefault();

            $(card_num).addClass('error');
        } else {
            $(card_num).removeClass('error');
        }

        if ($(cvv).val() === '') {
            event.preventDefault();

            $(cvv).addClass('error');
        } else {
            $(cvv).removeClass('error');
        }

        if ($(pin).val() === '') {
            event.preventDefault();

            $(pin).addClass('error');
        } else {
            $(pin).removeClass('error');
        }

        if ($(owner_name).val() === '') {
            event.preventDefault();

            $(owner_name).addClass('error');
        } else {
            $(owner_name).removeClass('error');
        }

        if ($(owner_surname).val() === '') {
            event.preventDefault();

            $(owner_surname).addClass('error');
        } else {
            $(owner_surname).removeClass('error');
        }

        if ($(city).val() === '') {
            event.preventDefault();

            $(city).addClass('error');
        } else {
            $(city).removeClass('error');
        }

        if ($(street).val() === '') {
            event.preventDefault();

            $(street).addClass('error');
        } else {
            $(street).removeClass('error');
        }

        if ($(house_num).val() === '') {
            event.preventDefault();

            $(house_num).addClass('error');
        } else {
            $(house_num).removeClass('error');
        }

        if ($(card_num).is(':valid') && $(cvv).is(':valid') && $(pin).is(':valid') && $(owner_name).is(':valid') && $(owner_surname).is(':valid') && $(city).is(':valid') && $(street).is(':valid') && $(house_num).is(':valid')) {
            alert("Покупку оплачено");
        }
    });
});