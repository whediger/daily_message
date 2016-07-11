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



//-----+==}=======>
router.use(auth.isLoggedIn);

router.post('/login', function(req, res, next) {
  auth.passport.authenticate('local', function(err, user, info){
    if (err) {
      res.render('./index', {error: err})
    } else if (user) {
      req.session.userId = user.id;
      res.redirect('/home');
    }
  })(req, res, next);
});

router.post('/newuser', function(req, res, next) {
  db.findUserByUsername(req.body.username)
  .then(function(user) {
    if (user) {
      res.render('./newuser', {error: ': user already exists'})
    } else {
      auth.createUser(req.body)
      .then(function(id) {
        req.session.userId = id;
        res.redirect('/home', {user: req.body.first_name});
      });
    }
  }).catch(function(err){
    next(err)
  })
});

module.exports = router;
