
//任务一
     function getKeys(obj){
         if(Object.prototype.toString.call(obj) === '[object Object]'){
             var arr = [];
             (function getKeysFn(o, char) {
                 for(var key in o){
                     var newChar = char == '' ? key : char + '.' + key;
                     if (Object.prototype.toString.call(o[key]) === '[object Object]') {
                         getKeysFn(o[key],newChar);
                     }else{
                         arr.push(newChar);
                     }
                 }
             })(obj, '')
             return arr;
         }else{
             console.log('传入的不是一个真正的对象');
         }
    }

    function getValue(obj){
        try{
            console.log(JSON.stringify(obj));
            return JSON.stringify(obj);
        }catch(ex){
            console.log('输入数据的格式存在错误');
        }

    }

//任务二
var obj3 = {};
function merge(obj1,obj2) {
    for (var key in obj1){
    	obj3[key]=obj1[key];
    }
    for (var key in obj2){ 
        if(key in obj3){
        	var arr;
            if(obj3[key] instanceof Array){
	            arr = obj3[key];
	            if(obj2[key] instanceof Array){
	            arr = [...arr, ...obj2[key]];
	            }
	            else{
	            arr.push(obj2[key]);
	            }
            }
            else{
            	arr = [];
	            if(obj2[key] instanceof Array){
	            	arr = [obj3[key], ...obj2[key]];
	            }
	            else{
	            	arr = [obj3[key], obj2[key]];
	            }
       	 	}
       	 	obj3[key] = arr;
       	}
    }	
}
var obj1 = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
  c: 'bar'
}
var obj2 = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo',
  d: 6
}
console.log(obj3)

//任务三
function str(arr,i,j) {  
    if(i!=j) {  
        var temp=arr[i];  
        arr[i]=arr[j];  
        arr[j]=temp;  
    }  
}  
var count=0;  
function stringPermutations(arr) {  
    (function fn(n) { 
        for(var i=n;i<arr.length;i++) {  
            str(arr,i,n);  
            if(n+1<arr.length-1)
                fn(n+1);
            else 
                console.log(arr);
            str(arr,i,n);  
        }  
    })(0);  
}
stringPermutations(["a","b","c"]); 
