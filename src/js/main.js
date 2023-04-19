// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Pagination]);

const swiper = new Swiper('.reviews-slider', {

    direction: 'horizontal',
    loop: true,
  
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
  
  });