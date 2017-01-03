// Joe's Simple Calculator


// Define global variables


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 1) {
      $('#top-nav-bar').addClass('scrolled');
    } else {
      $('#top-nav-bar').removeClass('scrolled');
    };
  });
});






