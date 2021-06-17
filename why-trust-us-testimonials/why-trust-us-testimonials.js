$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:false,
        items:2,
        autoWidth: true,
        responsive : {
            0 : {
                items: 1,
                autoWidth: false,
            },
            767 : {
                items:2,
                autoWidth: true
            }
        }
    })
});