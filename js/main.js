$(document).ready(function () {
    window.sr = ScrollReveal().reveal('.scroll');

    var closeButton = $("#close-menu-button");
    var openButton = $("#open-menu-button");
    var menu = $(".header-nav-list");

    closeButton.click(function () {
        menu.slideToggle(function () {
            closeButton.hide();
            openButton.show();
        });
    });

    openButton.click(function () {
        closeButton.show();
        menu.slideToggle(function () {
            openButton.hide();
        });
    });

    $(window).resize(function(){
        if(window.innerWidth > 1024) {
            menu.show();
        } else {
            closeButton.hide();
            openButton.show();
            menu.hide();
        }
    });
});
