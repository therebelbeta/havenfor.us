'use strict';

$(document).ready(function () {
  // FULLHEIGHT
  //==================================================================================
  var fheight = $(window).height();
  var full_height = function () {
    if (window.innerWidth > 1199 || device.landscape() && window.innerWidth <= 640) {
      fheight = $(window).height();

      // Preloader, Slider, Location Height
      $("#slider, #location").css("height", fheight);
      $("#slider, #location").css("margin-top", 0);
      $($("haven-preloader")[0].shadowRoot).children("#preloader-overlay").css("height", fheight).css("margin-top", 0);

      // Others
      if ($("body").hasClass("top-bar")) {
        $(".fullsize .fullheight").css("height", fheight - $("#logo").innerHeight());
        $(".fullsize .fullheight").css("margin-top", 0);
      }
      else {
        $(".fullsize .fullheight").css("height", fheight);
        $(".fullsize .fullheight").css("margin-top", 0);
      }
      if ($("body").hasClass("top-bar")) {
        $(".fullsize .halfheight").css("height", (fheighti/2) - $("#logo").innerHeight());
        $(".fullsize .halfheight").css("margin-top", 0);
      }
      else {
        $(".fullsize .halfheight").css("height", (fheight/2));
        $(".fullsize .halfheight").css("margin-top", 0);
      }


    }
    else {
      fheight = $(window).height() - $(".sidebar-menuicon").height();

      // Preloader Height
      $("#location").css("height", $(window).height());
      $("#location").css("margin-top", 0);
      $($("haven-preloader")[0].shadowRoot).children("#preloader-overlay").css("height", $(window).height()).css("margin-top", 0);

      // Slider Height
      $("#slider").css("height", fheight);
      $("#slider").css("margin-top", $(".sidebar-menuicon").height());

      // Others
      $(".fullheight").css("height", "auto");
      $(".fullheight").css("margin-top", 0);
      $(".halfheight").css("height", "auto");
      $(".halfheight").css("margin-top", 0);

    }
  }

  //Execute on load
  full_height();

  //Execute on window resize
  $(window).resize(function () {
    full_height();
  });


});
