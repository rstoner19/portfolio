(function(module){
  var aboutController = {};


  repos.requestRepos(aboutView.index);
  aboutController.index = function(){
    $('#portfolio').hide();
    $('#about-me').show();
  };

  module.aboutController = aboutController;
})(window);
