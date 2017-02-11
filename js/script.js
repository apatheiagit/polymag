$(function(){
  /*sectionHeight();
  $(window).resize(function(){
    sectionHeight();
  });*/
  $('.sandwitch').click(function(){
    $('.top-menu').toggleClass('top-menu--mobile-open');
  });
  $('.home-svg').addClass('animate');
  $('.section-home').addClass('intro-started');
  $('.col-rectangle').click(function(){
    $('.solution-details').addClass('solution-details-open');
    var id = $(this).children('.rectangle').attr('data-detail');
    $('.solution-detail').hide();
    $('.solution-detail-'+id).show();
  });
  $('.close-buttn').click(function(){
    $('.solution-details').removeClass('solution-details-open');
  });
  $('.people-small .item').click(function(){
    $('.people-small .item').not(this).toggleClass('disappear');
    $(this).toggleClass('active');

  });  
  $(document).keyup(function(e) {
    if (e.keyCode == 27) { 
      $('.solution-details').removeClass('solution-details-open');
    }
  });
  $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          $('.icon-to-top').fadeIn();
      } else {
          $('.icon-to-top').fadeOut();
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
  if (!mobile){    
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
  }
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