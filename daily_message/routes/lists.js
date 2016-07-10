var express = require('express');
var router = express.Router();
var db = require('../db/api');
var auth = require('../auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/newuser', function(req, res, next) {
//   res.render('newuser');
// });

router.get('/home', function(req, res, next) {
  db.findUserById(req.session.userId)
  .then(function(user){
    res.render('home', {user: user})
  })
});


module.exports = router;
