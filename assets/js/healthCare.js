// 현정님 자바스크립트
var swiper = new Swiper(".swiper-nutritions", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 10000000,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".swiper-healthtv", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 200000,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  // 질환정보tab
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
      const isActive = tabBtn.classList.contains("active");

      tabBtns.forEach(function (tabBtn) {
        tabBtn.classList.remove("active");
      });
      if (!isActive) tabBtn.classList.add("active");
    });
  });

  // 사이드메뉴
  window.onscroll = function () {
    const sidebar = document.querySelector(".sidemenubar-container");
    const scrollY = window.scrollY;
    if (scrollY > 750) {
      console.log(scrollY);
      sidebar.style.top = scrollY - 580 + "px";
    } else {
      sidebar.style.top = "230px";
    }
  };
});

// 나만의 건강코치 - 슬릭슬라이드
$(document).ready(function () {
  $(".slide-coach-wrapper").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerPadding: "20px",
    prevArrow: '<button class="slick-prev" aria-label=""></button>',
    nextArrow: '<button class="slick-next" aria-label=""></button>',
    // variableWidth: true,
    autoplay: true,
    autoplaySpeed: 290000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
