var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Verifyme | Home' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Verifyme | Login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Verifyme | Register' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Verifyme | Register' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Verifyme | Home' });
});

router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Verifyme | Home' });
});


module.exports = router;
