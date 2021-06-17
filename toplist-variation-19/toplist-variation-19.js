$(document).ready(function($) {
    
    //"sort by" dropdown animation
	var n = 1;
    $(document).on('click', '.sort-area', function() {
        if (n == 1) {
            $(this).closest('.sort-boxs').find('.sort-by').slideDown(500);
            n = 0;
        } else if (n == 0) {
            $('.sort-by').slideUp(500);
            n = 1;
        }
    })
    $(".sort-by li a").click(function() {
        var s = $(this).text();
        $(this).closest('.sort-boxs').find("label.sort-one").text(s);
        $(".sort-by").slideUp(500);
    })


    //load more casinos
    $(".content-area").slice(0, 40).show();
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".content-area:hidden").slice(0, 20).slideDown();
        if($(".content-area:hidden").length == 0) {
            $(".show-more-container").hide();
        }
    });

    //sort by
    const sortContainer = document.getElementById('sort-by')

    const orderFunctions = {
    ascendingByDefault: (a, b) => a.dataset.order - b.dataset.order,
    descendingByRating: (a, b) => b.dataset.rating - a.dataset.rating,
    descendingByBonus: (a, b) => b.dataset.bonus - a.dataset.bonus
    }

    let currentOrder = orderFunctions.ascendingByDefault

    sortContainer.addEventListener('click', (e) => {
    // Dont sort if empty space in the parent element has been clicked 
    if (e.target.id == "sort-by") return;
    currentOrder = orderFunctions[e.target.dataset.order]
    order()
    })

    const order = function() {
    const ordered = [...document.getElementsByClassName('content-area')].sort(currentOrder)
    ordered.forEach((elem, index) => {
        elem.style.order = index
        if (index < 40)
            elem.style.display = 'block'
        else
            elem.style.display = 'none'
    })
    document.querySelector('.show-more-container').style.display = 'block'
    }
})