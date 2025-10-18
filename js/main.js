"use strict";
/**************Loading Screen************/
$(document).ready(function () {
    $(".loader").fadeOut(500, function () {
        $(".loadingScreen").fadeOut(500, function () {
            $("body").css("overflow", "auto");
            $(".loadingScreen").remove();
        })

    })
})
/**************navbar background Color when scroll************/

$(window).scroll(function () {
    let windowScroll = $(window).scrollTop();    
    if (windowScroll > 50 ) {
        $(".navbar").css("backgroundColor", "#fff");
        $("nav a").css("color", " #686868 ");
        $(".navbar img").attr("src", "images/bakery-color.png");
    } else {
        $(".navbar").css("backgroundColor", "transparent");
        $("nav a").css("color", "#fff");
        $(".navbar img").attr("src", "images/bakery-light-1.png");
    }

})
/****************************************************************/

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.navbar-collapse').classList.remove('show');
        $(".navbar-toggler i").removeClass("fa-xmark").addClass("fa-bars");
    });
});

$(".navbar-toggler").click(function () {
    if ($(".navbar-toggler i").hasClass("fa-bars")) {
        $(".navbar-toggler i").removeClass("fa-bars").addClass("fa-xmark");
    } else {
        $(".navbar-toggler i").removeClass("fa-xmark").addClass("fa-bars");
    }
});

/************** scroll To section by href ************/

$("a[href^='#']").click(function (eventInfo) {
    let aHref = eventInfo.target.getAttribute("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset }, 500);
})
/**************arrow Up************/

$(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > 50) {
        $(".arrowUP").fadeIn(500);
    } else {
        $(".arrowUP").fadeOut(500);
    }
})
$(".arrowUP").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
})

//****************************************************** */

let myColors = ['#f0e4d7', '#f5c0c0', '#ff7171', '#9fd8df', '#206a5d'
    , '#81b214', 'black', '#f5f7b2','#9e5c5c', '#1cc5dc', '#cf0000', '#890596'];
let colorBox = $(".colorBox");

for (let i = 0; i < colorBox.length; i++) {
  colorBox.eq(i).css("backgroundColor", `${myColors[i]}`)
}
let SideBarInnerWidth = $(".sidBar-inner").innerWidth();
console.log(SideBarInnerWidth);
$("#sideBar").css("right", -SideBarInnerWidth)
$("#sideBar i").click(function () {
  if ($("#sideBar").css("right") == "0px") {
      $("#sideBar").animate({ right: -SideBarInnerWidth }, 1000, function () {
          $("#sideBar i").addClass(".fa fa-cogs");
          $("#sideBar i").removeClass(".fa fa-xmark");
      });

  }
  else {
      $("#sideBar").animate({ right: "0px" }, 1000, function () {
          console.log(SideBarInnerWidth);
          $("#sideBar i").removeClass(".fa fa-cogs");
          $("#sideBar i").addClass(".fa fa-xmark");
      });

  }

})

$("#sideBar span").click(function (eventInfo) {
  let colorText = $(eventInfo.target).css("backgroundColor");
  $("p").css("color", colorText);
})


