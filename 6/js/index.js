//任务一
Function.prototype.call2 = function (context) {
  var content = context || window;
  content.fn = this;
  var args = [];
  // arguments是类数组对象，遍历之前需要保存长度，过滤出第一个传参
  for (var i = 1, len = arguments.length ; i < len; i++) {
    // 避免object之类传入
    args.push('arguments[' + i + ']');
  }
  var result = eval('content.fn('+args+')');
  delete content.fn;
  return result;
}
function sayInfo(age) {
  console.log("name:"+this.name)
  console.log("age:"+age)
}
var user = {
  name: "zzx"
}
sayInfo.call2(user,100)


//任务二
function addSum(a,b){
    if(!function(c))
            return a+b;
    else
    return function(c) {
        
            return a + b + c;
    }
}
var x = addSum(1,2)