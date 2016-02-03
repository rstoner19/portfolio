'use strict';

var portfolioView = {};

portfolioView.populateFilters = function() {

};

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
