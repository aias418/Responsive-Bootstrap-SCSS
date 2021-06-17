$(document).ready(function($) {
    var descCurrent = "up";
    var ratingCurrent = "up";
    var numberCurrent = "up";
    var launchCurrent = "up";

    $(".filters-list li").click(function() {
        var filterId = $(this).attr("id");

        $(this).toggleClass("reverse");

        $(".filters-list li").not(this).each(function() {
            $(this).removeClass("reverse");
        });

        if (filterId === "alphabet-filter") {
            sortByDesc();
        }
        if (filterId === "rating-filter") {
            sortByRating();
        }
        if (filterId === "gamesnumber-filter") {
            sortByGamesNumber();
        }
        if (filterId === "launchdate-filter") {
            sortByLaunchDate();
        }
    });

    var ul = $("#main-list");
    var li = ul.children("li");

    sortByDesc();

    function sortByDesc() {
        var isUp = descCurrent === 'up';

        li.detach().sort(function(a, b) {
            var firstName = a.querySelector('.item-name').innerHTML;
            var secondName = b.querySelector('.item-name').innerHTML;

            if (isUp) {
                descCurrent = "down";
                if (firstName < secondName) {
                    return -1;
                }
                if (firstName > secondName) {
                    return 1;
                }
            } else {
                descCurrent = "up";
                if (firstName > secondName) {
                    return -1;
                }
                if (firstName < secondName) {
                    return 1;
                }
            }
        });
        ul.append(li);
    }

    function sortByRating() {
        var isUp = ratingCurrent === 'up';

        li.detach().sort(function(a, b) {
            var firstName = a.querySelector('.rating-number').innerHTML;
            var secondName = b.querySelector('.rating-number').innerHTML;

            if (isUp) {
                ratingCurrent = "down";
                if (firstName < secondName) {
                    return -1;
                }
                if (firstName > secondName) {
                    return 1;
                }
            } else {
                ratingCurrent = "up";
                if (firstName > secondName) {
                    return -1;
                }
                if (firstName < secondName) {
                    return 1;
                }
            }
        });
        ul.append(li);
    }

    function sortByGamesNumber() {
        var isUp = numberCurrent === 'up';

        li.detach().sort(function(a, b) {
            var firstName = a.querySelector('.list-item-inner').getAttribute("gamesNumber");
            var secondName = b.querySelector('.list-item-inner').getAttribute("gamesNumber");

            if (isUp) {
                numberCurrent = "down";
                if (firstName < secondName) {
                    return -1;
                }
                if (firstName > secondName) {
                    return 1;
                }
            } else {
                numberCurrent = "up";
                if (firstName > secondName) {
                    return -1;
                }
                if (firstName < secondName) {
                    return 1;
                }
            }
        });
        ul.append(li);
    }

    function sortByLaunchDate() {
        var isUp = launchCurrent === 'up';

        li.detach().sort(function(a, b) {
            var firstName = a.querySelector('.list-item-inner').getAttribute("launchDate");
            var secondName = b.querySelector('.list-item-inner').getAttribute("launchDate");

            if (isUp) {
                launchCurrent = "down";
                if (firstName < secondName) {
                    return -1;
                }
                if (firstName > secondName) {
                    return 1;
                }
            } else {
                launchCurrent = "up";
                if (firstName > secondName) {
                    return -1;
                }
                if (firstName < secondName) {
                    return 1;
                }
            }
        });
        ul.append(li);
    }

    $('.main-list').removeClass('hidden');
});