//引入自定义模块
var checkInfo = require('./loginModule');


//fetch部分后台
var express = require('express');
var app = express();

//bodyParser
var bodyParser = require('body-parser');
// 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', ['mytoken','Content-Type']);
  next();
});
//注册      资源目录
app.post('/register',function(req,res){
  // console.log(req.body.phone)//电话
  var myPhone = req.body.phone;
  var myPwd = req.body.pwd;
  var result = checkInfo.checkPhone(myPhone);
  if(result){
    var isOK = checkInfo.pushJson({phone:myPhone,pwd:myPwd});
    if(isOK){
      res.json({
        state:200,
        msg:'注册成功'
      })
    }else {
      res.json({
        state:300,
        msg:'添加失败，请再次尝试'
      })
    }
  }else {
    res.json({
      state:400,
      msg:'用户名已占用'
    })
  }
  
})
//登陆     资源目录
app.post('/login',function(req,res){
  var myPhone = req.body.phone;
  var myPwd = req.body.pwd;
  var result = checkInfo.checkLogin(myPhone,myPwd);//1 2 0
  console.log(result);
  if(result){
    if(result == 1){
      res.json({
        state:200,
        msg:'登陆成功'
      })
    }else {
      res.json({
        state:250,
        msg:'密码错误'
      })
    }
  }else {
    res.json({
      state:500,
      msg:'该用户不存在，请注册'
    })
  }
  
})

//监听端口
app.listen(8081);