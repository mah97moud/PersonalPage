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
    // Hide menu in small Screen
    var screenWidth = $(window).width();
    if (screenWidth <= 768) {
        $(".meun-col").hide();
        $(".imgBox").hide();
    } else {
        $(".meun-col").show();
        $(".imgBox").show();
    }
    if (screenWidth > 768) {
        $(".pageMenu").hide();
    }

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

    $(".servCard").hover(function () {
        // over
        $(this).addClass("zoom");
    }, function () {
        // out
        $(this).removeClass("zoom");
    }
    );
});