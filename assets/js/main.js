// 가영님 자바스크립트

//스와이퍼
//sec1
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


//슬릭 슬라이드
//sec3
$(document).ready(function(){
  // .slick-slide 클래스를 가진 요소들에 대한 슬라이더 초기화
  $('.slide-notice').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
  });
});

//sec4

//sec5
  const tvswiper = new Swiper('.slide-tv', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,  
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  //sec6
   function initMap() {
            const samsungMedicalCenter = { lat: 37.487501, lng: 127.014004 };

            const map = new google.maps.Map(document.getElementById('map'), {
                center: samsungMedicalCenter, 
                zoom: 15 
            });
            const marker = new google.maps.Marker({
                position: samsungMedicalCenter,
                map: map,
                title: '삼성서울병원'
            });
        }



