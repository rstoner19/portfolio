(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('#portfolio').hide();
    $('#about-me').show();
  };

  module.aboutController = aboutController;
})(window);
