const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  loop: false,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    snapOnRelease: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3
    }
  }
});