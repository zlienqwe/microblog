var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/', function (req, res, next) {
  User.getByName(req.body.username, function (data) {
    var isCurUseExist = data.length;
    //检查是不是已经存在
    if(isCurUseExist){
      // var md5 = crypto.createHash('md5');
      // var password = md5.update(req.body.password).digest('base64');

      if(req.body.password === data[0].password){
        console.log('Cookies: ', req.cookies)
        console.log('Session: ', req.session)
        res.send({flag: 1});
      }else {
        res.send({flag: 0, msg: '密码错误'});
      }
    }else{
      res.send({flag: 0, msg: '用户不存在'});
    }
  })

})

module.exports = router;
