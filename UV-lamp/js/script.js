// ? Видео по клику кнопки
$('#exampleModal').on('show.bs.modal', event => {
    var button = $(event.relatedTarget);
    var modal = $(this);
    // Use above variables to manipulate the DOM
    
});


// ? AJAX
$('#form').submit(function () { 
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize()
    }).done(function(){
      $('.popup-thx').fadeIn(2000);
      $(this).find('input').val('');
      $('#form').trigger('reset');
      $('.popup-thx').fadeOut(2000);
    });
    return false;
  });

//   ? Макса для телефона
  $("#phonenumber").mask("+7 (999) 999-99-99");

//   ? Склонения

var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];
function decOfNum(number, titles)
{
    if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}

// ? Таймер
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    // var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
    //   'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    // var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);
      daysSpan.innerHTML = t.days + ' ' + decOfNum(t.days, ['день','дня','дней']);
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2) + ' ' + decOfNum(t.hours, ['час','часа','часов']);

      if (parseInt(daysSpan.innerHTML) >= 5) {
        $('.lampCount1').html('<p>Осталось в наличии 100 штук</p>');
        $('.lampCount').html('<p>Осталось в наличии 100 штук</p>');
    } else if (parseInt(daysSpan.innerHTML) <= 1) {
        $('.lampCount1').html('<p>Осталось в наличии 20 штук</p>');
        $('.lampCount').html('<p>Осталось в наличии 20 штук</p>');
    } else if (parseInt(daysSpan.innerHTML) <= 3) {
        $('.lampCount1').html('<p>Осталось в наличии 50 штук</p>');
        $('.lampCount').html('<p>Осталось в наличии 50 штук</p>');
    } 
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2) + ' ' + decOfNum(t.minutes, ['минута','минуты','минут']);
    //   secondsSpan.innerHTML = ('0' + t.seconds).slice(-2) + ' секунд';
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
        var deadline = "May 26 2020 00:00:00 GMT+0300";
        initializeClock('countdown', deadline);
        initializeClock('countdown1', deadline);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);

  }
  
  var deadline = "May 26 2020 00:00:00 GMT+0300"; // for endless timer
  initializeClock('countdown', deadline);
  initializeClock('countdown1', deadline);

//  ? Плавный скрол

$(function(){
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      
      var sc = $(this).attr("href"),    
          dn = $(sc).offset().top;

      $('html, body').animate({scrollTop: dn}, 1000);
    });
  });