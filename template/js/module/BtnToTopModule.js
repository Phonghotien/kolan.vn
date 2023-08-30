export default function BtnToTopModule() {
  const btnToTop = document.querySelector(".backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      btnToTop.classList.add("active");
    } else {
      btnToTop.classList.remove("active");
    }
  });
  if (btnToTop) {
    btnToTop.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
  $(document).ready(function () {
    if (window.scrollY > 10) {
      btnToTop.classList.add("active");
    } else {
      btnToTop.classList.remove("active");
    }
  });
  const speed = 300;
  // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
  const hash = window.location.hash;
  if ($(hash).length) scrollToID(hash, speed);
  // TÌM ĐỊA CHỈ ID VÀ SCROLL XUỐNG NẾU CÓ CLASS
  $(".pdp-thumb .scroll-button a").on("click", function (e) {
    e.preventDefault();

    const href = $(this).find("> a").attr("href") || $(this).attr("href");
    const id = href.slice(href.lastIndexOf("#"));
    if ($(id).length) {
      scrollToID(id, speed);
    } else {
      // window.location.replace(/${id});
      window.location.href = href;
    }
  });
  // HÀM SCROLL CHO MƯỢT MÀ
  function scrollToID(id, speed) {
    const offSet = $(".header").outerHeight();
    const section = $(id).offset();
    const targetOffset = section.top - offSet - 0;
    $("html,body").animate({ scrollTop: targetOffset }, speed);
  }
}
