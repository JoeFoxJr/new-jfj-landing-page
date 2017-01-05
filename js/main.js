
$(document).ready(function() {

  // Add class to #top-nav-bar upon scrolling
  $(window).scroll(function() {

    if ($(window).scrollTop() > 1) {
      $('#top-nav-bar').addClass('scrolled-mid');
    } else {
      $('#top-nav-bar').removeClass('scrolled-mid');
    };

    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('#top-nav-bar').addClass('scrolled-bottom');
    } else {
      $('#top-nav-bar').removeClass('scrolled-bottom');
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






