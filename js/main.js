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

    // activRedLink link switching
    // $(window).scroll(function () {
    //     var scrollbarLocation = $(this).scrollTop();

    //     scrollLink.each(function () {

    //         var sectionOffset = $(this.hash).offset().top - 20;

    //         if (sectionOffset <= scrollbarLocation) {
    //             $(this).parent().addClass('activRedLink');
    //             $(this).parent().siblings().removeClass('activRedLink');
    //         }
    //     })

    // })

    $(".servCard").hover(function () {
        // over
        $(this).addClass("zoom");
    }, function () {
        // out
        $(this).removeClass("zoom");
    });
    $(".btn").hover(function () {
        // over
        $(this).addClass("blueHover");
    }, function () {
        // out
        $(this).removeClass("blueHover");
    });


});



class jobWrite {
    constructor(word, wordRotate, wordPeriod) {
        this.wordRotate = wordRotate;
        this.word = word;
        this.loopNum = 0;
        this.wordPeriod = parseInt(wordPeriod, 10) || 2000;
        this.text = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.wordRotate.length;
        var fullTxt = this.wordRotate[i];
        if (this.isDeleting) {
            this.text = fullTxt.substring(0, this.text.length - 1);
        } else {
            this.text = fullTxt.substring(0, this.text.length + 1);
        }
        this.word.innerHTML = ' <span class= "job-title"> ' + this.text + '</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.text === fullTxt) {
            delta = this.wordPeriod;
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.tick();
        }, delta);
    }
}


window.onload = function () {
    var element = document.getElementsByClassName('text');
    for (var i = 0; i < element.length; i++) {
        var wordRotate = element[i].getAttribute('data-type');
        var wordPeriod = element[i].getAttribute('data-period');
        if (wordPeriod) {
            new jobWrite(element[i], JSON.parse(wordRotate), wordPeriod);
        }
    }
}


// Dom Event
// let navLink = document.querySelectorAll(".creativeNavBar .navLink");
// console.log(navLink);
// let All = navLink[0];
// let design = navLink[1];
// let Photography = navLink[2];
// let Development = navLink[3];


// Change Dom
let all = document.querySelector(".all");
console.log(all);
let design = document.querySelector(".design");
console.log(design);
let photography = document.querySelector(".Photography");
console.log(photography);
let development = document.querySelector(".Development");
console.log(development);
let imgTag = document.querySelectorAll(".imgTag");
console.log(imgTag[1]);
console.log(imgTag[1].getAttribute("class", "DevelopmentImg"));
let box = document.querySelectorAll("#Portfolio .box");
let linkArray = document.querySelectorAll("#Portfolio .navLink");
console.log(linkArray);
let All = linkArray[0];
console.log(linkArray[0]);
let Design = linkArray[1];
let Photography = linkArray[2];
let Development = linkArray[3];

All.addEventListener("click", function () {
    imgTag[0].className = "imgTag show DevelopmentImg";
    box[0].className = " show box ";
    imgTag[1].className = " imgTag show PhotographyImg";
    box[1].className = "show box ";
    imgTag[2].className = "imgTag show designImg";
    box[2].className = " show box";
    imgTag[3].className = " imgTag show PhotographyImg";
    box[3].className = "show box";
    imgTag[4].className = "imgTag show designImg";
    box[4].className = " show box";
    imgTag[5].className = "imgTag show PhotographyImg";
    box[5].className = " show box";
    this.classList.add("activRedLink");
    design.classList.remove("activRedLink");
    Photography.classList.remove("activRedLink");
    Development.classList.remove("activRedLink");

});
design.addEventListener("click", function () {
    imgTag[0].className = "imgTag hide DevelopmentImg";
    box[0].className = " hide box ";
    imgTag[1].className = " imgTag hide PhotographyImg";
    box[1].className = "hide box ";
    imgTag[2].className = "imgTag show designImg";
    box[2].className = " show box";
    imgTag[3].className = " imgTag hide PhotographyImg";
    box[3].className = "hide box";
    imgTag[4].className = "imgTag show designImg";
    box[4].className = " show box";
    imgTag[5].className = "imgTag hide PhotographyImg";
    box[5].className = " hide box";
    this.classList.add("activRedLink");
    All.classList.remove("activRedLink");
    Photography.classList.remove("activRedLink");
    Development.classList.remove("activRedLink");
});
Photography.addEventListener("click", function () {
    imgTag[0].className = "imgTag hide DevelopmentImg";
    box[0].className = " hide box ";
    imgTag[1].className = " imgTag show PhotographyImg";
    box[1].className = "show box ";
    imgTag[2].className = "imgTag hide designImg";
    box[2].className = " hide box";
    imgTag[3].className = " imgTag show PhotographyImg";
    box[3].className = "show box";
    imgTag[4].className = "imgTag hide designImg";
    box[4].className = " hide box";
    imgTag[5].className = "imgTag show PhotographyImg";
    box[5].className = " show box";
    this.classList.add("activRedLink");
    design.classList.remove("activRedLink");
    All.classList.remove("activRedLink");
    Development.classList.remove("activRedLink");

});
Development.addEventListener("click", function () {
    imgTag[0].className = "imgTag show DevelopmentImg";
    box[0].className = " show box ";
    imgTag[1].className = " imgTag hide PhotographyImg";
    box[1].className = "hide box ";
    imgTag[2].className = "imgTag hide designImg";
    box[2].className = " hide box";
    imgTag[3].className = " imgTag hide PhotographyImg";
    box[3].className = "hide box";
    imgTag[4].className = "imgTag hide designImg";
    box[4].className = " hide box";
    imgTag[5].className = "imgTag hide PhotographyImg";
    box[5].className = " hide box";
    this.classList.add("activRedLink");
    design.classList.remove("activRedLink");
    Photography.classList.remove("activRedLink");
    All.classList.remove("activRedLink");

});
