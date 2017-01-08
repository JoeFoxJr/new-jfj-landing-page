
$(document).ready(function() {

  // Add class to #top-nav-bar upon load, resize, or scroll
  $(window).on('load resize scroll', function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('#top-nav-bar').addClass('scrolled-contact');
      $('#top-nav-bar').removeClass('scrolled-title scrolled-about scrolled-projects');
    } else  if($(window).scrollTop() >= $('#contact').offset().top - $('#top-nav-bar').outerHeight(true)) {
      $('#top-nav-bar').addClass('scrolled-contact');
      $('#top-nav-bar').removeClass('scrolled-title scrolled-about scrolled-projects');
    } else  if($(window).scrollTop() >= $('#projects').offset().top - $('#top-nav-bar').outerHeight(true)) {
      $('#top-nav-bar').addClass('scrolled-projects');
      $('#top-nav-bar').removeClass('scrolled-title scrolled-about scrolled-contact');
    } else  if($(window).scrollTop() >= $('#about').offset().top - $('#top-nav-bar').outerHeight(true)) {
      $('#top-nav-bar').addClass('scrolled-about');
      $('#top-nav-bar').removeClass('scrolled-title scrolled-projects scrolled-contact');
    } else  if($(window).scrollTop() > 0) {
      $('#top-nav-bar').addClass('scrolled-title');
      $('#top-nav-bar').removeClass('scrolled-about scrolled-projects scrolled-contact');
    } else {
      $('#top-nav-bar').removeClass('scrolled-title scrolled-about scrolled-projects scrolled-contact');
    };
  });

  // Enable smooth scrolling for each same-page anchor
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });


  // Toggle 'hidden' class on the top link-bar-hover-text
  $('.link-bar-resume').on('mouseenter mouseleave',function(){
    $('.link-bar-hover-resume').toggleClass('hidden');
  });
  $('.link-bar-strava').on('mouseenter mouseleave',function(){
    $('.link-bar-hover-strava').toggleClass('hidden');
  });
  $('.link-bar-linkedin').on('mouseenter mouseleave',function(){
    $('.link-bar-hover-linkedin').toggleClass('hidden');
  });
  $('.link-bar-instagram').on('mouseenter mouseleave',function(){
    $('.link-bar-hover-instagram').toggleClass('hidden');
  });
  $('.link-bar-twitter').on('mouseenter mouseleave',function(){
    $('.link-bar-hover-twitter').toggleClass('hidden');
  });
  $('.link-bar-github').on('mouseenter mouseleave',function(){
    $('.link-bar-hover-github').toggleClass('hidden');
  });
  $('.link-bar-codecademy').on('mouseenter mouseleave',function(){
    $('.link-bar-hover-codecademy').toggleClass('hidden');
  });
  $('.link-bar-email').on('mouseenter mouseleave',function(){
    $('.link-bar-hover-email').toggleClass('hidden');
  });

});














