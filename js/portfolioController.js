(function(module){
  var portfolioController = {};
  Portfolio.fetchAll(Portfolio.initIndexPage);

  portfolioController.index = function (){
    $('#portfolio').show();
    $('#about-me').hide();
  };

  module.portfolioController = portfolioController;
})(window);
