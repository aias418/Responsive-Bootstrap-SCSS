$(document).ready(function($) {
    /* Enable tooltips */
    $('[data-toggle="tooltip"]').tooltip();
    /* Set active category */
    var activeCategory = $('#casino-nav .dropdown-item').first().attr('casino-category');
    handleCards();

    /* Handle category change */
    $('#casino-nav .dropdown-item').click(function() {
        activeCategory = $(this).attr('casino-category');
        handleCards();
    });

    function handleCards() {
        $('.cards-section .cards-col').each(function() {
            var category = $(this).attr('categories');
            if (!category.includes(activeCategory)) {
                $(this).addClass('d-none');
            } else {
                $(this).removeClass('d-none');
            }
        });
    }
});