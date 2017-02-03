$(function(){
  $('.section').height($(window).height());
  $(window).resize(function(){
    $('.section').height($(window).height());
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
})