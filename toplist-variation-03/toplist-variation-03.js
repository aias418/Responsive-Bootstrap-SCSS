$(document).ready(function(){
    $(".toplist-variation-03 .exp-col-btn").click(function(){
        $(this).parents(".text-expColp-section").toggleClass("text-sec-hidden");
    })

    $(".toplist-variation-03 .radio-btn-group [name='casinoFilter']").change(function(event){
        var radioVal = $(event.currentTarget).val();
        if(radioVal == "best"){
            $(".toplist-variation-03 .canisos-sorting-section .casinos-filter-list .best-casinos").removeClass("hidden");
            $(".toplist-variation-03 .canisos-sorting-section .casinos-filter-list .newest-casinos").addClass("hidden");
        }else{
            $(".toplist-variation-03 .canisos-sorting-section .casinos-filter-list .best-casinos").addClass("hidden");
            $(".toplist-variation-03 .canisos-sorting-section .casinos-filter-list .newest-casinos").removeClass("hidden");
        }
    });
});