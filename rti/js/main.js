$(document).ready(function () {
  AOS.init();

  // Burger

  $('.burger').on('click', function() {
    $('.burger-menu').fadeToggle()
  })

  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    var sc = $(this).attr("href"),    
        dn = $(sc).offset().top;

    $('html, body').animate({scrollTop: dn}, 1000);
  });

  var button = $('.up-btn');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 600) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  })

  $("#phone").mask("+7 (999) 999-99-99");

  // ? AJAX
$('.form').submit(function () { 
  $.ajax({
    type: "POST",
    url: "/send.php",
    data: $(this).serialize()
  }).done(function(){
    $('.modal').toggleClass('show');
    $('input').val('');
    $('textarea').val('')
  });
  return false;
});

$('.close-btn').click(function (e) { 
  e.preventDefault();
  $(".modal").toggleClass('show')
});;


    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 5
          }
          
      }
    })

   
  });