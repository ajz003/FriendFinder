var express = require('express');
var router = express.Router();

  // Define the home page route
  router.get('/', function(req, res) {
    res.send('home page');
  });
  
  // Define the about route
  router.get('/survey', function(req, res) {
    res.send('survey');
  });
  
  
  module.exports = router;

