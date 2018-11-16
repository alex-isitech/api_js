//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  

var express = require('express');

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 
 
var app = express(); 
var router = require('./router-users');
var router2 = require('./router-2');
var bodyParser = require("body-parser");
var mongoose = require('mongoose') ;

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/gambling' , { useNewUrlParser: true })

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
console.log("Connexion");

});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 app.use('/api', router);
 app.use('/', router2);
// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});
