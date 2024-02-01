// 가영님 자바스크립트

const introswiper = new Swiper('.slide-intro', {

    loop: true,    
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
  });

  const tvswiper = new Swiper('.slide-tv', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,  
     pagination: {
       el: '.swiper-pagination',
     },
     scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const infoswiper = new Swiper('.slide-info', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
     pagination: {
       el: '.swiper-pagination',
     },     
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  
  });



//슬릭 슬라이드

$(document).ready(function(){
  // .slick-slide 클래스를 가진 요소들에 대한 슬라이더 초기화
  $('.slide-notice').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
  });
});

//베너 애니메이션

//servicebox1
document.addEventListener('DOMContentLoaded', function() {
  var banner = document.querySelector('.servicebox1');
  banner.classList.add('show');
});

//servicebox2
document.addEventListener('DOMContentLoaded', function() {
  var banner = document.querySelector('.servicebox2');
  setTimeout(function() {
    banner.classList.add('show');
  }, 500);
});
//servicebox3
document.addEventListener('DOMContentLoaded', function() {
  var banner = document.querySelector('.servicebox3');
  setTimeout(function() {
    banner.classList.add('show');
  }, 1500); 
});
//servicebox4
document.addEventListener('DOMContentLoaded', function() {
  var banner = document.querySelector('.servicebox4');
  setTimeout(function() {
    banner.classList.add('show');
  }, 2000); 
});

// //gsap 
//  gsap.registerPlugin(ScrollTrigger);

//  tl.from(".notice-text", {
//   opacity: 0,
//   y: 100,
//   duration: 1,
//   stagger: 0.5
// });
// ​
// // tl.to(
// //   ".notice-text",
// //   {
// //     opacity: 1,
// //     y: -100,
// //     duration: 1,
// //     stagger: {
// //       each: 0.5,
// //       from: "end"
// //     }
// //   },
// //   "+=2"
// // );
 
