var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

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
  res.send('Hello World!');
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/turnosrd');

mongoose.connection.once('connected', function(){
  console.log("Database connected successfully");
});

mongoose.connection.once('open',function(){
  // Load the models
  app.models = require('./models/index.js');
  
  // Load the rest-ful service routes
  var routes = require('./routes.js');
  _.each(routes, function(controller, route){
    app.use(route, controller(app, route));
  });
  
  console.log('Listenning on port 3000');
  app.listen(3000);
});
