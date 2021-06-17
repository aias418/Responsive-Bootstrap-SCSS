$(document).ready(function(){
    var sideMenu = $(".sidebar-variation-01 .app-sidenav");
    $(".sidebar-variation-01 .app-header .res-sidemenu-toggle-btn").click(function(){
        sideMenu.addClass("menu-open");
    });
    $(".sidebar-variation-01 .app-sidenav .side-nav-close-btn").click(function(){
        sideMenu.removeClass("menu-open");
    });
});