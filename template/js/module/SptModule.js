export default function SptModule() {
  $(document).ready(function () {
    $(".fblog-inner .fblog-img").eq(0).addClass("show");
    $(".fblog-link-js").hover(
      function () {
        // Sử dụng $(this) để xác định phần tử liên quan
        $(".fblog-inner .fblog-img").eq(0).removeClass("show");
        $(this)
          .parent(".fblog-gr")
          .parent(".fblog-inner")
          .find(".fblog-img")
          .addClass("show");
      },
      function () {
        $(this)
          .parent(".fblog-gr")
          .parent(".fblog-inner")
          .find(".fblog-img")
          .removeClass("show");
        $(".fblog-inner .fblog-img").eq(0).addClass("show");
      }
    );
  });
  //js for page pdp
  //thumb
  var tswiper = new Swiper(".tmySwiper", {
    direction: "horizontal",
    spaceBetween: 10,
    watchSlidesProgress: true,
    slidesPerView: "3",
    freeMode: true,
    breakpoints: {
      768: {
        direction: "vertical",
        slidesPerView: "auto",
      },
    },
    navigation: {
      nextEl: ".pdp-btnthumb-next",
      prevEl: ".pdp-btnthumb-prev",
    },
  });

  // featured img
  var swiper = new Swiper(".pdpfeatureSwipper", {
    direction: "horizontal",
    slidesPerView: "1",

    breakpoints: {
      768: {
         slidesPerView: "auto",
        direction: "vertical",
      },
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".pdp-btnthumb-next",
      prevEl: ".pdp-btnthumb-prev",
    },
    thumbs: {
      swiper: tswiper,
    },
  });



  //js swiper product cart
  var swiperreproduct = new Swiper(".reproductswiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      650: {
         slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
     },
    },

    navigation: {
      nextEl: ".swiper-reproduct-next",
      prevEl: ".swiper-reproduct-prev",
    },
  });
}
