var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);

router.get('/projects', indexController.projects);

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

module.exports = router;
