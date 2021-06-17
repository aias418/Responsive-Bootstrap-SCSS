$(document).ready(function($) {
    $(window).click(function() {
        $('.country-select-wrapper-heading').removeClass('country-select-active');
        $('.country-select-wrapper-main').addClass('is-hidden');
    });

    $('#casino-by-country-selected').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('country-select-active');
        $(this).siblings('.country-select-wrapper-main').toggleClass('is-hidden');
    });

    $('.country-select-wrapper-main-body-list-item').click(function() {
        var parentEl = $(this).attr('data-id');
        var countryBlock = $('.data-container').find('#' + parentEl);
        var cardsWrapper = $('#casino-by-country-results .cards-wrapper');
        var isCountryLength = countryBlock.length >= 1;
        var casinoInfo = countryBlock.find('.casinoData');
        var countryName = $(this).clone().children().remove().end().text().trim();
        var countryFlag = $(this).find('img').attr('src');

        $('#casino-by-country-selected').html('<img alt="' + countryName + '" src="' + countryFlag + '" /><span>' + countryName + '</span>');

        cardsWrapper.empty();

        if (isCountryLength) {
            casinoInfo.each(function() {
                cardsWrapper.append('<div class="col">'
                        + '<div class="casino-card">'
                            + '<a href="' + $(this).attr('casinoUrl') + '" title="' + $(this).attr('name') + '" class="card-header" style="background:' + $(this).attr('logoBackground') + '">'
                                + '<div class="card-header-logo">'
                                    + '<div class="card-media-overlay">'
                                        + '<img src="./img/' + $(this).attr('casinoLogo') + '" alt="' + $(this).attr('casinoUrl') + '" />'
                                    + '</div>'
                                + '</div>'
                            + '</a>'
                            + '<div class="card-body">'
                                + '<div class="card-body-info">'
                                    + ($(this).attr('certificate') ? '<div class="cot">'
                                        + '<p class="cot-tooltip">'
                                            + '<img src="./img/badge.svg" alt="Badge icon" />'
                                        + '</p>'
                                        + '<span class="text-uppercase">' + $(this).attr('certificate') + '</span>'
                                    + '</div>' : '')
                                    + '<div class="rating">'
                                        + '<img src="./img/star.svg" alt="Star icon" />'
                                        + '<span>' + $(this).attr('rating') + '</span>'
                                    + '</div>'
                                + '</div>'
                                + '<a href="' + $(this).attr('casinoUrl') + '" title="' + $(this).attr('name') + '" class="card-body-title">'
                                    + $(this).attr('name')
                                + '</a>'
                            + '</div>'
                            + '<div class="card-footer">'
                                + '<a href="' + $(this).attr('casinoUrl') + '" class="btn-primary" target="_blank" rel="nofollow" title="Play">'
                                    + 'Play'
                                + '</a>'
                                + ($(this).attr('termsLink') ? '<a href="' + $(this).attr('termsLink') + '" class="btn-link" target="_blank" rel="nofollow" title="T&amp;C applies">T&amp;C applies</a>' : '')
                            + '</div>'
                        + '</div>'
                    + '</div>'
                );
            });
        }
    });
});