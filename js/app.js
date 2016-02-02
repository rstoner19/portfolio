'use strict';
var portfolios = [];

function Portfolio(portInfo){
  this.title = portInfo.title;
  this.projectUrl = portInfo.projectUrl;
  this.category = portInfo.category;
  this.createdOn = portInfo.createdOn;
  this.detail = portInfo.detail;

}

Portfolio.prototype.toHtml = function(){
  var $newPort = $('article.port-display').clone();
  $newPort.find('a:first').attr('href', this.projectUrl);
  $newPort.find('h3').text(this.title);
  $newPort.append('<p>'+this.detail+'</p>');
  $newPort.find('.date-created').text('Created On: ' + this.createdOn);

  $newPort.append('<hr>');
  $newPort.removeClass('port-display');
  return $newPort;
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
