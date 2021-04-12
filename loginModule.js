//假数据库
var loginData = [
  {phone:13811688606,pwd:'123'},
  {phone:13538573279,pwd:'www'},
  {phone:15423560421,pwd:'9m1'},
]

//负责检查电话号码在数据库中是否存在
function checkPhone(p){
  for(var i = 0;i<loginData.length;i++){
    if(p == loginData[i].phone){
      return 0;
    }else {
      return 1;
    }
  }
}


//负责将注册信息加入到loginData中
function pushJson(obj){
  loginData.push(obj);
  return true;
}

//负责验证登陆信息是否准确
function checkLogin(p,w){
  
  for(var j = 0;j<loginData.length;j++){
    console.log(loginData[j])
  }
}

module.exports = {
  checkPhone:checkPhone,
  pushJson:pushJson,
  checkLogin:checkLogin
}

