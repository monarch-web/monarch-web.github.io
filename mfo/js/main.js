AOS.init()

function myFunction(x) {
  x.classList.toggle("change");
  $(".menu-holder").slideToggle(400);
  $(".search-holder").toggleClass("d-flex");
  // $("html, body").toggleClass("overflow");
  $(".container--header").toggleClass("header-height");
}

$(function () {
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;

    $("html, body").animate({ scrollTop: dn }, 1000);
  });
});

// UP BTN
$(".up-btn").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


window.addEventListener('scroll', () => {
  const btn = document.querySelector('.up-btn');
  if (window.scrollY > 700) {
   btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});


// ? AJAX
$('#enter').submit(function () { 
  $.ajax({
    type: "POST",
    url: "../test/send.php",
    data: $(this).serialize()
  }).done(function(){
    $('#enter, .modal-backdrop.fade').fadeOut(300);
    setTimeout(() => {
      alert('Спасибо за заявку! Мы свяжимся с Вами в ближайшее время.')
    }, 500)
  });
  return false;
});

$('#enter-contacts, .modal-backdrop.fade').submit(function () { 
  $.ajax({
    type: "POST",
    url: "../test/send.php",
    data: $(this).serialize()
  }).done(function(){
    $('#enter-contacts, .modal-backdrop.fade').fadeOut(300);
    setTimeout(() => {
      alert('Спасибо за заявку! Мы свяжимся с Вами в ближайшее время.')
    }, 500)
  });
  return false;
});
