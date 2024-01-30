var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 10,
  slidesPerView: "auto",
  keyboard: {
   enabled: true,
   onlyInViewport: false,
 },
  mousewheel: {
    invert: true,
  },
  autoplay: {
    delay: 5000,
  },
  loop: true,
 // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
// Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});