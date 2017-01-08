
$(document).ready(function() {

  // add horiz rule to each panel title
  jQuery(".panel-title").append("<hr />");


  // Add class to #top-nav-bar upon scrolling
  // Note: I need to execute this on window.load, resize, or scroll
  $(window).scroll(function() {
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

});






