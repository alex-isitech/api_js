var express = require('express');
var router = express.Router();
var CrashCollection = require('./model_Crash.js')
var RouletteCollection = require('./model_Roulette.js')


// *** Méthodes GET : ***

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

// get_bet_Roulette :

router.get('/get_bet_Roulette/:session', function(req, res) {
    RouletteCollection.find({session : req.params.session}, function (error, results) { 
        res.json(results);
    });
  
});

// get_bet_Crash :

router.get('/get_bet_Crash/:session', function(req, res) {
   CrashCollection.find({session : req.params.session}, function (error, results) { 
        res.json(results);
    });
  
});

// *** Méthodes POST : ***

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

module.exports = router;