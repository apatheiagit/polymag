$(function(){
  sectionHeight();
  $(window).resize(function(){
    sectionHeight();
  });
  $('.sandwitch').click(function(){
    $('.top-menu').toggleClass('top-menu--mobile-open');
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
  function sectionHeight() {
    if ($(window).height() > 700){
      $('.section').height($(window).height());
    }
  }
})