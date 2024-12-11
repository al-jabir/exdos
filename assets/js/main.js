(function ($) {
  'use strict';

  // popup image

  $('.popup-img').magnificPopup({
    type: 'image',
  });
  $('.popup-video').magnificPopup({
    type: 'iframe',
  });

  // testimonials slider

  var swiper = new Swiper('.aj-testimonials-active', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.aj-swiper-button-next',
      prevEl: '.aj-swiper-button-prev',
    },
  });
  // home page 2
  var swiper = new Swiper('.aj-testimonialsh-2-active', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.aj-swiper-button-h2-next',
      prevEl: '.aj-swiper-button-h2-prev',
    },
  });

  //  brand slider

  var swiper = new Swiper('.aj-brand-top-active', {
    slidesPerView: 'auto',
    spaceBetween: 80,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 2000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });

  var swiper = new Swiper('.aj-brand-bottom-active', {
    slidesPerView: 'auto',
    spaceBetween: 80,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 2000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });

  // team slider

  var swiper = new Swiper('.aj-team-active', {
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.aj-swiper-team-next',
      prevEl: '.aj-swiper-team-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
})(jQuery);
