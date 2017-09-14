var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {

  User.get(function (result) {
    res.send({author: result});
  })
})

module.exports = router;
