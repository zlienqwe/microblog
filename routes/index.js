var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // res.render('index', { title: '微博' });
  res.send({aa:'dd'})
});

module.exports = router;
