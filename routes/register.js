var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/', function (req, res, next) {
  User.getByName(req.body.username, function (data) {
    //检查是不是已经存在
    var isCurUseExist = data.length;
    if(isCurUseExist){
      res.send({flag: 0, msg: '该用户已存在'});
    }else{
      var newUser = new User({ username: req.body.username, password: req.body.password,
      });
      User.save(newUser, function () {
        res.send({flag: 1});
      })
    }
  })
})

module.exports = router;
