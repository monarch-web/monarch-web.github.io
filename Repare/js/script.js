$(document).ready(function () {
// Открываем попап
    $('.callback').click(function (e) { 
        e.preventDefault();
        $('.popup').fadeIn(300);
        $('.popup').css('display', 'flex');
        $('body').css('overflow', 'hidden');
        $('.popup__callback').fadeIn(300);
        $('.popup__fast, .popup__agree').css('display', 'none');
    });

    $('.fast--request').click(function (e) { 
        e.preventDefault();
        $('.popup').fadeIn(300);
        $('.popup').css('display', 'flex');
        // $('body').css('overflow', 'hidden');
        $('.popup__fast').fadeIn(300);
        $('.popup__callback, .popup__agree').css('display', 'none');
    });

// Закрываем попап
    $('.close').click(function (e) { 
        e.preventDefault();
        $('.popup').fadeOut(300);
        $('body').css('overflow', 'visible');
        $('.popup--close').css('display', 'none'); // Делаем общий класс для всех попап. Позвовляет закрывать все сразу.
    });

// Закрываем попап по клику вне 
$(".popup").on('click', function (e) {
    if (e.target == this) $(".popup").fadeToggle('fast');
    $('body').css('overflow', 'auto');
})

// Плавный скрол по якорям 
    $('.full__request').on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

});