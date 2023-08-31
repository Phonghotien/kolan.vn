export default function SwiperModule() {
  const home_silder = document.querySelectorAll(".bn-slider");
  if (home_silder) {
    home_silder.forEach((item, i) => {
      const swiperMain = item.querySelector(".bn-main .swiper");
      const swiperThumb = item.querySelector(".bn-thumb .swiper");

      const itemText = new Swiper(swiperThumb, {
        speed: 800,
        slideToClickedSlide: true,
        slidesPerView: "auto",
      });
      const itemMain = new Swiper(swiperMain, {
        autoplay: {
          delay: 3000,
        },
        speed: 800,
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        thumbs: {
          swiper: itemText,
        },
      });
    });
  }
  const listcate_slider = document.querySelectorAll(".listcate-slider");

  if (listcate_slider) {
    listcate_slider.forEach((item, i) => {
      const swiperMain = item.querySelector(".cateSlider2");
      const swiperThumb = item.querySelector(".cateSlider");

      const itemImg = new Swiper(swiperThumb, {
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        slidesPerView: 3,
        direction: "vertical",
        grabCursor: false,
        loop: false,
        spaceBetween: 10,
        touchMoveStopPropagation: true,
        breakpoints: {
          0: {
            direction: "horizontal",
            spaceBetween: 8,
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 3,
          },
        },
        navigation: {
          nextEl: ".pdp-btnthumb-next",
          prevEl: ".pdp-btnthumb-prev",
        },
      });
      const cateswiper2 = new Swiper(swiperMain, {
        speed: 1200,
        slidesPerView: "auto",
        loopSlides: 0,

        // centerInsufficientSlides: true,
        // centeredSlides: true,
        loop: true,
        direction: "vertical",
        breakpoints: {
          0: {
            direction: "horizontal",
            spaceBetween: 8,
            slidesPerView: 1,
            loop: false,
          },
          769: {
            slidesPerView: "auto",
          },
        },
        thumbs: {
          swiper: itemImg,
        },
      });
      // const thumbElements = document.querySelectorAll(".pdp-tslide");
      // thumbElements.forEach((thumb) => {
      //   thumb.addEventListener("click", (event) => {
      //     const slideIndex = parseInt(
      //       thumb.getAttribute("data-slide-index"),
      //       5
      //     );
      //     cateswiper2.slideTo(slideIndex);
      //     console.log(slideIndex);
      //   });
      // });
      // const thumbElements = document.querySelectorAll(".pdp-tslide");
      // thumbElements.forEach((thumb) => {
      //   thumb.addEventListener("click", (event) => {
      //     const slideIndex = parseInt(
      //       thumb.getAttribute("data-slide-index"),
      //       5
      //     );
      //     cateswiper2.slideTo(slideIndex); // Cuộn đến slide tương ứng
      //     console.log(slideIndex);

      //     // Cuộn đến vị trí của slider lớn (main)
      //     const mainSliderTop =
      //       swiperMain.getBoundingClientRect().top + window.scrollY;
      //     window.scrollTo({
      //       top: mainSliderTop,
      //       behavior: "smooth", // Để có hiệu ứng cuộn mượt
      //     });
      //   });
      // });
    });
  }
}
