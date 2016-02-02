'use strict';
var portfolios = [];

function Portfolio(portInfo){
  this.title = portInfo.title;
  this.projectUrl = portInfo.Url;
  this.category = portInfo.category;
  this.createdOn = portInfo.createdOn;
  this.detail = portInfo.detial;

}

Portfolio.prototype.toHtml = function(){
  var $newPort = $('article.portDisplay').clone();
  $newPort.attr('data-category', this.category);
  $newPort.find('h2').text(this.title);
  


  $newPort.removeClass('portDisplay');
  return $newPort;
};

portData.forEach(function(ele) {
  portfolios.push(new Portfolio(ele));
});
portfolios.forEach(function(a){
  $('#portfolio').append(a.toHtml());
});
