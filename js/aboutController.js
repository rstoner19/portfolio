(function(module){
  var aboutController = {};
  console.log(repos.all);

  aboutController.index = function(){
    $('#portfolio').hide();
    $('#about-me').show();
    repos.requestRepos(aboutView.index);
  };

  module.aboutController = aboutController;
})(window);
