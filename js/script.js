$(function(){

  $('#services .section-title').css({visibility:"hidden"}).removeClass('animated fadeInUp');
  $('.rectangle-list').css({visibility:"hidden"}).removeClass('animated fadeInUp');
  $('#about .section-title').css({visibility:"hidden"}).removeClass('animated fadeInRight');
  $('.people-small .item').css({visibility:"hidden"}).removeClass('animated fadeInUp');
  $('#contact .section-title').css({visibility:"hidden"}).removeClass('animated fadeInLeft'); 
  $('.contacts-block').css({visibility:"hidden"}).removeClass('animated fadeInUp');  

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

  var mobile = detectmob();

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
    animateAll();
    if ($(this).scrollTop() > services) {
      $('.top-menu').addClass('top-menu--open');
    } else {
      $('.top-menu').removeClass('top-menu--open');
    }
  });

  $('.logo-small a').click(function () {
    $('.top-menu').toggleClass('top-menu--mobile-open');
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
  });

  $('.nav a').click(function(){
    $('.top-menu').toggleClass('top-menu--mobile-open');
    $('.nav a.active').not(this).removeClass('active');
    $(this).addClass('active');
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top - 70}, 700);
    return false; 
  });
  
  var winHeight = $(window).height();
  function animateAll(){
    var scrollTop = $(window).scrollTop();  
    
    var chapter0 =  $('#home').offset().top;
    var chapter1 =  $('#services').offset().top;   
    var chapter2 =  $('.container-about').offset().top;
    var chapter2_1 =  $('.people-small .item').offset().top;
    var chapter3 =  $('#contact').offset().top; 
    var chapter3_1 =  $('.contacts-block').offset().top;   

    if (winHeight > 1080){
      setTimeout(function(){ $('#services .section-title').addClass('animated fadeInUp'); }, 300);
    }else 
    if((scrollTop + winHeight) >= chapter1){
      $('#services .section-title').css({visibility:"visible"}).addClass('animated fadeInUp'); 
      $('.rectangle-list').css({visibility:"visible"}).addClass('animated fadeInUp');  
    }  

    if((scrollTop + winHeight) >= chapter2){ 
      $('#about .section-title').css({visibility:"visible"}).addClass('animated fadeInUp');
    }  

    if((scrollTop + winHeight) >= chapter2_1){ 
      $('.people-small .item').css({visibility:"visible"}).addClass('animated fadeInUp');
    }   

    if((scrollTop + winHeight) >= chapter3){
      $('#contact .section-title').css({visibility:"visible"}).addClass('animated fadeInUp');
    }

    if((scrollTop + winHeight) >= chapter3_1){
      $('.contacts-block').css({visibility:"visible"}).addClass('animated fadeInUp');     
    }

    if ( scrollTop == 0 ) {
      $('#services .section-title').css({visibility:"hidden"}).removeClass('animated fadeInUp');
      $('.rectangle-list').css({visibility:"hidden"}).removeClass('animated fadeInUp'); 
      $('#about .section-title').css({visibility:"hidden"}).removeClass('animated fadeInUp');
      $('.people-small .item').css({visibility:"hidden"}).removeClass('animated fadeInUp');
      $('#contact .section-title').css({visibility:"hidden"}).removeClass('animated fadeInUp'); 
      $('.contacts-block').css({visibility:"hidden"}).removeClass('animated fadeInUp');    

    }

  }
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
