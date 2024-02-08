// 현정님 자바스크립트
var swiper = new Swiper(".swiper-nutritions", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  //   centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
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
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".swiper-healthtv", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2900,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: { slidesPerView: 1, spaceBetween: 10 },
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
      spaceBetween: 20,
    },
  },
});

// 나만의 건강코치 - 슬릭슬라이드
$(document).ready(function () {
  $(".slide-coach-wrapper").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev" aria-label=""></button>',
    nextArrow: '<button class="slick-next" aria-label=""></button>',
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 3,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".slide-coach-wrapper").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev" aria-label=""></button>',
    nextArrow: '<button class="slick-next" aria-label=""></button>',
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2900,
  });
});

// 질환정보tab
// document.addEventListener("DOMContentLoaded", function
function tabs() {
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
}


// 사이드메뉴
function sidemenubar() {
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
}

tabs();
sidemenubar();

