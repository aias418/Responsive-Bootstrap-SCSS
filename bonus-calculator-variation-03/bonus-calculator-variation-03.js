$(document).ready(function($) {
    var slider = $("#myRange");
    var output = $("#demo");
    var rangeOne = $("#rangeOne");
    var rangeTwo = $("#rangeTwo");
    var outputone = $("#casino-one");
    var outputtwo = $("#casino-two");
    var firstCasinoSel = $("#casion-1-percent");
    var secondCasinoSel = $("#casion-2-percent");
    var firstCasionPercent = parseInt(firstCasinoSel.attr("value")) / 100 + 1;
    var secondCasionPercent = parseInt(secondCasinoSel.attr("value")) / 100 + 1;
    var initialValue = 10;

    output.html(slider.val());
    rangeOne.html(slider.val());
    rangeTwo.html(slider.val());
    outputone.html(initialValue * 1.1);
    outputtwo.html(initialValue * 1.15);

    slider.on( "input", function() {
        output.html(parseInt($(this).val(), 10));
        rangeOne.html(parseInt($(this).val(), 10));
        rangeTwo.html(parseInt($(this).val(), 10));
        if (firstCasionPercent) {
            outputone.html(parseInt($(this).val() * firstCasionPercent, 10));
        } else {
            outputone.html(parseInt($(this).val(), 10));
        }
        if (secondCasionPercent) {
            outputtwo.html(parseInt($(this).val() * secondCasionPercent, 10));
        } else {
            outputtwo.html(parseInt($(this).val(), 10));
        }
    });
})