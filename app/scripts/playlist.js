/* Attempt at parralax */
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.portfolio').css('top', -(scrolled * 0.2) + 'px');
}



$(window).scroll(function(e){
    parallax();
});

///////////////////* overlaybutton */////////////////////

$('#toggle').click(function() {
$('.portfolio').addClass('open')
$('.overlay').toggleClass('open');
  });

  $('#toggle').click(function() {
  $('#firstSlideShow').toggleClass('open');
    });

    $('#toggle').click(function() {
    $('.firstSet').addClass('open');
      });

    $('#toggle').click(function() {
   $('.buttons').addClass('open');
     });

     ///////////////////* closeoverlay */////////////////////

  $('#close').click(function() {
  $('.overlay').removeClass('open')
  $('.portfolio').removeClass('open');
    });

    $('#close').click(function() {
    $('.buttons').removeClass('open');
      });

    $('#close').click(function() {
    $('#firstSlideShow').removeClass('open');
      });

      ///////////////////* aboutme */////////////////////


    $('#aboutMe').click(function() {
      $('.portfolio').addClass('open')
    $('.aboutMe').addClass('open')
    $('.overlay').removeClass('open')
    $('.contact').removeClass('open');
      });

      $('#home').click(function() {
      $('.aboutMe').removeClass('open')
      $('.portfolio').removeClass('open');
        });


///////////////////* contact */////////////////////

        $('#contact').click(function() {
           $('.portfolio').addClass('open')
        $('.contact').toggleClass('open')
         $('.overlay').removeClass('open')
        $('.aboutMe').removeClass('open');
          });

          $('#back').click(function() {
          $('.contact').removeClass('open')
          $('.portfolio').removeClass('open');
            });

///////////////////* slideshow */////////////////////

   $('.firstPhoto').click(function() {         $('.firstSet').addClass('open')
   $('.one').removeClass('open')
   $('.secondSet').removeClass('open')
   $('.two').removeClass('open')
   $('.thirdSet').removeClass('open')
   $('.three').removeClass('open')
   $('.fourthSet').removeClass('open')
   $('.four').removeClass('open')
   $('.fifthSet').removeClass('open')
   $('.five').removeClass('open');
    });


   $('.secondPhoto').click(function() {
   $('.secondSet').addClass('open')
   $('.two').addClass('open')
   $('.firstSet').removeClass('open')
   $('.one').addClass('open')
   $('.thirdSet').removeClass('open')
   $('.three').removeClass('open')
   $('.fourthSet').removeClass('open')
   $('.four').removeClass('open')
   $('.fifthSet').removeClass('open')
   $('.five').removeClass('open');
   });

   $('.thirdPhoto').click(function() {
   $('.thirdSet').addClass('open')
   $('.three').addClass('open')
   $('.secondSet').removeClass('open')
   $('.two').removeClass('open')
   $('.firstSet').removeClass('open')
   $('.one').addClass('open')
   $('.fourthSet').removeClass('open')
   $('.four').removeClass('open')
   $('.fifthSet').removeClass('open')
   $('.five').removeClass('open');
    });

   $('.fourthPhoto').click(function() {
   $('.fourthSet').addClass('open')
   $('.four').addClass('open')
   $('.secondSet').removeClass('open')
   $('.two').removeClass('open')
   $('.thirdSet').removeClass('open')
   $('.three').removeClass('open')
   $('.firstSet').removeClass('open')
   $('.one').addClass('open')
   $('.fifthSet').removeClass('open')
   $('.five').removeClass('open');
   });

   $('.fifthPhoto').click(function() {
   $('.fifthSet').addClass('open')
   $('.five').addClass('open')
   $('.secondSet').removeClass('open')
   $('.two').removeClass('open')
   $('.thirdSet').removeClass('open')
   $('.three').removeClass('open')
   $('.fourthSet').removeClass('open')
   $('.four').removeClass('open')
   $('.firstSet').removeClass('open')
   $('.one').addClass('open');
    });


    $('.menu-toggle').on('click', function(){

     console.log('click'); $('.menu').toggleClass('menu--is-closed');

    });
