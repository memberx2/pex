$(document).ready(function () {
    window.sr = ScrollReveal().reveal('.scroll');
    /*$("#moblie-menu-close").click(function () {
        $(this).closest("ul").removeClass("moblie-shown");
    });

    $("#moblie-menu-open").click(function () {
        $(this).closest("ul").addClass("moblie-shown");
    });*/

    $("#moblie-menu-open, #moblie-menu-close").click(function () {
        $(this).closest("ul").toggleClass("moblie-shown");
    });
});
