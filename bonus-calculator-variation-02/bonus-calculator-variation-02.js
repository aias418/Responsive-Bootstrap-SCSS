$(document).ready(function($) {
    var slider = $("#myRange");
    var outputone = $(".calculator-deposit-number");
    var outputtwo = $(".calculator-btn-number");
    var initialValue = 10;
    var calcNumber = $(".calculator-number-input");

    var currentType = 'deposit';

    $('.calculator-radio input').click(function() {
        var id = $(this).attr('id');
        if (id === 'calculator-deposit') {
            outputone.html('$' + parseInt(slider.val(), 10));
            outputtwo.html('$' + parseInt(slider.val() * 2, 10));
            currentType = 'deposit';
        } else {
            currentType = 'play-with';
            outputone.html('$' + parseInt(slider.val() / 2, 10));
            outputtwo.html('$' + parseInt(slider.val(), 10));
        }
    });

    calcNumber.val('$' + slider.val());
    outputone.html('$' + initialValue);
    outputtwo.html('$' + initialValue * 2);

    slider.on( "input", function() {
        calcNumber.val('$' + parseInt($(this).val(), 10));
        if (currentType === 'deposit') {
            outputone.html('$' + parseInt($(this).val(), 10));
            outputtwo.html('$' +parseInt($(this).val() * 2, 10));
        } else {
            outputone.html('$' + parseInt($(this).val() / 2, 10));
            outputtwo.html('$' +parseInt($(this).val(), 10));
        }
    });
})