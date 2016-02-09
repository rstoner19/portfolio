'use strict';
Portfolio.all = [];
var portfolios = {};

function Portfolio(portInfo){
  this.title = portInfo.title;
  this.projectUrl = portInfo.projectUrl;
  this.category = portInfo.category;
  this.image = portInfo.image;
  this.createdOn = portInfo.createdOn;
  this.detail = portInfo.detail;
}

Portfolio.prototype.toHtml = function(){
  var template = Handlebars.compile($('#port-template').text());
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
  portData.forEach(function(ele) {
    Portfolio.all.push(new Portfolio(ele));
  });
};

Portfolio.fetchAll = function() {
  if (localStorage.portData) {
    Portfolio.loadAll(JSON.parse(localStorage.portData));
    portfolios.initIndexPage();
  } else {
    $.getJSON('data/portfolio.json')
    .done(function(data) {
      localStorage.setItem('portData', JSON.stringify(data));
      Portfolio.loadAll(JSON.parse(localStorage.portData));
      portfolios.initIndexPage();
    });
  }
};

function displayAboutMe(ele){
  var $aboutMe = $('#about-me');
  $aboutMe.find('h3').text(ele.fullName);
  $aboutMe.find('p').append(ele.bio);
};
displayAboutMe(aboutMe);
