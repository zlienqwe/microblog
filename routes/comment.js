var express = require('express');
var router = express.Router();
var Comment = require('../models/comment')


router.post('/get', function (req, res, next) {
  Comment.getByPosterId(req.body.id, function (result) {
    res.send({flag: 1, data: result});
  })
})

router.post('/new', function (req, res, next) {
  Comment.addCommentForCurrentPoster(req.body, function (result) {
    res.send({flag: 1});
  })
})

router.post('/delete', function (req, res, next) {
  Comment.deleteCurrent(req.body.id, function (result) {
    res.send({flag: 1});
  })
})


module.exports = router;
