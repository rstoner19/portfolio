(function(module){
  var aboutController = {};


  aboutController.index = function(ctx, next){
    $('#portfolio').hide();
    $('#about-me').show();
    next();
  };

  module.aboutController = aboutController;
})(window);
