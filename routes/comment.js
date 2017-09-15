var express = require('express');
var router = express.Router();
var Comment = require('../models/comment')


router.post('/get', function (req, res, next) {
  Comment.getByPosterId(req.body.id, function (result) {
    res.send({flag: 1, data: result});
  })
})

router.post('/new', function (req, res, next) {
  var now = Date.now();
  var data = req.body;
  data.create_time = now;
  Comment.addCommentForCurrentPoster(data, function (result) {
    res.send({flag: 1, result: data});
  })
})


module.exports = router;
