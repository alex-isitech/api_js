var express = require('express');
var router = express.Router();
var CrashCollection = require('./model_Crash.js')
var RouletteCollection = require('./model_Roulette.js')

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

// get_depotCrash_byUser

router.get('/get_depotCrash_byUser/:player', function(req, res) {
    CrashCollection.find({player : req.params.player}, function (error, results) { 
         res.json(results);
     });
   
 });

 // get_depotRoulette_byUser

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

// UpdateDepotRouletteByUser :

router.put('/updateDepotRoulette/:player', function(req, res) {

    RouletteCollection.findOneAndUpdate({player : req.params.player}, { depot: req.body.depot}, function(err, crash) { 
        if (err) throw err;
        res.json('Joueur mis a jour avec succès !');
    
    }); 
    
});  


// UpdateNumCbRouletteByUser :

router.put('/updateNumCbRoulette/:player', function(req, res) {

    RouletteCollection.findOneAndUpdate({player : req.params.player}, { num_cb: req.body.num_cb}, function(err, crash) { 
        if (err) throw err;
        res.json('Joueur mis a jour avec succès !');
    
    }); 
    
});

// UpdateDepotCrashByUser :

router.put('/updateDepotCrash/:player', function(req, res) {

    CrashCollection.findOneAndUpdate({player : req.params.player}, { depot: req.body.depot}, function(err, crash) { 
        if (err) throw err;
        res.json('Joueur mis a jour avec succès !');
    
    }); 
    
});  


// UpdateNumCbCrashByUser :

router.put('/updateNumCbCrash/:player', function(req, res) {

    CrashCollection.findOneAndUpdate({player : req.params.player}, { num_cb: req.body.num_cb}, function(err, crash) { 
        if (err) throw err;
        res.json('Joueur mis a jour avec succès !');
    
    }); 
    
});  


module.exports = router;