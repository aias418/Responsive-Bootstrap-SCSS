$(document).ready(function($) {
    var modalToggler = $('#popupModalToggler');
    var compareSection = $('#compareWidget');

    toggleModal();
    handlePopupClose();
    handleRemoveAll();
    handleItemsToCompareLine();
    handleRemoveSingle();

    var casinos = [];
    var allCookies = $.cookie();

    for (const [key, value] of Object.entries(allCookies)) {
      var isCasinoCookie = key.includes('top-list-');
      if (isCasinoCookie) {
        addDataFromCookie(key, value);
      }
    }

    function addDataFromCookie(key, value) {
        var data = $.parseJSON(value);
        var firstEmptyBox = $('.compare-widget-selection .compare-widget-selection-item:not(.js-compare)').eq(0);
        var selectedLegth = $('.compare-widget-selection .compare-widget-selection-item.js-compare').length;
        var casinoObject = {};

        var casinoLogo = data.casinoLogo;
        var parentElId = data.parentElId;
        var casinoCountry = data.casinoCountry;
        var casinoCountryFlag = data.casinoCountryFlag;
        var casionName = data.casionName;
        var casinoLink = data.casinoLink;
        var casinoBonusValue = data.casinoBonusValue;
        var casinoPayoutValue = data.casinoPayoutValue;
        var casinoPayoutSpeed = data.casinoPayoutSpeed;
        var casinoMaxJackpot = data.casinoMaxJackpot;
        var casinoGamesNumber = data.casinoGamesNumber;
        var casinoGameInfo = data.casinoGameInfo;
        var casinoGamesMultiple = '';

        casinoGameInfo.forEach(function (arrayItem) {
            casinoGamesMultiple += '<div class="vertical-toplist-compare-icon-wrapper">'
                + '<img src="' + arrayItem.gameIcon + '" alt="Game" />'
                + '<div class="vertical-toplist-compare-games-label">' + arrayItem.gameName + '</div>'
            + '</div>';
        });

        var isFreeGames = data.isFreeGames;

        var casinoGameDevices = data.casinoGameDevices;
        var casinoDevicesMultiple = '';

        casinoGameDevices.forEach(function (arrayItem) {
            casinoDevicesMultiple += '<div class="vertical-toplist-compare-compabitility-icon-wrapper">'
                + '<img src="' + arrayItem.deviceIcon + '" alt="Game device" />'
                + '<div class="vertical-toplist-compare-games-label-devices">' + arrayItem.deviceName + '</div>'
            + '</div>';
        });

        var casinoGameBank = data.casinoGameBank;
        var casinoBanksMultiple = '';
        casinoGameBank.forEach(function (arrayItem) {
            casinoBanksMultiple += '<img src="' + arrayItem.bankIcon + '" alt="Game bank" />'
        });

        var casinoGameCountry = data.casinoGameCountry;
        var casinoCountriesMultiple = '';

        casinoGameCountry.forEach(function (arrayItem) {
            casinoCountriesMultiple += '<div class="vertical-toplist-compare-language-icon-wrapper">'
                + '<img src="' + arrayItem.countryIcon + '" alt="' + arrayItem.countryName + '" />'
            + '</div>';
        });

        var isLiveChat = data.isLiveChat;
        var casinoSupportEmail = data.casinoSupportEmail;
        var casinoSupportPhone = data.casinoSupportPhone;
        var casinoLicenseName = data.casinoLicenseName;
        var casinoOperatorName = data.casinoOperatorName;

        /* Filling cookie object start */
        casinoObject["parentElId"] = parentElId;
        casinoObject["casinoLogo"] = casinoLogo;
        casinoObject["casinoCountry"] = casinoCountry;
        casinoObject["casinoCountryFlag"] = casinoCountryFlag;
        casinoObject["casionName"] = casionName;
        casinoObject["casinoLink"] = casinoLink;
        casinoObject["casinoBonusValue"] = casinoBonusValue;
        casinoObject["casinoPayoutValue"] = casinoPayoutValue;
        casinoObject["casinoPayoutSpeed"] = casinoPayoutSpeed;
        casinoObject["casinoMaxJackpot"] = casinoMaxJackpot;
        casinoObject["casinoGamesNumber"] = casinoGamesNumber;
        casinoObject["casinoGameInfo"] = casinoGameInfo;
        casinoObject["isFreeGames"] = isFreeGames;
        casinoObject["casinoGameDevices"] = casinoGameDevices;
        casinoObject["casinoGameBank"] = casinoGameBank;
        casinoObject["casinoGameCountry"] = casinoCountriesMultiple;
        casinoObject["isLiveChat"] = isLiveChat;
        casinoObject["casinoSupportEmail"] = casinoSupportEmail;
        casinoObject["casinoSupportPhone"] = casinoSupportPhone;
        casinoObject["casinoLicenseName"] = casinoLicenseName;
        casinoObject["casinoOperatorName"] = casinoOperatorName;
        /* Filling cookie object end */

        firstEmptyBox.attr('data-id', parentElId);
        firstEmptyBox.addClass('js-compare');
        var boxResult = firstEmptyBox.find('.casino-compared-result');

        $('#' + parentElId).find('.info .btn-primary').addClass('js-checked');
        $('#' + parentElId).find('.info .btn-primary').text('Remove');

        if (boxResult.length) {
            boxResult.append('<button class="casino-compared-delete" href="#" data-id="'+ parentElId +'"></button><img class="casino-compared-image js-compare-logo" src="' + casinoLogo + '" alt="Image">');
            /* Adding casion column to popup start */
            $('#toplist .vertical-toplist-compare.vertical-toplist-compare-columns').append('<div class="vertical-toplist-compare-col vertical-toplist-compare-col-' + (selectedLegth + 1) + '" id="' + parentElId + '">'
                + '<div class="vertical-toplist-compare-top-wrapper">'
                    + '<div class="vertical-toplist-compare-logo-wrapper">'
                        + '<div class="vertical-toplist-compare-logo">'
                            + '<img src="' + casinoLogo + '" alt="Casino image">'
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
        var cookieStr = JSON.stringify(casinoObject);
        if (!$.cookie(casinoObject.parentElId)) {
            $.cookie(casinoObject.parentElId, cookieStr); //storing it in a cookie
        }
        casinos.push(casinoObject);

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
    }

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
            $('#' + dataId).find('.info .btn-primary').removeClass('js-checked');
            $('#' + dataId).find('.info .btn-primary').text('Compare');
            $.removeCookie(dataId);
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
            $('.info .btn-primary').removeClass('js-checked');
            $('.info .btn-primary').text('Compare');
            allEls.removeClass('js-compare');
            allEls.removeAttr('data-id');
            allEls.find('.casino-compared-result').empty();
            $('#toplist .vertical-toplist-compare.vertical-toplist-compare-columns [id*="top-list-0"]').remove();
            modalToggler.removeClass('js-enabled');
            compareSection.removeClass('js-visible');

            casinos.forEach(function(item) {
                $.removeCookie(item.parentElId);
            });
            for (const [key, value] of Object.entries(allCookies)) {
              $.removeCookie(key);
            }
        });
        handleRemoveSingle();
    }

    function handleItemsToCompareLine() {
        $('.info .btn-primary').click(function() {
            var selectedLegth = $('.compare-widget-selection .compare-widget-selection-item.js-compare').length;
            var isSiblingChecked = $(this).hasClass('js-checked');
            var casinoObject = {};

            if ((selectedLegth < 3) || (selectedLegth >= 3) && isSiblingChecked) {
                $(this).toggleClass('js-checked');

                if($(this).text() === 'Compare') {
                    $(this).text('Remove');
                } else {
                    $(this).text('Compare');
                }
                var isChecked = $(this).hasClass('js-checked');
                var firstEmptyBox = $('.compare-widget-selection .compare-widget-selection-item:not(.js-compare)').eq(0);
                var parentEl = $(this).closest('.list-item');

                var casinoLogo = parentEl.find('.logo-image');
                var parentElId = parentEl.attr('id');
                /* Adding casion column to popup start */
                var casinoCountry = parentEl.find('.casinoCountry i');
                var casinoCountryFlag = casinoCountry.attr('class').replace('icon-flag-', '');
                var casionName = parentEl.find('.rating-name').text();
                var casinoLink = parentEl.attr('href');
                var casinoBonusValue = parentEl.find('.bonusValue').attr('bonusValue');
                var casinoPayoutValue = parentEl.find('.payoutValue').attr('payoutValue');
                var casinoPayoutSpeed = parentEl.find('.payoutSpeed').attr('payoutSpeed');
                var casinoMaxJackpot = parentEl.attr('maxJackpot');
                var casinoGamesNumber = parentEl.find('.casinoInfo').attr('gamesNumber');
                var casinoGameInfo = parentEl.find('.singleGame');
                var casinoGamesMultiple = '';
                var casinoGameInfoArr = [];

                casinoGameInfo.each(function() {
                    casinoGamesMultiple += '<div class="vertical-toplist-compare-icon-wrapper">'
                        + '<img src="' + $(this).attr('gameIcon') + '" alt="Game" />'
                        + '<div class="vertical-toplist-compare-games-label">' + $(this).attr('gameName') + '</div>'
                    + '</div>';
                    var gameIcon = $(this).attr('gameIcon');
                    var gameName = $(this).attr('gameName');
                    casinoGameInfoArr.push({
                      parentElId: parentElId,
                      gameIcon: gameIcon,
                      gameName: gameName,
                    });
                });

                var isFreeGames = parentEl.find('.casinoInfo').attr('freeGames') === 'true';
                var casinoGameDevices = parentEl.find('.gameDevices');
                var casinoDevicesMultiple = '';
                var casinoGameDevicesArr = [];
                casinoGameDevices.each(function() {
                    casinoDevicesMultiple += '<div class="vertical-toplist-compare-compabitility-icon-wrapper">'
                        + '<img src="' + $(this).attr('deviceIcon') + '" alt="Game device" />'
                        + '<div class="vertical-toplist-compare-games-label-devices">' + $(this).attr('deviceName') + '</div>'
                    + '</div>';
                    var deviceIcon = $(this).attr('deviceIcon');
                    var deviceName = $(this).attr('deviceName');
                    casinoGameDevicesArr.push({
                      parentElId: parentElId,
                      deviceIcon: deviceIcon,
                      deviceName: deviceName,
                    });
                });

                var casinoGameBank = parentEl.find('.gameBank');
                var casinoBanksMultiple = '';
                var casinoGameBankArr = [];
                casinoGameBank.each(function() {
                    casinoBanksMultiple += '<img src="' + $(this).attr('bankIcon') + '" alt="Game bank" />';
                    var bankIcon = $(this).attr('bankIcon');
                    casinoGameBankArr.push({
                      parentElId: parentElId,
                      bankIcon: bankIcon,
                    });
                });

                var casinoGameCountry = parentEl.find('.gameCountry');
                var casinoCountriesMultiple = '';
                var casinoGameCountryArr = [];
                casinoGameCountry.each(function() {
                    casinoCountriesMultiple += '<div class="vertical-toplist-compare-language-icon-wrapper">'
                        + '<img src="' + $(this).attr('countryIcon') + '" alt="' + $(this).attr('countryName') + '" />'
                    + '</div>';
                    var countryIcon = $(this).attr('countryIcon');
                    var countryName = $(this).attr('countryName');
                    casinoGameCountryArr.push({
                      parentElId: parentElId,
                      countryIcon: countryIcon,
                      countryName: countryName,
                    });
                });

                var isLiveChat = parentEl.find('.casinoInfo').attr('liveChat') === 'true';
                var casinoSupportEmail = parentEl.find('.casinoInfo').attr('supportEmail');
                var casinoSupportPhone = parentEl.find('.casinoInfo').attr('phoneNumber');
                var casinoLicenseName = parentEl.find('.casinoInfo').attr('licenseName');
                var casinoOperatorName = parentEl.find('.casinoInfo').attr('operatorName');
                /* Adding casion column to popup end */

                /* Filling cookie object start */
                casinoObject["parentElId"] = parentElId;
                casinoObject["casinoLogo"] = casinoLogo.attr('src');
                casinoObject["casinoCountry"] = casinoCountry;
                casinoObject["casinoCountryFlag"] = casinoCountryFlag;
                casinoObject["casionName"] = casionName;
                casinoObject["casinoLink"] = casinoLink;
                casinoObject["casinoBonusValue"] = casinoBonusValue;
                casinoObject["casinoPayoutValue"] = casinoPayoutValue;
                casinoObject["casinoPayoutSpeed"] = casinoPayoutSpeed;
                casinoObject["casinoMaxJackpot"] = casinoMaxJackpot;
                casinoObject["casinoGamesNumber"] = casinoGamesNumber;
                casinoObject["casinoGameInfo"] = casinoGameInfoArr;
                casinoObject["isFreeGames"] = isFreeGames;
                casinoObject["casinoGameDevices"] = casinoGameDevicesArr;
                casinoObject["casinoGameBank"] = casinoGameBankArr;
                casinoObject["casinoGameCountry"] = casinoGameCountryArr;
                casinoObject["isLiveChat"] = isLiveChat;
                casinoObject["casinoSupportEmail"] = casinoSupportEmail;
                casinoObject["casinoSupportPhone"] = casinoSupportPhone;
                casinoObject["casinoLicenseName"] = casinoLicenseName;
                casinoObject["casinoOperatorName"] = casinoOperatorName;
                /* Filling cookie object end */

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
                    var cookieStr = JSON.stringify(casinoObject);
                    if (!$.cookie(casinoObject.parentElId)) {
                        $.cookie(casinoObject.parentElId, cookieStr); //storing it in a cookie
                    }
                    casinos.push(casinoObject);
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
                    $.removeCookie(casinoObject.parentElId);

                    casinos = casinos.filter(function( obj ) {
                      return obj.parentElId !== parentElId;
                    });
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