(function(module){
  var portfolioController = {};

  portfolioController.index = function (){
    Portfolio.fetchAll(Portfolio.initIndexPage);
    $('#portfolio').show();
    $('#about-me').hide();
  };

  module.portfolioController = portfolioController;
})(window);
