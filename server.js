var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 
var friends_db = require("./app/data/friends.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require("./app/routing/htmlRoutes.js")); 
app.use(require("./app/routing/apiRoutes.js")); 


app.listen(PORT, function(){
    console.log("Connected to port " + PORT)
});

