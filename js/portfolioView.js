'use strict';
// ADD AN IFFE
var portfolioView = {};

portfolioView.handleNav = function() {
  $('.about').on('click', function(){
    $('#about-me').fadeIn(500);
    $('#portfolio').hide();
  });
  $('.home').on('click', function(){
    $('#portfolio').show();
    $('#about-me').toggle();
  });
};

portfolioView.handleNav();
