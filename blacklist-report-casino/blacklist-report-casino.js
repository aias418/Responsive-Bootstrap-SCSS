$(document).ready(function(){
    $(".blacklist-report-casino .report-form-section .info-container").click(function(){
        $(this).parents(".report-form-section").toggleClass("form-active");
        cpnsole.log("clicked");
    });
    $("#formCloseBtn").click(function(){
        $(this).parents(".report-form-section").removeClass("form-active");
    })
})

function sendMessage(){
    $(".blacklist-report-casino .report-form-section").addClass("message-sent");
}