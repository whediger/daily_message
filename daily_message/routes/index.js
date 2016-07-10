var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newuser', function(req, res, next) {
  res.render('newuser');
});


module.exports = router;
