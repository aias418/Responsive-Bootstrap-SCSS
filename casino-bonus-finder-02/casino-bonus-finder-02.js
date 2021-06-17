$(document).ready(function($) {
    var stepOne = $('#step-1');
    var stepTwo = $('#step-2');
    var stepThree = $('#step-3');
    var stepFour = $('#step-4');
    var stepFive = $('#step-5');
    var prevButton = $('.prev-button');
    var nextButton = $('.next-button');
    var selectedGameName = '';
    var selectedGameImage = '';
    var currentStep = 1;

    $("input[name='step-game']").click(function(el) {
        var gameId = el.target.id;
        var dataBlock = $(this).siblings('.' + gameId);
        selectedGameName = dataBlock.find('.game-name').text();
        selectedGameImage = dataBlock.find('img').attr('src');

        $('.result-dynamic').append('<div class="result-best-icon-and-text result-game">'
            + '<img src="' + selectedGameImage + '" alt="Game" />'
            + '<p>' + selectedGameName + '</p>'
        + '</div>');

        stepOne.removeClass('visible');
        stepTwo.addClass('visible');
        currentStep = 2;
        $('.progress-bar').css('width', '25%');
    });

    $("input[name='step-dealer']").click(function(el) {
        var stepId = el.target.id;
        var dataBlock = $(this).siblings('.' + stepId);
        selectedDealerName = dataBlock.find('.game-name').text();
        selectedDealerImage = dataBlock.find('img').attr('src');

        $('.result-dynamic').append('<div class="result-best-icon-and-text result-dealer">'
            + '<img src="' + selectedDealerImage + '" alt="Game" />'
            + '<p>' + selectedDealerName + '</p>'
        + '</div>');

        stepTwo.removeClass('visible');
        stepThree.addClass('visible');
        $('.progress-bar').css('width', '50%');
    });

    $("input[name='step-speed']").click(function(el) {
        var stepId = el.target.id;
        var dataBlock = $(this).siblings('.' + stepId);
        selectedSpeedName = dataBlock.find('.game-name').text();

        $('.result-dynamic').append('<div class="result-best-icon-and-text result-speed">'
            + '<p>' + selectedSpeedName + '</p>'
        + '</div>');

        stepThree.removeClass('visible');
        stepFour.addClass('visible');
        $('.progress-bar').css('width', '75%');
    });

    $("input[name='step-device']").click(function(el) {
        var deviceId = el.target.id;
        var dataBlock = $(this).siblings('.' + deviceId);
        selectedDeviceName = dataBlock.find('.game-name').text();
        selectedDeviceImage = dataBlock.find('img').attr('src');

        $('.result-dynamic').append('<div class="result-best-icon-and-text result-device">'
            + '<img src="' + selectedDeviceImage + '" alt="Game" />'
            + '<p>' + selectedDeviceName + '</p>'
        + '</div>');

        stepFour.removeClass('visible');
        stepFive.addClass('visible');
        $('.progress-bar').css('width', '100%');
    });

    prevButton.click(function() {
        var cardId = $(this).closest('.card-selector').attr('id');
        
        switch (cardId) {
            case 'step-2':
                stepOne.addClass('visible');
                stepTwo.removeClass('visible');
                $('.result-game').remove();
                $('.progress-bar').css('width', '0');
                break;
            case 'step-3':
                stepTwo.addClass('visible');
                stepThree.removeClass('visible');
                $('.result-dealer').remove();
                $('.progress-bar').css('width', '25%');
                break;
            case 'step-4':
                stepThree.addClass('visible');
                stepFour.removeClass('visible');
                $('.result-speed').remove();
                $('.progress-bar').css('width', '50%');
                break;
        }
    });

    nextButton.click(function() {
        $('.progress-bar').css('width', '0');
        $('.question').removeClass('visible');
        $('.result-game, .result-dealer, .result-speed, .result-device').remove();
        stepOne.addClass('visible');
    });
})