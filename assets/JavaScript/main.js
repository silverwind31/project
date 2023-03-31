
// var smallSwiper = new Swiper('.animal_card_thumbs_swiper', {
//   // Optional parameters
//   direction: 'horizontal',
  
//   slidesPerView:3,
//   spaceBetween:25,
// });

const swiper = new Swiper('.animal_card_swiper', {
    // Optional parameters
    direction: 'horizontal',
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
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // thumbs: {
    //   swiper: smallSwiper,
    // },
  });