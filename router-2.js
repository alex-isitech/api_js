var express = require('express');
var router = express.Router();
var CrashCollection = require('./model_Crash.js')
var RouletteCollection = require('./model_Roulette.js')
var passport = require('passport')
var SteamStrategy = require('./Strategy')
var session = require('express-session')
var authRoutes = require('./auth');
var steam   = require('steam-login');
/*
****************************
*   Methode Alex_Redirect  *
****************************
*/

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3001/',
    realm: 'http://localhost:3001/',
    apiKey: '0692878A6641981B5B9BD3A72A3A7FC5'
  },
  function(identifier, profile, done) {

      return done(null,identifier, profile);
  }
));

// var router = express();


//router.set('views', __dirname + '/views');
// outer.set('view engine', 'ejs');

router.use(passport.initialize());
router.use(passport.session());
router.use(express.static(__dirname + '/../../public'));

// get /auth/steam :

router.get('/auth/steam',
  passport.authenticate('steam'),
  function(req, res) {});

 // get /auth/steam/return :

router.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/login' }),
  function(req, res) {

    res.redirect('/');
  });

 router.use(session({
    secret: 'your secret',
    name: 'name of session id',
    resave: true,
    saveUninitialized: true}));
    
  router.get('/', function(req, res){
    res.render('index', { user: req.user });
   });
  
  router.get('/account', ensureAuthenticated, function(req, res){
    res.render('account', { user: req.user });
  });
  
   router.get('/logout', function(req, res){
    req.logout();
     res.redirect('/');
  });

  
 router.use('/auth', authRoutes);
  
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
  }

  module.exports = router;