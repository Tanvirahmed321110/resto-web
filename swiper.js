var swiper = new Swiper(".mySwiper", {
    spaceBetween: 110,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed:2100,
    loop:true
    
  });
  
  
  var reviewsSwiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed:1000,
    loop:true,
    breakpoints: {
      0: {
        slidesPerView:1,
      },
      640: {
        slidesPerView:1,
      },
      768: {
        slidesPerView:2,
      },
      1024: {
        slidesPerView:3,
      },
    }
});