var express = require('express');
var router = express.Router();
var friends_db = require("./../data/friends.js");


router.get("/api/friends", function(req, res) {
    return res.json(friends_db);
  });

router.post("/api/friends", function(req, res) {

var newFriend = req.body;

friends_db.push(newFriend);

res.json(newFriend);

});

module.exports = router;