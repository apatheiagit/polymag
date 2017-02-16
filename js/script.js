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

  $('.icon-to-top').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 400);
      return false;
  });

  var paddingTop = '95px';
  if ($(window).height() < 901){
    paddingTop = '50px';
  }
  var speed = 1500;
  var speed2 = 1500;
  var mobile = detectmob();
  /*if (!mobile){    
    $('.page-layout').fullpage({            
      anchors:['home', 'services', 'about', 'contact'],
      verticalCentered: false,
      menu: '.top-menu',
      paddingTop: 0,
      sectionSelector: '.section',
      resize : false,
      //scrollOverflow:true,
      css3: true,
      navigation: true,
      navigationPosition: 'top',
      afterLoad: function(anchorLink, index){
        if(anchorLink == 'home'){
         $('.top-menu').removeClass('top-menu--open');
        }
        if(anchorLink == 'services' || anchorLink == 'about' || anchorLink == 'contact'){
         $('.top-menu').addClass('top-menu--open');
        }
      }        
    });
  }*/
  function sectionHeight() {
    if ($(window).height() > 700){
      $('.section').height($(window).height());
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
