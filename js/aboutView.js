(function(module){
  var aboutView = {};

  var render = function(repo){
    console.log(repo.name);
    var template = Handlebars.compile($('#about-me-template').text());
    return template(repo);
  };

  aboutView.index = function(){
    $('.stats').append(repos.all.map(render));
  };

  module.aboutView = aboutView;
}(window));
