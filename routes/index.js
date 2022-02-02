var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/projects', indexController.projects);

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
