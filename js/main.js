$(document).ready(function () {
    $(".btn-left").on("click", function () {
        $(".meun-col").hide()
        $(".fullBody").removeClass("col-lg-9");
        $(".fullBody").addClass("col-lg-12");

        $(".pageFooter").removeClass("col-lg-9 float-right");
        $(".pageFooter").addClass("col-lg-12");

        $(".paddBottom").removeClass("paddLRInMOpen");
        $(".paddBottom").addClass("paddLeftRight");
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
        $(".fullBody").addClass("col-lg-9");
        $(".fullBody").removeClass("col-lg-12");

        $(".pageFooter").removeClass("col-lg-12");
        $(".pageFooter").addClass("col-lg-9 float-right"); 

        $(".paddBottom").addClass("paddLRInMOpen");
        $(".paddBottom").removeClass("paddLeftRight");
        $(".btn-left").css({
            "display": "block",
        });
        $(this).css({
            "display": "none",
        });
    });
});