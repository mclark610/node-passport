const express = require('express');
const router = express.Router();
const flash = require('connect-flash');
const db = require('../db');

const passport = require( '../modules/passport');


router.use(flash());
router.use(passport.initialize());
router.use(passport.session());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/secure2',
require('connect-ensure-login').ensureLoggedIn('/user/login'),
function(req, res){
    res.render('secure', {
        title:'Secure Express 2',
        username: req.user.username,
        email: req.user.email
    });
});

router.get('/secure',
require('connect-ensure-login').ensureLoggedIn('/user/login'),
function(req, res){
    res.render('secure', {
        title:'Secure Express ',
        message: req.flash('info'),
        username: req.user.username,
        email: req.user.email
    });
});

router.get('/flash', function(req, res){
  req.flash('info', 'Hi there!')
  res.redirect('/secure');
});

router.get('/no-flash', function(req, res){
  res.redirect('/secure');
});

module.exports = router;
