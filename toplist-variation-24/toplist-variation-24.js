$(document).ready(function($) {
    var modalToggler = $('#popupModalToggler');
    var compareSection = $('#compareWidget');

    toggleModal();
    handlePopupClose();
    handleRemoveAll();
    handleItemsToCompareLine();
    handleRemoveSingle();

    function handleRemoveSingle() {
        $('.casino-compared-delete').click(function() {
            var dataId = $(this).attr('data-id');
            var delEl = $('.compare-widget-selection .compare-widget-selection-item[data-id="' + dataId + '"]');
            var delElPopup = $('.vertical-toplist-compare .vertical-toplist-compare-columns .vertical-toplist-compare-col[id="' + dataId + '"]');
            var boxResult = delEl.find('.casino-compared-result');

            if (delElPopup.attr('id') === dataId) {
                delElPopup.remove();
            }

            delEl.removeClass('js-compare');
            delEl.removeAttr('data-id');

            if (boxResult.length) {
                boxResult.empty();
            }

            var selectedItemsAmount = $('.compare-widget-selection .compare-widget-selection-item.js-compare').length;

            if (selectedItemsAmount) {
                compareSection.addClass('js-visible');
            } else {
                compareSection.removeClass('js-visible');
            }

            if (selectedItemsAmount >= 2) {
                modalToggler.addClass('js-enabled');
            } else {
                modalToggler.removeClass('js-enabled');
            }
            $('#' + dataId).find('.cool-checkbox').removeClass('js-checked');
        });
    }

    function toggleModal() {
        modalToggler.click(function() {
            if ($(this).hasClass('js-enabled')) {
                $('#modalPopup').addClass('opened');
                $('body').addClass('modal-opened');
            }
        });
    }

    function handlePopupClose() {
        $('#popupModalClose').click(function() {
            $('#modalPopup').removeClass('opened');
            $('body').removeClass('modal-opened');
        });
    }

    function handleRemoveAll() {
        $('.compare-widget-selection-reset').click(function() {
            var allEls = $('.compare-widget-selection .compare-widget-selection-item');
            $('.cool-checkbox-input').siblings('.cool-checkbox').removeClass('js-checked');
            allEls.removeClass('js-compare');
            allEls.removeAttr('data-id');
            allEls.find('.casino-compared-result').empty();
            $('#toplist .vertical-toplist-compare.vertical-toplist-compare-columns [id*="top-list-0"]').remove();
            modalToggler.removeClass('js-enabled');
            compareSection.removeClass('js-visible');
        });
        handleRemoveSingle();
    }

    function handleItemsToCompareLine() {
        $('.cool-checkbox-input').click(function() {
            var selectedLegth = $('.compare-widget-selection .compare-widget-selection-item.js-compare').length;
            var isSiblingChecked = $(this).siblings('.cool-checkbox').hasClass('js-checked');
            console.log(isSiblingChecked);

            if ((selectedLegth < 3) || (selectedLegth >= 3) && isSiblingChecked) {
                $(this).siblings('.cool-checkbox').toggleClass('js-checked');
                var isChecked = $(this).siblings('.cool-checkbox').hasClass('js-checked');
                var firstEmptyBox = $('.compare-widget-selection .compare-widget-selection-item:not(.js-compare)').eq(0);
                var parentEl = $(this).closest('.vertical-toplist-column');

                if (!parentEl.length) {
                    parentEl = $(this).closest('.vertical-toplist-row');
                }

                var casinoLogo = parentEl.find('.vertical-toplist-logo img:not(.vertical-toplist-winner-logo)');
                var parentElId = parentEl.attr('id');
                /* Adding casion column to popup start */
                var casinoCountry = parentEl.find('.vertical-toplist-flag-wrapper i');
                var casinoCountryFlag = casinoCountry.attr('class').replace('icon-flag-', '');
                var casionName = parentEl.find('.vertical-toplist-cta-review').text();
                var casinoLink = parentEl.attr('href');
                var casinoBonusValue = parentEl.find('.vertical-toplist-bonus-value').text().replace('C', '');
                var casinoPayoutValue = parentEl.find('.payout-value').text();
                var casinoPayoutSpeed = parentEl.find('.payout-speed').text();
                var casinoMaxJackpot = parentEl.attr('maxJackpot');
                var casinoGamesNumber = parentEl.find('.casinoInfo').attr('gamesNumber');
                var casinoGameInfo = parentEl.find('.singleGame');
                var casinoGamesMultiple = '';

                casinoGameInfo.each(function() {
                    casinoGamesMultiple += '<div class="vertical-toplist-compare-icon-wrapper">'
                        + '<img src="' + $(this).attr('gameIcon') + '" alt="Game" />'
                        + '<div class="vertical-toplist-compare-games-label">' + $(this).attr('gameName') + '</div>'
                    + '</div>'
                });

                var isFreeGames = parentEl.find('.casinoInfo').attr('freeGames') === 'true';
                var casinoGameDevices = parentEl.find('.gameDevices');
                var casinoDevicesMultiple = '';
                casinoGameDevices.each(function() {
                    casinoDevicesMultiple += '<div class="vertical-toplist-compare-compabitility-icon-wrapper">'
                        + '<img src="' + $(this).attr('deviceIcon') + '" alt="Game device" />'
                        + '<div class="vertical-toplist-compare-games-label-devices">' + $(this).attr('deviceName') + '</div>'
                    + '</div>'
                });

                var casinoGameBank = parentEl.find('.gameBank');
                var casinoBanksMultiple = '';
                casinoGameBank.each(function() {
                    casinoBanksMultiple += '<img src="' + $(this).attr('bankIcon') + '" alt="Game bank" />'
                });

                var casinoGameCountry = parentEl.find('.gameCountry');
                var casinoCountriesMultiple = '';
                casinoGameCountry.each(function() {
                    casinoCountriesMultiple += '<div class="vertical-toplist-compare-language-icon-wrapper">'
                        + '<img src="' + $(this).attr('countryIcon') + '" alt="' + $(this).attr('countryName') + '" />'
                    + '</div>'
                });

                var isLiveChat = parentEl.find('.casinoInfo').attr('liveChat') === 'true';
                var casinoSupportEmail = parentEl.find('.casinoInfo').attr('supportEmail');
                var casinoSupportPhone = parentEl.find('.casinoInfo').attr('phoneNumber');
                var casinoLicenseName = parentEl.find('.casinoInfo').attr('licenseName');
                var casinoOperatorName = parentEl.find('.casinoInfo').attr('operatorName');

                /* Adding casion column to popup end */
                

                if (isChecked) {
                    firstEmptyBox.attr('data-id', parentElId);
                    firstEmptyBox.addClass('js-compare');
                    var boxResult = firstEmptyBox.find('.casino-compared-result');

                    if (boxResult.length) {
                        boxResult.append('<button class="casino-compared-delete" href="#" data-id="'+ parentElId +'"></button><img class="casino-compared-image js-compare-logo" src="' + casinoLogo.attr('src') + '" alt="Image">');
                        /* Adding casion column to popup start */
                        $('#toplist .vertical-toplist-compare.vertical-toplist-compare-columns').append('<div class="vertical-toplist-compare-col vertical-toplist-compare-col-' + (selectedLegth + 1) + '" id="' + parentElId + '">'
                            + '<div class="vertical-toplist-compare-top-wrapper">'
                                + '<div class="vertical-toplist-compare-logo-wrapper">'
                                    + '<div class="vertical-toplist-compare-logo">'
                                        + '<img src="' + casinoLogo.attr('src') + '" alt="Casino image">'
                                    + '</div>'
                                    + '<div class="vertical-toplist-compare-flag">'
                                        + '<img src="./img/' + casinoCountryFlag + '.svg" alt="Flag" class="flag-icon" />'
                                        + '<img src="./img/tick-white.svg" alt="Checkmark" class="check-icon" />'
                                    +  '</div>'
                                +  '</div>'
                                + '<div class="vertical-toplist-compare-top-wrapper-rating">'
                                    + '<span class="vertical-toplist-compare-top-wrapper-label">Rating:</span>'
                                    + '<div class="popup-ranking-stars-container">'
                                        + '<img src="./img/rating.png" alt="Rating" class="rating-stars" />'
                                    + '</div>'
                                + '</div>'
                                + '<a href="' + casinoLink + '" class="vertical-toplist-compare-link-review">' + casionName + '</a>'
                            + '</div>'
                            + '<div class="vertical-toplist-compare-bonus vertical-toplist-compare-item">'
                                + '<div class="vertical-toplist-compare-mobile-heading">Bonus</div>'
                                    +  '<p class="vertical-toplist-compare-bonus-label">'
                                        +  '<span class="vertical-toplist-compare-bonus-value">' + casinoBonusValue + '</span>'
                                    + '</p>'
                                        + '<span class="vertical-toplist-compare-bonus-text">Bonus</span>'
                                +  '</div>'
                            + '<div class="vertical-toplist-compare-payout vertical-toplist-compare-item">'
                                +  '<div class="vertical-toplist-compare-mobile-heading">Payout %</div>'
                                        + '<p class="vertical-toplist-compare-payout-label">' 
                                            + '<span class="vertical-toplist-compare-payout-value">' + casinoPayoutValue + '</span>'
                                        + '</p>'
                                    + '</div>'
                            + '<div class="vertical-toplist-compare-payout-speed vertical-toplist-compare-item">'
                                +  '<div class="vertical-toplist-compare-mobile-heading">Payout Speed</div>'
                                    + '<p class="vertical-toplist-compare-payout-speed-label">'
                                        + '<span class="vertical-toplist-compare-payout-speed__value">' + casinoPayoutSpeed + '</span>'
                                    + '</p>'
                                + '</div>'
                            + '<div class="vertical-toplist-compare-payout-speed vertical-toplist-compare-item">'
                                + '<div class="vertical-toplist-compare-mobile-heading">Max Jackpot</div>'
                                    + '<p class="vertical-toplist-compare-payout-speed-label">'
                                        + '<span class="vertical-toplist-compare-payout-speed__value">' + casinoMaxJackpot + '<span> Million</span></span>'
                                    + '</p>'
                                + '</div>'
                            + '<div class="vertical-toplist-compare-games vertical-toplist-compare-item">'
                                + '<div class="vertical-toplist-compare-mobile-heading">No. of Games</div>'
                                + '<div class="vertical-toplist-compare-games-number">' + casinoGamesNumber + '</div>'
                                + '<div class="vertical-toplist-compare-games-label">including...</div>'
                                + '<div class="vertical-toplist-compare-games-wrapper">'
                                    + casinoGamesMultiple
                                + '</div>'
                                + '</div>'
                            + '<div class="vertical-toplist-compare-free-games vertical-toplist-compare-item">'
                                + '<div class="vertical-toplist-compare-mobile-heading">Free Games</div>'
                                + (isFreeGames ? '<img src="./img/tick.svg" alt="Check" />' : '<img src="./img/tick.svg" alt="Check" style="visibility: hidden" />')
                            + '</div>'
                            + '<div class="vertical-toplist-compare-compabitility vertical-toplist-compare-item">'
                                + '<div class="vertical-toplist-compare-mobile-heading">Free Games</div>'
                                + casinoDevicesMultiple
                            + '</div>'
                            + '<div class="vertical-toplist-compare-deposit vertical-toplist-compare-item 1">'
                                + '<div class="vertical-toplist-compare-mobile-heading">Banking Options</div>'
                                + '<div class="vertical-toplist-compare-deposit-icon-wrapper">'
                                    + casinoBanksMultiple
                                + '</div>'
                            + '</div>'
                            + '<div class="vertical-toplist-compare-language vertical-toplist-compare-item 1">'
                                + '<div class="vertical-toplist-compare-mobile-heading">Languages</div>'
                                + casinoCountriesMultiple
                            + '</div>'
                            + '<div class="vertical-toplist-compare-support vertical-toplist-compare-item">'
                                + '<div class="vertical-toplist-compare-mobile-heading">Support</div>'
                                + '<span> Live Chat: <strong>' + (isLiveChat ? "Yes" : "No") + '</strong>' + (isLiveChat ? '<img src="./img/tick.svg" alt="Tick" />' : '') + '</span>'
                                + '<div class="vertical-toplist-compare-support-info">' + casinoSupportEmail + '</div>'
                                + '<div class="vertical-toplist-compare-support-info">' + casinoSupportPhone + '</div>'
                            + '</div>'
                            + '<div class="vertical-toplist-compare-operator vertical-toplist-compare-item">'
                                + '<div class="vertical-toplist-compare-mobile-heading">Operator Info</div>'
                                + '<div class="vertical-toplist-compare-operator-wrapper">'
                                    + '<div class="vertical-toplist-compare-operator-label">OWNER / OPERATOR:</div>'
                                    + casinoLicenseName
                                + '</div>'
                                + '<div class="vertical-toplist-compare-operator-wrapper">'
                                    + '<div class="vertical-toplist-compare-operator-label">Licenced By:</div>'
                                    + casinoOperatorName
                                + '</div>'
                            + '</div>'
                            + '</div>');
                        /* Adding casion column to popup end */
                    }
                    
                } else {
                    var delEl = $('.compare-widget-selection .compare-widget-selection-item[data-id="' + parentElId + '"]');
                    var delElPopup = $('.vertical-toplist-compare .vertical-toplist-compare-columns .vertical-toplist-compare-col[id="' + parentElId + '"]');
                    var boxResult = delEl.find('.casino-compared-result');

                    delEl.removeClass('js-compare');
                    delEl.removeAttr('data-id');

                    if (delElPopup.attr('id') === parentElId) {
                        delElPopup.remove();
                    }

                    if (boxResult.length) {
                        boxResult.empty();
                    }
                }
                var selectedItemsAmount = $('.compare-widget-selection .compare-widget-selection-item.js-compare').length;

                if (selectedItemsAmount) {
                    compareSection.addClass('js-visible');
                } else {
                    compareSection.removeClass('js-visible');
                }

                if (selectedItemsAmount >= 2) {
                    modalToggler.addClass('js-enabled');
                } else {
                    modalToggler.removeClass('js-enabled');
                }
                handleRemoveSingle();
            }
        });
    }
});