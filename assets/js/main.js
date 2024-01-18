// 가영님 자바스크립트
const introswiper = new Swiper('.slide-intro', {

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const noticeswiper = new Swiper('.slide-notice', {

    loop: true,
  
    slidesPerView: 3,

    spaceBetween: 30,
   
    pagination: {
      el: '.swiper-pagination',
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });