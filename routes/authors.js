var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {

  User.get(function (result) {
    console.log(result);
    res.send({author: result});
  })
})

module.exports = router;
