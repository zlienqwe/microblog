var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Poster = require('../models/poster');
var Comment = require('../models/comment');


function ifUserExist(req, res, callback) {
  User.getById(req.body.user_id, function (data) {
    var isCurUseExist = data.length;
    //检查是不是已经存在
    if(isCurUseExist){
      callback(req, data)
    }else{
      res.send({flag: 0, msg: '用户不存在'});
    }
  })
}

router.post('/detail', function (req, res, next) {
  Poster.getCurrent(req.body.id, function (result) {
    res.send({flag: 1, data: result[0]});
  })
})
router.post('/delete', function (req, res, next) {
  Comment.deleteCommentByPosterId(req.body.id, function (result) {
    Poster.deleteCurrent(req.body.id, function (result) {
      res.send({flag: 1});
    })
  })
})
router.post('/new', function (req, res, next) {
  ifUserExist(req, res, function (req, data) {
    Poster.save(req.body, function () {
      res.send({flag: 1})
    })
  })
});

router.post('/edit', function (req, res, next) {
  ifUserExist(req, res, function (req, data) {
    Poster.editThisPoster(req.body, function () {
      res.send({flag: 1})
    })
  })
});

router.get('/', function (req, res, next) {
  Poster.getAll(function (result) {
    res.send({flag: 1, data: result});
  })
});


router.post('/search', function (req, res, next) {
  Poster.getAll(function (result) {
    res.send({flag: 1, data: result});
  })
});

module.exports = router;
