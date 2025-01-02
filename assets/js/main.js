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

  // testimonials slider

  var swiper = new Swiper('.aj-testimonials-active-2', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.aj-testimonials-btn__next',
      prevEl: '.aj-testimonials-btn__prev',
    },
  });

  // testimonials slider 4

  var swiper = new Swiper('.aj-testimonial-thumb-active', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper('.aj-testimonials-active-4', {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // home 5 testimonials slider

  var swiper = new Swiper('.aj-test-active', {
    slidesPerView: 4,
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
  // project slider

  var swiper = new Swiper('.aj-project-active', {
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.aj-swiper-project-next',
      prevEl: '.aj-swiper-project-prev',
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
