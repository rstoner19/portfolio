'use strict';
var portfolios = [];

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
  this.daysAgo = parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000);
  return template(this);
};

portData.sort(function(a,b) {
  return (new Date(b.createdOn)) - (new Date(a.createdOn));
});

portData.forEach(function(ele) {
  portfolios.push(new Portfolio(ele));
});
portfolios.forEach(function(a){
  $('#portfolio').append(a.toHtml());
});

function displayAboutMe(ele){
  var $aboutMe = $('#about-me');
  $aboutMe.find('h3').text(ele.fullName);
  $aboutMe.find('p').append(ele.bio);
};
displayAboutMe(aboutMe);
