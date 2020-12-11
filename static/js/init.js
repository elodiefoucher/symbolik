var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 10,
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
});
