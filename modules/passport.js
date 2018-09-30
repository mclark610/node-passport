const passport = require('passport');
const Strategy = require('passport-local');

var db = require('../db');

passport.initialize();
passport.session();

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    db.users.findById(id, function (err, user) {
       if (err) { return cb(err); }
       done(null, user);
   });
});

passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
}));
/*
passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) {
          return cb(err);
      }

      if (!user) {
          console.log("invalid user")
          return cb(null, false,{message: 'Invalid User'});
      }

      if (user.password != password) {
          console.log("invalid password")
          return cb(null, false,{message: 'Invalid Password'} );
      }

      return cb(null, false);
    });
  }));
*/
module.exports = passport;
