var express = require('express');
var router = express.Router();
var CrashCollection = require('./CrashModele.js')
var RouletteCollection = require('./RouletteModele.js')



//récupérer la mise

router.get('/crash', function(req, res) {
    CrashCollection.find({}, function (error, results) {
        res.json(results);
    });
  
});


//Miser

router.post('/post', function(req, res) {
     var array = req.body.array;
     (array, 0, array.length -1, function (result) {
      res.json(result); 
      });
});   

module.exports = router;