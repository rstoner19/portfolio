(function(module){
  var aboutView = {};

  aboutView.index = function(repo){
    var template = Handlebars.compile($('#stats-template').text());
    console.log('test');
    return template(repo);
  };

  module.aboutView = aboutView;
}(window));
