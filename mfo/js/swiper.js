AOS.init()

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  spaceBetween: 100,
  clickable: true,
});

var $tlt = $(".tlt").textillate({
  autoStart: false,
  in: { effect: "fadeInUp" },
});

var $tltdescr = $(".tlt-descr").textillate({
  autoStart: false,
  in: { effect: "fadeInUp" },
});

$(".tlt").textillate({
  in: {
    effect: "fadeInUp",
  },
  autoStart: true,
  loop: false,
});

$(".tlt-descr").textillate({
  in: {
    effect: "fadeInUp",
    sync: true,
  },
  autoStart: true,
  loop: false,
});

mySwiper.on("slideChange", function () {
  $tlt.textillate("start");
  $tltdescr.textillate("start");
  
  $(function () {
    $(".tlt").textillate({
      in: {
        effect: "fadeInUp",
      },
      autoStart: false,
      loop: false,
    });
  });

  $(function () {
    $(".tlt-descr").textillate({
      in: {
        effect: "fadeInUp",
        sync: true,
      },
      out: {
        effect: "fadeOutDown",
        sync: true,
      },
      autoStart: false,
      loop: false,
  });
  


});
});

var mySwiper1 = new Swiper(".swiper-container-partners", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 80,
  slidesPerView: 4,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1374: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 3,
    },
    320: {
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
