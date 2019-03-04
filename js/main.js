$(document).ready(function () {
    $(".btn-left").on("click", function () {
        $(".meun-col").hide()
        $(".fullBody").removeClass("col-lg-9");
        $(".fullBody").addClass("col-lg-12");
        $(".btn-right").css({
            "display": "block",
            "left": "-280px"
        });
        $(this).css({
            "display": "none",
        });
    });
    $(".btn-right").on("click", function () {
        $(".meun-col").show()
        $(".fullBody").removeClass("col-lg-12");
        $(".fullBody").addClass("col-lg-9");
        $(".btn-left").css({
            "display": "block",
        });
        $(this).css({
            "display": "none",
        });
    });
});