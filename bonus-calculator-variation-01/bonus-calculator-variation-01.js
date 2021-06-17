$(document).ready(function($) {
    calculateValues();
    handleTooltip();

    function calculateValues() {
        $('.rounded-button-solid').click(function() {
            var value = parseInt($('.bonus-calculator-input-number').val());

            if (value <= 150) {
                var calcValBank = value * 2;

                $('.bonus-calculator-body-partner-item-result1').each(function() {
                    $(this).text('$' + value);
                });
                $('.bonus-calculator-body-partner-item-result2').each(function() {
                    $(this).text('$' + calcValBank);
                });
            } else {
                var calcVal = Math.round(value * 0.875);
                var calcValBank = value + calcVal;

                $('.bonus-calculator-body-partner-item-result1').each(function() {
                    $(this).text('$' + calcVal);
                });
                $('.bonus-calculator-body-partner-item-result2').each(function() {
                    $(this).text('$' + calcValBank);
                });
            }
        });
    }

    function handleTooltip() {
        $('.bonus-calculator-tooltip').mouseover(function() {
            $(this).find('.bonus-calculator-tooltip-content').addClass('visible');
        });
        $('.bonus-calculator-tooltip').mouseleave(function() {
            $(this).find('.bonus-calculator-tooltip-content').removeClass('visible');
        });
    }
})