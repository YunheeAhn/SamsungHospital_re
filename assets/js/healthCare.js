// 현정님 자바스크립트
var swiper = new Swiper(".swiper-nutritions", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2300,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".swiper-healthtv", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2700,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".swiper-coach", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
