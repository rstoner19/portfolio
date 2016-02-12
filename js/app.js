(function(module) {
  'use strict';

  var portfolios = {};
  Portfolio.all = [];
  function Portfolio(ops){
    Object.keys(ops).forEach(function(e, index, keys) {
      this[e] = ops[e];
    },this);
  }

  Portfolio.prototype.toHtml = function(){
    var template = Handlebars.compile($('#port-template').text());
    this.daysAgo = parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000);
    return template(this);
  };

  portfolios.initIndexPage = function() {
    Portfolio.all.forEach(function(a){
      $('#portfolio').append(a.toHtml());
    });
  };

  Portfolio.loadAll = function(portData) {
    portData.sort(function(a,b) {
      return (new Date(b.createdOn)) - (new Date(a.createdOn));
    });
    Portfolio.all = portData.map(function(ele){
      return new Portfolio(ele);
    });
  };

  Portfolio.loadPortfolioInfo = function (source, fn){
    $.getJSON(source)
     .done(function(data) {
       localStorage.setItem('portData', JSON.stringify(data));
       Portfolio.loadAll(JSON.parse(localStorage.portData));
       fn();
     });
  };

  Portfolio.fetchAll = function(fn) {
    if (localStorage.portData) {
      $.ajax({
        type: 'HEAD',
        url: 'data/portfolio.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if(!localStorage.eTag || eTag !== localStorage.eTag){
            localStorage.eTag = eTag;
            Portfolio.loadPortfolioInfo('data/portfolio.json', fn);
          } else {
            Portfolio.loadAll(JSON.parse(localStorage.portData));
            fn();
          };
        }
      });
    } else {
      Portfolio.loadPortfolioInfo('data/portfolio.json', fn);
    }
  };

  function displayAboutMe(ele){
    var $aboutMe = $('#about-me');
    $aboutMe.find('h3').text(ele.fullName);
    $aboutMe.find('p').append(ele.bio);
  };
  displayAboutMe(aboutMe);

  module.Portfolio = Portfolio;
  module.portfolios = portfolios;
})(window);
