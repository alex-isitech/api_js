var express = require('express');
var router = express.Router();
var CrashCollection = require('./model_Crash.js')
var RouletteCollection = require('./model_Roulette.js')
var passport = require('passport')
var SteamStrategy = require('./Strategy')
var session = require('express-session')
var authRoutes = require('./auth');


/*
****************************
*     Methodes GET         *
****************************
*/

// get_player_Crash :

router.get('/get_player_Crash', function(req, res) {
    CrashCollection.find({}, function (error, results) {
        res.json(results);
    });
  
});

// get_player_Roulette :

router.get('/get_player_Roulette', function(req, res) {
    RouletteCollection.find({}, function (error, results) {
        res.json(results);
    });
  
});

// get_bet_Roulette/:session :

router.get('/get_bet_Roulette/:session', function(req, res) {
    RouletteCollection.find({session : req.params.session}, function (error, results) { 
        res.json(results);
    });
  
});

// get_bet_Crash/:session :

router.get('/get_bet_Crash/:session', function(req, res) {
   CrashCollection.find({session : req.params.session}, function (error, results) { 
        res.json(results);
    });
  
});

// get_depotCrash_byUser/:player :

router.get('/get_depotCrash_byUser/:player', function(req, res) {
    CrashCollection.find({player : req.params.player,  sort: [{"bet": "desc"}]}, function (error, results) { 
         res.json(results); 
      });
   
 });

 // get_depotRoulette_byUser/:player :

router.get('/get_depotRoulette_byUser/:player', function(req, res) {
    RouletteCollection.find({player : req.params.player}, function (error, results) { 
         res.json(results);
     });
   
 });

/*
****************************
*     Methodes POST        *
****************************
*/

// add_player_Crash :

router.post('/add_player_Crash', function(req, res) {
     var body = req.body;
     let Crash = new CrashCollection(body)
     Crash.save(function (err) {
        if (err) { throw err; }
        res.json('Joueur ajouté avec succès !');
      });
     
});   


// add_player_Roulette :

router.post('/add_player_Roulette', function(req, res) {
    var body = req.body;
    let Roulette = new RouletteCollection(body)
    Roulette.save(function (err) {
       if (err) { throw err; }
       res.json('Joueur ajouté avec succès !');
     });
    
}); 

/*
****************************
*     Methodes PUT         *
****************************
*/

// updateDepotRoulette/:player :

router.put('/updateDepotRoulette/:player', function(req, res) {

    RouletteCollection.findOneAndUpdate({player : req.params.player}, { depot: req.body.depot}, function(err, crash) { 
        if (err) throw err;
        res.json('Joueur mis a jour avec succès !');
    
    }); 
    
});  


// updateNumCbRoulette/:player :

router.put('/updateNumCbRoulette/:player', function(req, res) {

    RouletteCollection.findOneAndUpdate({player : req.params.player}, { num_cb: req.body.num_cb}, function(err, crash) { 
        if (err) throw err;
        res.json('Joueur mis a jour avec succès !');
    
    }); 
    
});

// updateDepotCrash/:player :

router.put('/updateDepotCrash/:player', function(req, res) {

    CrashCollection.findOneAndUpdate({player : req.params.player}, { depot: req.body.depot}, function(err, crash) { 
        if (err) throw err;
        res.json('Joueur mis a jour avec succès !');
    
    }); 
    
});  


// updateNumCbCrash/:player :

router.put('/updateNumCbCrash/:player', function(req, res) {

    CrashCollection.findOneAndUpdate({player : req.params.player}, { num_cb: req.body.num_cb}, function(err, crash) { 
        if (err) throw err;
        res.json('Joueur mis a jour avec succès !');
    
    }); 
    
});  

// /*
// ****************************
// *   Methode Alex_Redirect  *
// ****************************
// */

// passport.serializeUser(function(user, done) {
//     done(null, user);
//   });
  
//   passport.deserializeUser(function(obj, done) {
//     done(null, obj);
//   });

// passport.use(new SteamStrategy({
//     returnURL: 'http://localhost:3001/',
//     realm: 'http://localhost:3000/',
//     apiKey: '0692878A6641981B5B9BD3A72A3A7FC5'
//   },
//   function(identifier, profile, done) {

//       return done(null, profile);
//   }
// ));

// // var router = express();

// // configure Express
// // router.set('views', __dirname + '/views');
// // router.set('view engine', 'ejs');

// router.use(passport.initialize());
// router.use(passport.session());
// router.use(express.static(__dirname + '/../../public'));

// // get /auth/steam :

// router.get('/auth/steam',
//   passport.authenticate('steam'),
//   function(req, res) {});

//  // get /auth/steam/return :

// router.get('/auth/steam/return',
//   passport.authenticate('steam', { failureRedirect: '/login' }),
//   function(req, res) {

//     res.redirect('/');
//   });

//  router.use(session({
//     secret: 'your secret',
//     name: 'name of session id',
//     resave: true,
//     saveUninitialized: true}));
    
// //   router.get('/', function(req, res){
// //     res.render('index', { user: req.user });
// //   });
  
//   router.get('/account', ensureAuthenticated, function(req, res){
//     res.render('account', { user: req.user });
//   });
  
//   router.get('/logout', function(req, res){
//     req.logout();
//     res.redirect('/');
//   });
  
//  router.use('/auth', authRoutes);
  
//   function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) { return next(); }
//     res.redirect('/');
//   }

module.exports = router;