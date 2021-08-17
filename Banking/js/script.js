$(document).ready(function () {
  $('.phone__form').mask('+7 (999) 999-99-99');

$('#form').submit(function () { 
  $.ajax({
    type: "POST",
    url: "send.php",
    data: $(this).serialize()
  }).done(function(){
    alert('Спасибо за заявку! Я свяжусь с Вами в ближайшее время.');
  });
  $('.popup').fadeOut(300);
  return false;
  
});

  var swiper1 = new Swiper('.swiper1', {
    pagination: '.swiper-pagination1',
    paginationClickable: true,
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }});

    
    var swiper2 = new Swiper('.swiper2', {
      pagination: '.swiper-pagination1',
      paginationClickable: true,
      // Optional parameters
      loop: true,
      slidesPerView: 1,
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next-six',
        prevEl: '.swiper-button-prev-six',
    }}
    
)
var swiper3 = new Swiper('.swiper3', {
  pagination: '.swiper-pagination1',
  paginationClickable: true,
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 48,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-seven',
    prevEl: '.swiper-button-prev-seven',
}})


})