/**
 * Created by Vince on 10/12/16.
 */

$(document).ready(function() {
    $("#jquery, #css3").hide();
    $("#css3").fadeIn(1200);
    $("#main-menu li.css a").addClass("active");

    $("#main-menu li.css a").on("click", function() {
        $("#jquery").hide();
        $("#css3").fadeIn(1200);
        $(this).addClass("active");
        $("#main-menu li.js a").removeClass("active");
    });

    $("#main-menu li.js a").on("click", function() {
        $("#css3").hide();
        $("#jquery").fadeIn(1200);
        $(this).addClass("active");
        $("#main-menu li.css a").removeClass("active");
    });
});