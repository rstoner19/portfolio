(function(module){
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback){
    $.get('/github/users/rstoner19/repos' + '?per_page=10' + '&sort=updated'
  ).done(function(data, message, xhr){
    return repos.all = data;
  })
  .done(callback);
    // $.ajax({
    //   url: 'https://api.github.com/users/rstoner19/repos' +
    //   			'?per_page=10&sort=updated',
    //   type: 'GET',
    //   headers: { 'Authorization': 'token ' + githubToken },
    //   success: function(data, message, xhr) {
    //     return repos.all = data;
    //   }
    // })
    // .done(callback);
  };

  module.repos = repos;
}(window));
