'use strict';

function Portfolio(portInfo){
  this.projectName = portInfo.projectName;
  this.projectUrl = portInfo.Url;
  this.createdOn = portInfo.createdOn;
  this.detail = portInfo.detial;

}

Portfolio.prototype.toHtml = function(){
  
}
