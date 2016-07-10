var express = require('express');
var router = express.Router();
var db = require('../db/api');
var auth = require('../auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/logout', function(req, res, next){
  req.session = null;
  res.redirect('/');
});

router.get('/newuser', function(req, res, next) {
  res.render('newuser');
});

router.post('/newuser', function(req, res, next) {
  console.log("Hit the route!!!-------------");
  console.log(req.body);
  db.findUserByUsername(req.body.username)
  .then(function(user) {
    console.log('inside then statement --->');
    if (user) {
      res.render('./newuser', {error: ': user already exists'})
    } else {
      auth.createUser(req.body)
      .then(function(id) {
        console.log('inside auth.createuser --------->');
        console.log("session");
        console.log(req.body);
        req.session.userId = id;
        res.redirect('/home', {user: req.body.first_name});
      });
    }
  }).catch(function(err){
    next(err)
  })
});

module.exports = router;
