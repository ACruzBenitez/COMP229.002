exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
  }
  exports.projects = exports.home = function(req, res, next) {
    res.render('index', { title: 'Projects' });
  }