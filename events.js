

/* ACTIVE MENU ITEM && PAGE FADE-IN WITH JQUERY ANIMATION */
$(document).ready(function() {
    $("#js-page, #css-page").hide();
    $("#css-page").fadeIn(1200);
    $("#main-menu li.css a").addClass("active");

    $("#main-menu li.css a").on("click", function() {
        $("#js-page").hide();
        $("#css-page").fadeIn(1200);
        $(this).addClass("active");
        $("#main-menu li.js a").removeClass("active");
    });

    $("#main-menu li.js a").on("click", function() {
        $("#css-page").hide();
        $("#js-page").fadeIn(1200);
        $(this).addClass("active");
        $("#main-menu li.css a").removeClass("active");
    });
});