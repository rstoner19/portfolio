(function(module){
  var aboutView = {};

  aboutView.index = function(repo){
    var template = Handlebars.compile($('#about-me-template').text());
    console.log(repo[0].name);
    return template(repo[0]);
  };

  module.aboutView = aboutView;
}(window));
