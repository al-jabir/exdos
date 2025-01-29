(function ($) {
  'use strict';

  // Sticky Header Handler

  var windowOn = $(window);
  windowOn.on('scroll', function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 100) {
      $('#header-sticky').removeClass('header-sticky');
    } else {
      $('#header-sticky').addClass('header-sticky');
    }
  });

  // extra tools

  // // background image attribute
  // $('[data-background]').each(function () {
  //   $(this).css(
  //     'background-image',
  //     'url(' + $(this).attr('data-background') + ')'
  //   );
  // });
  // // background color attribute
  // $('[data-bg-color]').each(function () {
  //   $(this).css('background-color', $(this).attr('data-bg-color'));
  // });
  // // color attribute
  // $('[data-color]').each(function () {
  //   $(this).css('color', $(this).attr('data-color'));
  // });

  // // about intro video Popup
  // $('.popup-image').magnificPopup({
  //   type: 'image',
  //   // other options
  // });

  // $('.popup-video').magnificPopup({
  //   type: 'iframe',
  //   // other options
  // });

  //  offcanvas menu handlers

  $('.offcanvas-toggle').on('click', function () {
    $('.aj-offcanvas').addClass('aj-offcanvas-open');
    $('.aj-offcanvas-overlay').addClass('aj-offcanvas-overlay-open');
  });
  $('.aj-offcanvas-toggle-close,.aj-offcanvas-overlay').on(
    'click',
    function () {
      $('.aj-offcanvas').removeClass('aj-offcanvas-open');
      $('.aj-offcanvas-overlay').removeClass('aj-offcanvas-overlay-open');
    }
  );

  // search bar handlers

  $('.aj-search-toggle').on('click', function () {
    $('.aj-header-search-bar').addClass('aj-search-open');
    $('.aj-offcanvas-overlay').addClass('aj-offcanvas-overlay-open');
  });
  $('.aj-search-close, .aj-offcanvas-overlay').on('click', function () {
    $('.aj-header-search-bar').removeClass('aj-search-open');
    $('.aj-offcanvas-overlay').removeClass('aj-offcanvas-overlay-open');
  });

  //  mobile menu

  var ajMenuWrap = $('.aj-mobile-menu-active > ul').clone();
  var ajSideMenu = $('.aj-offcanvas-menu nav');
  ajSideMenu.append(ajMenuWrap);
  if ($(ajSideMenu).find('.sub-menu, .aj-mega-menu').length != 0) {
    $(ajSideMenu)
      .find('.sub-menu, .aj-mega-menu')
      .parent()
      .append(
        '<button class="aj-menu-close"><i class="fas fa-chevron-right"></i></button>'
      );
  }

  var sideMenuList = $(
    '.aj-offcanvas-menu nav > ul > li button.aj-menu-close, .aj-offcanvas-menu nav > ul li.has-dropdown > a'
  );
  $(sideMenuList).on('click', function (e) {
    e.preventDefault();
    if (!$(this).parent().hasClass('active')) {
      $(this).parent().addClass('active');
      $(this).siblings('.sub-menu, .aj-mega-menu').slideDown();
    } else {
      $(this).siblings('.sub-menu, .aj-mega-menu').slideUp();
      $(this).parent().removeClass('active');
    }
  });

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
