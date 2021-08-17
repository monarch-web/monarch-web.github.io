    (function($) {
          $(function() {
              $('select').styler();
          });
      })(jQuery);
    $(document).ready(function() {
      $('.delete').click(function(){
        $('#image-preview').removeAttr('style');
        $("#image-upload").val('');
      });
      $('.has-child').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active',1000);
      });
        $("aside li ul").hide();
        $("aside li ul").parent().click(function(){
            $(this).find("ul").slideToggle();
        });
      $('.overlay').click(function(){
        $(this).fadeOut();$('.popup').fadeOut();
      });
      $.uploadPreview({
        input_field: "#image-upload",   // Default: .image-upload
        preview_box: "#image-preview",  // Default: .image-preview
        label_field: "#image-label",    // Default: .image-label
        label_default: "",   // Default: Choose File
        label_selected: "",  // Default: Change File
        no_label: false                 // Default: false
      });
    });
function simple_tooltip(target_items, name){
$(target_items).each(function(i){
$("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
var my_tooltip = $("#"+name+i);
var height = $("#"+name+i).height();
var coef = 2;
if(i==5){ coef = 1.5; }
if(i==4){ coef = 1.8; }
if(i==3){ coef = 1.7; }
$(this).removeAttr("title").mouseover(function(){
  my_tooltip.css({opacity:1}).fadeIn(400);
}).mousemove(function(kmouse){


  my_tooltip.css({left:kmouse.pageX - 20, top:kmouse.pageY-(height*coef)});
}).mouseout(function(){
my_tooltip.fadeOut(400);
});
});
}
$(document).ready(function(){
  // BURGER 
  $('.burger-menu').click(function () {
    $('.burger-menu').css('display', 'none')
    $('aside').animate({
      opacity: '1',
      minHeight: '692px',
      width: '98vw',
    }, 100)
    $('aside').css({
      'position': 'absolute',
      'z-index' : '5555',
      'height': 'auto',
    })

    $('.logo').css('display', 'none');
    $('.prof').css('display', 'none');
    $('.page-main').css('padding', '4px');
  })

  $('.close-burger').click(function() {
    $('.burger-menu').css('display', 'block')
    $('aside').animate({
			opacity: '0',
			height: '0',
			width: '0',
    },100)
    $('aside').css({
      'display': 'block'
    })

    $('.page-main').css('padding', '25px 10px 24px 10px');
  })


  simple_tooltip("a.circle","toolt");
  if ($(window).width() < 576){

  }
  else if ($(window).width() < 475) {
    $('aside').click(function() {
      $('.bcg').fadeIn()
      setTimeout(() => {
        $('aside').css('position', 'absolute')
      }, 400);
      $('aside').css({
        'width': '260px',
        'z-index': '10'
      })
  
      $('.name').animate({opacity: 1}, 400)
      $('.onoff').animate({opacity: 1}, 400)
  
    })
    $(document).mouseup(function (e) {
      var container = $("aside");
       if (e.target.className == 'bcg') {
        container.css({
          'width': '55px',
          'position': 'relative'
        });
        $('.bcg').fadeOut()
        $('.name').animate({opacity: 0}, 1)
        $('.onoff').animate({opacity: 0}, 1)
      }})}
   else if ($(window).width() < 1025) {
    $('aside').click(function() {
      $('.bcg').fadeIn()
      setTimeout(() => {
        $('aside').css('position', 'absolute')
      }, 400);
      $('aside').css({
        'width': '260px',
        'z-index': '10'
      })
  
      $('.name').animate({opacity: 1}, 400)
      $('.onoff').animate({opacity: 1}, 400)
  
    })
    $(document).mouseup(function (e) {
      var container = $("aside");
       if (e.target.className == 'bcg') {
        container.css({
          'width': '89px',
          'position': 'relative'
        });
        $('.bcg').fadeOut()
        $('.name').animate({opacity: 0}, 1)
        $('.onoff').animate({opacity: 0}, 1)
      }
      
      function myFunction(x) {
        x.classList.toggle("change");
        $('.collapse-menu').toggle('slow');
        $('body').toggleClass('hidden');
    } 
  });
  }
});
