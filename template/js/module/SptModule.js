export default function SptModule() {

  $(document).ready(function () {
    if ($(".fblog-inner .fblog-img")) {
      $(".fblog-inner .fblog-img").eq(0).addClass("show");
    }

    if ($(".fblog-link-js")) {

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
    }

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

  // js for show pass word in profile form
  $(".show-password").click(function () {
    // console.log("show pass");
    const pwd = $(this).siblings("input");
    if (pwd.attr("type") == "password") {
      pwd.attr("type", "text");
      // console.log("show");
      // $(this).parent().addClass("show");
      $(this).removeClass("fa-eye-slash");
      $(this).addClass("fa-eye");
    } else {
      pwd.attr("type", "password");
      $(this).addClass("fa-eye-slash");
      $(this).removeClass("fa-eye");
    }
  });

  //js for select all product in cart
  // $(document).ready(function () {
  //   const selectAllCheckbox = document.getElementById("selectAllPro");
  //   const otherCheckboxes = document.querySelectorAll(
  //     '.cartod tbody input[type="checkbox"]'
  //   );
  //   const chooseProContainers = document.querySelectorAll(
  //     ".cartod .choose-pro"
  //   );
  //   if (selectAllCheckbox) {

  //   selectAllCheckbox.addEventListener("change", function () {
  //     const isChecked = selectAllCheckbox.checked;

  //     otherCheckboxes.forEach(function (checkbox) {
  //       checkbox.checked = isChecked;
  //       updateChooseProClass(checkbox);
  //     });
  //   });
  // }

  //   otherCheckboxes.forEach(function (checkbox) {
  //     checkbox.addEventListener("change", function () {
  //       updateChooseProClass(checkbox);
  //     });
  //   });

  //   function updateChooseProClass(checkbox) {
  //     const chooseProContainer = checkbox.closest(".choose-pro");
  //     if (checkbox.checked) {
  //       chooseProContainer.classList.add("active");
  //     } else {
  //       chooseProContainer.classList.remove("active");
  //     }
  //   }
  // });

  //js swiper lastest post
  var swiperlpost = new Swiper(".lpostSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },

  });

  //js for section slide history
  var swiper = new Swiper(".historySwiper", {
    spaceBetween: 0,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    centeredSlides: true,
    breakpoints: {
      // 600: {
      //   slidesPerView: 3,
      // },
      1024: {
        slidesPerView: 5,
      },
      1440: {
        slidesPerView: 9,
      },
    },

  });
  var swiper2 = new Swiper(".historySwiper2", {
    spaceBetween: 10,
    slidesPerView: 1,

    breakpoints: {
      1024: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // custom message swiper
  var cmessswiper = new Swiper(".cmessSwipper", {
    spaceBetween: 10,
    slidesPerView: 1,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    breakpoints: {
  
      768: {
        slidesPerView: 2,

      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 30,

      },
    },
  });

  //hàm count up number
  var a = 0;
  let counterBlock = document.querySelector(".count-block");
  if (counterBlock) {
      let oTop = counterBlock.offsetTop - window.innerHeight;
      $(window).scroll(function() {
          if (a == 0 && $(window).scrollTop() > oTop) {
              $(".counter-up").each(function() {
                  var $this = $(this),
                      countTo = $this.attr("data-count");
                  $({
                      countNum: $this.text(),
                  }).animate({
                          countNum: countTo,
                      },

                      {
                          duration: 2000,
                          easing: "swing",
                          step: function() {
                              $this.text(Math.floor(this.countNum));
                          },
                          complete: function() {
                              $this.text(this.countNum);
                          },
                      }
                  );
              });
              a = 1;
          }
      });
  }

    // home history swiper
    var cmessswiper = new Swiper(".historyhSwiper", {
      spaceBetween: 10,
      slidesPerView: 1,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  
      breakpoints: {
    
        600: {
          slidesPerView: 2,
  
        },
        992: {
          slidesPerView: 3,
  
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
  
        },
      },
    });


    // js for section swiper product homepage
    var swiper = new Swiper(".swiperProduct", {
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    });

    //js for best seller section
    var swiper = new Swiper(".mySwiper", {
      slidesPerView:"auto",
      direction: "vertical",

      pagination: {
        el: ".swiper-pagination",
      },
    });

  
}
