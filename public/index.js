var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


// Create the Application
var app = express();

// Milddleware required for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Registered Paths
app.use('/about', function(req, res, next){
  res.send('Hello world!');
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/turnosrd');
mongoose.connection.once('open',function(){
  console.log('Listenning on port 3000');
  app.listen(3000);
});
