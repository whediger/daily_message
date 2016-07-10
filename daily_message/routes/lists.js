var express = require('express');
var router = express.Router();
var db = require('../db/api');
var auth = require('../auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get('/newuser', function(req, res, next) {
//   res.render('newuser');
// });

router.get('/lists', function(req, res, next) {
  db.getAllLists()
  .then(function(lists) {
    console.log(lists);
    res.render('lists', {lists: lists})
  })
});

router.get('/home', function(req, res, next) {
  db.findUserById(req.session.userId)
  .then(function(user){
    res.render('home', {user: user})
  })
});


module.exports = router;
