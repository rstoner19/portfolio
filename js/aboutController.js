(function(module){
  var aboutController = {};

  aboutController.index = function(){
    // repos.requestRepos(aboutView.index);
    $('#portfolio').hide();
    $('#about-me').show();
  };

  module.aboutController = aboutController;
})(window);
