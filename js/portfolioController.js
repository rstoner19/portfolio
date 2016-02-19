(function(module){
  var portfolioController = {};

  portfolioController.index = function(ctx, next) {
    ctx.portfolio = Portfolio.all;
    console.log(ctx);
    $('#portfolio').show();
    $('#about-me').hide();
    next();
  };

  module.portfolioController = portfolioController;
})(window);
