const swiper1 = new Swiper('.channel__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '.channel-swiper-button-next',
    prevEl: '.channel-swiper-button-prev',
  },
});

const swiper2 = new Swiper('.recommendations__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: '.recommendations-swiper-button-next',
    prevEl: '.recommendations-swiper-button-prev',
  },
});

const swiper3 = new Swiper('.recommended-channel__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-channel-swiper-button-next',
    prevEl: '.recommended-channel-swiper-button-prev',
  },
});