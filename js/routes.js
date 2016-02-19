page('/',
portfolioController.index,
Portfolio.fetchAll(Portfolio.initIndexPage));
page('/about/',
aboutController.index,
repos.requestRepos(aboutView.index)
);

page();
