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
      delay: 2500,
      disableOnInteraction: false,
    },
  
  });

  var noticeswiper = new Swiper(".slide-notice", {
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const tvswiper = new Swiper('.slide-tv', {

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

