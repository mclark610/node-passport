const express = require('express');
const router = express.Router();

const db = require('../db');

const passport = require( '../modules/passport');
const session      = require('express-session');
const flash = require('connect-flash');

router.use(flash());
router.use(passport.initialize());
router.use(passport.session());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res) {
    res.render('login',{message: req.flash('error')});
})

router.post('/login',
  passport.authenticate('local',{
      failureRedirect: '/user/login',
      failureFlash: true,
  }),
  
  function(req, res) {
      console.log("********LOGIN POST*********: user: " + JSON.stringify(req.user));
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/secure');
  });

router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
    //res.send('logout');
});

router.get('/secure',
require('connect-ensure-login').ensureLoggedIn('/user/login'),
function(req, res){
    res.render('secure', {
        title:'Secure Express ',
        username: req.user.username,
    });
});

router.get('/profile',
    require('connect-ensure-login').ensureLoggedIn('/user/login'),
    function(req, res){
        res.render('profile', {
            title:'Secure Profile ',
            username: req.user.username,
    });
});

module.exports = router;
