var button1 = document.createElement("button");
button1.style.cssText="width:50px;height:20px;background-color:black;color:white"; 
document.body.appendChild(button1);
button1.innerHTML = "上";

var button2 = document.createElement("button");
button2.style.cssText="width:50px;height:20px;background-color:black;color:white"; 
document.body.appendChild(button2);
button2.innerHTML = "下";

var button3 = document.createElement("button");
button3.style.cssText="width:50px;height:20px;background-color:black;color:white"; 
document.body.appendChild(button3);
button3.innerHTML = "左";

var button4 = document.createElement("button");
button4.style.cssText="width:50px;height:20px;background-color:black;color:white"; 
document.body.appendChild(button4);
button4.innerHTML = "右";

var button5 = document.createElement("button");
button5.style.cssText="width:50px;height:20px;background-color:black;color:white"; 
document.body.appendChild(button5);
button5.innerHTML = "大";

var button6 = document.createElement("button");
button6.style.cssText="width:50px;height:20px;background-color:black;color:white"; 
document.body.appendChild(button6);
button6.innerHTML = "小";

var button7 = document.createElement("button");
button7.style.cssText="width:50px;height:20px;background-color:black;color:white"; 
document.body.appendChild(button7);
button7.innerHTML = "置顶";

var div = document.createElement("div");
div.style.cssText="width:300px;height:300px;background-color:green;"; 
document.body.appendChild(div);

function getStyle(parm1,parm2) {
            return parm1.currentStyle ? parm1.currentStyle[parm2] : getComputedStyle(parm1)[parm2];  //parm1,要改变的元素代替名;parm2,要改变的属性名
        }
button1.onclick = function(){
        div.style.marginTop = parseInt(getStyle(div,"marginTop"))-100+"px" ;
        div.style.transition = "all 500ms";
        div.style.WebkitTransition = "all 500ms";
}
button2.onclick = function(){
        div.style.marginTop = parseInt(getStyle(div,"marginTop"))+100+"px" ;
        div.style.transition = "all 500ms";
        div.style.WebkitTransition = "all 500ms";
}
button3.onclick = function(){
        div.style.marginLeft = parseInt(getStyle(div,"marginLeft"))-40+"px" ;
        div.style.transition = "all 500ms";
        div.style.WebkitTransition = "all 500ms";
}
button4.onclick = function(){
        div.style.marginLeft = parseInt(getStyle(div,"marginLeft"))+40+"px" ;
        div.style.transition = "all 500ms";
        div.style.WebkitTransition = "all 500ms";
}
button5.onclick = function(){
        div.style.width = parseInt(getStyle(div,"width"))+40+"px";
        div.style.height = parseInt(getStyle(div,"height"))+40+"px";
        div.style.transition = "all 500ms";
        div.style.WebkitTransition = "all 500ms";
}
button6.onclick = function(){
        div.style.width = parseInt(getStyle(div,"width"))-40+"px";
        div.style.height = parseInt(getStyle(div,"height"))-40+"px";
        div.style.transition = "all 500ms";
        div.style.WebkitTransition = "all 500ms";
}
button7.onclick = function(){
        div.style.marginTop = 0+"px";
        div.style.marginLeft = 0+"px";
        div.style.transition = "all 500ms";
        div.style.WebkitTransition = "all 500ms";
}
