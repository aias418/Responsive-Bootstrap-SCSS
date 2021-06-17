$(document).ready(function($) {
    var ratingCurrent = "up";
    var dateCurrent = "down";

    $(".filter-list li").click(function() {
        var filterId = $(this).attr("id");

        $(this).find('.sort-item').toggleClass("sort-arrow-up");

        $(".filters-list li").not(this).each(function() {
            $(this).find('.sort-item').removeClass("sort-arrow-up");
        });

        if (filterId === "date-filter") {
            sortByDate();
        }
        if (filterId === "rating-filter") {
            sortByRating();
        }
    });

    var ul = $("#comment-section");
    var li = ul.children(".reviews");

    sortByDate();

    function sortByDate() {
        var isUp = dateCurrent === 'up';

        li.detach().sort(function(a, b) {
            var firstName = a.getAttribute('commentDate');
            var secondName = b.getAttribute('commentDate');

            if (isUp) {
                dateCurrent = "down";
                if (firstName < secondName) {
                    return -1;
                }
                if (firstName > secondName) {
                    return 1;
                }
            } else {
                dateCurrent = "up";
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
            var firstName = a.getAttribute('casinoRating');
            var secondName = b.getAttribute('casinoRating');

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

    $('#comment-section').removeClass('hidden');

    $('#write-review-toggle').click(function() {
        $('#write-review').addClass('active');
    });
});