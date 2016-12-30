$(document).ready(function () {
    window.sr = ScrollReveal().reveal('.scroll');

    $(".cross").hide();
    $(".mobile-shown").hide();
    $(".hamburger").click(function () {
        $(".mobile-shown").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".mobile-shown").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });
});
