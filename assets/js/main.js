$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  if ($(".quraan-explain-slider").length) {
    $(".quraan-explain-slider").slick({
      arrow: true,
      dots: false,
    });
  }

  if ($(".latest-news-slider-wrapper").length) {
    $(".latest-news-slider-wrapper").slick({
      rtl: true,
      slidesToShow: 4,
      arrows: false,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.4,
          },
        },
      ],
    });
  }

  $(".middle-header #nav-icon1").click(function () {
    // $(this).addClass("open");
    // $(this).parent().toggleClass("menu_icon-active");
    $(".side-nav").addClass("side-nav-open");
    $("html").addClass("side-active");
    // $(".my_navbar").toggleClass("removeBackground");
    // $("#mySidenav").toggleClass("openBurgerMenu");
    // $(".bg-sidenavOpen").toggleClass("burgerMenubodybg");
    // $(this).closest(".customnavbar").find(".logo").fadeToggle();
  });

  if ($(".side-nav").length) {
    $(".side-nav .close-nav").click(function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
    });
  }

  if ($(".bg-side-open").length) {
    $(".bg-side-open").on("click", function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
    });
  }

  if ($(".custom-select").length) {
    $(".custom-select").niceSelect();
  }

  if ($(".animate__animated").length) {
    new WOW().init();
  }

  if ($("#today").length) {
    const ar = new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
      day: "numeric",
      month: "long",
      weekday: "long",
      year: "numeric",
    }).format(Date.now());

    const en = new Intl.DateTimeFormat("ar", {
      day: "numeric",
      month: "long",
      weekday: "long",
      year: "numeric",
    }).format(Date.now());

    document.getElementById("today").innerHTML = `${en} / ${ar}`;
  }

  $('.audio').each(function() {
    // console.log(this);
    var isPlaying = false;
    var resumePosition = 0;
    var audio = null;
  
    $(this).on('click', function(e) {
      e.preventDefault();
  
      if (audio === null) {
        var link = $(this).attr("href");
        audio = new Audio(link);
      }
  
      if (!isPlaying) {
        audio.currentTime = resumePosition;
        audio.play();
        $(this).find("span").text("ايقاف");
        isPlaying = true;
      } else {
        audio.pause();
        $(this).find("span").text("تشغيل");
        isPlaying = false;
        resumePosition = audio.currentTime;
      }
    });
  });

  if ($(".animate__animated").length) {
    WOW().init();
  }

  // if($('audio').length){
  //   $('audio').audioPlayer({
  //     classPrefix: 'audioplayer',
  //     strPlay: '',
  //     strPause: '',
  //     strVolume: ''
  //   });
  // }

 

});

$(window).on("load", function () {
  $("html").removeClass("splash-active");
  $(".splach").addClass("splashscreen-none");
});
