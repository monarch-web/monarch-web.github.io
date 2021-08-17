
$('#q1-next').on('click', function(){
    if ($('#q1').prop('checked') == true) {
        $('#q1-next').attr('href', './f1.html');
    } else {
        $('#q1-next').attr('href', './q2.html');
    }    
});


$('#q2-next').on('click', function(){
    if ($('#q2').prop('checked') == true) {
        $('#q2-next').attr('href', './q3.html');
    } else {
        $('#q2-next').attr('href', './f2.html');
    }    
});

$('#q4a-next').on('click', function(){
    if ($('#q4a').prop('checked') == true) {
        $('#q4a-next').attr('href', './q5.html');
    } else {
        $('#q4a-next').attr('href', './q4b.html');
    }    
});


$('#q4b-next').on('click', function(){
    if ($('#q4b').prop('checked') == true) {
        $('#q4b-next').attr('href', './f3.html');
    } else {
        $('#q4b-next').attr('href', './q5.html');
    }    
});

$('#q6-next').on('click', function(){
    if ($('#q6').prop('checked') == true) {
        $('#q6-next').attr('href', './q7.html');
    } else {
        $('#q6-next').attr('href', './f6.html');
    }    
});


$('.additional__information__vip').on('click', function() {
    $('.popup-container').toggleClass('show');
    $('.container').toggleClass('blur')
});

$('.close').on('click', function() {
    $('.popup-container').toggleClass('show');
    $('.container').toggleClass('blur')
});

$('.vip').on('click', function() {
    $('.popup-container').toggleClass('show');
    $('.container').toggleClass('blur')
});