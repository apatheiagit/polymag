$(function(){

  $('.sandwitch').click(function(){
    $('.top-menu').toggleClass('top-menu--mobile-open');
  });

  $('.home-svg').addClass('animate');

  $('.section-home').addClass('intro-started');
  
  $('.col-rectangle').click(function(){
    $('.section-services').css('zIndex', 500);
    $('.solution-details').css('zIndex', 500);
    $('.solution-details').addClass('solution-details-open');
    var id = $(this).children('.rectangle').attr('data-detail');
    $('.solution-detail').hide();
    $('.solution-detail-'+id).show();
  });

  $('.close-buttn').click(function(){
    $('.solution-details').removeClass('solution-details-open');
    $('.section-services').css('zIndex', 100);
    setTimeout(function(){ $('.solution-details').css('zIndex', 0);}, 200); 
  });

  $('.people-small .item .container-block').click(function(){
    if (!mobile){ 
      if($(this).parent().hasClass('active')){
        $(this).parent().removeClass('active');
        $('.people-small .item').removeClass('disappear');
        //setTimeout(function(){ $('.people-small .item').removeClass('disappear');}, 100);
      }else{
        $('.people-small .item').addClass('disappear');
        $(this).parent().removeClass('disappear').addClass('active');
      }
    }
    //$('.people-small .item').not(this).toggleClass('disappear');
    //$(this).toggleClass('active');
  });

  $('.nav-block').click(function(){
    var next = $(this).attr('data-next');
    $('.people-small .item').addClass('disappear');
    $(this).parent().removeClass('active').addClass('disappear');
    $('.item-'+next).removeClass('disappear').addClass('active');
  }); 

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { 
      $('.solution-details').removeClass('solution-details-open');
      $('.section-services').css('zIndex', 100);
      setTimeout(function(){ $('.solution-details').css('zIndex', 0);}, 200); 
    }
  });

  var services = $('.section-services').offset().top - 60;

  $(window).scroll(function () {
      if ($(this).scrollTop() > services) {
        $('.top-menu').addClass('top-menu--open');
      } else {
        $('.top-menu').removeClass('top-menu--open');
      }
  });

  $('.logo-small a').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 400);
      return false;
  });

  $('.nav a').click(function(){
        $('.nav a.active').not(this).removeClass('active');
        $(this).addClass('active');
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 70}, 700);
        return false; 
  });

});
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 || $(window).width() < 768
 ){
    return true;
  }
 else {
    return false;
  }
}
