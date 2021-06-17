$(document).ready(function($) {
    var i = 1,
        q = 0;

    var imagesPath = './img/';

    $(".question").each(function() {
        $(this).attr("id", "question" + (i++));
    });

    $(".question button").each(function() {
        $(this).click(function() {
            q++;
            if (q !== $(".question").length) {
                $(".question").each(function() {
                    $(this).hide();
                });

                $("#question" + (q + 1)).show();

            } else {
                q = $(".question").length - 1;
            }
        });
    });

    $("input[name='step-special']").click(function(el) {
        var stepId = el.target.id;

        switch (stepId) {
            case 'special1':
                showBonus('1');
                break;
            case 'special2':
                showBonus('2');
                break;
            case 'special3':
                showBonus('3');
                break;
            case 'special4':
                showBonus('4');
                break;
        }
    });

    $("input[name='step-game']").click(function(el) {
        var gameId = el.target.id;

        switch (gameId) {
            case 'game1':
                showGame('1');
                break;
            case 'game2':
                showGame('2');
                break;
            case 'game3':
                showGame('3');
                break;
            case 'game4':
                showGame('4');
                break;
        }
        $('#clickable2').removeClass('unclickable');
    });

    $("input[name='step-device']").click(function(el) {
        var deviceId = el.target.id;

        switch (deviceId) {
            case 'device1':
                showDevice('1');
                break;
            case 'device2':
                showDevice('2');
                break;
            case 'device3':
                showDevice('3');
                break;
        }
        $('#clickable3').removeClass('unclickable');
    });

    function showBonus(index) {
        $('[id*="casino-div-"]').each(function() {
            if ($(this).attr('id').includes(index)) {
                $(this).css('display', 'block');
            } else {
                $(this).css('display', 'none');
            }
        });
        $('#clickable').removeClass('unclickable');
    }

    function showGame(index) {
        $(".casino-container").each(function() {
            var imgUrl = imagesPath + 'game-' + index + '.png';

            $(this).find(".selected-game").css('background-image', 'url(' + imgUrl + ')');
        });
        $('#clickable2').removeClass('unclickable');
    }

    function showDevice(index) {
        $(".casino-container").each(function() {
            var imgUrl = imagesPath + 'device-' + index + '.png';

            $(this).find(".selected-device").css('background-image', 'url(' + imgUrl + ')');
        });
        $('#clickable3').removeClass('unclickable');
    }
})