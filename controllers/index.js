exports.home = function(req, res, next) {
    res.render('index', { title: 'Express' });
  }
  exports.projects = exports.home = function(req, res, next) {
    res.render('index', { title: 'Projects' });
  }