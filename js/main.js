$(document).ready(function () {
    window.sr = ScrollReveal().reveal('.scroll');
    $(window).resize(function () {
        if($(this).width() > 1024) {
            $(".hamburger").hide();
            $(".header-nav-list").show();
        }
    });
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
