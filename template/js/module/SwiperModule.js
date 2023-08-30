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
}
