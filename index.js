var express = require('express');


var hostname = 'localhost'; 
var port = 3000; 
 
var app = express(); 
var router = require('./router');
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

app.use('/', router);


app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});
