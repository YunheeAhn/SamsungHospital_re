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

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".sec-tabs");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tab.classList.add("active");
      tabs.forEach(function (otherTab) {
        if (otherTab !== tab) {
          otherTab.classList.remove("active");
        }
      });
    });
  });

  const tabBtns = document.querySelectorAll(".sec-tabs .tab-box li");

  tabBtns.forEach(function (tabBtn) {
    tabBtn.addEventListener("click", function () {
      tabBtn.classList.toggle("active");
    });
  });
});
