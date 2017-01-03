// Add class to #top-nav-bar upon scrolling
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 1) {
      $('#top-nav-bar').addClass('scrolled');
    } else {
      $('#top-nav-bar').removeClass('scrolled');
    };
  });
});






