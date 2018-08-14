//格式化日期:
function myDate() {
	var d = new Date();
	var y = d.getFullYear();
	var m1 = d.getMonth();
	var mydate = d.getDate();
	var day = d.getDay()
	var h = d.getHours()
	var m2 = d.getMinutes()
	var s = d.getSeconds()
	switch(day) {
		case 0:
			day = "星期日";
			break;
		case 1:
			day = "星期一";
			break;
		case 2:
			day = "星期二";
			break;
		case 3:
			day = "星期三";
			break;
		case 4:
			day = "星期四";
			break;
		case 5:
			day = "星期五";
			break;
		case 6:
			day = "星期六";
			break;
	}
	return y + "年" + zero(m1 + 1) + "月" + zero(mydate) + "日 " + day + " " + zero(h) + ":" + zero(m2) + ":" + zero(s);
}

//获取随机颜色
function randomColor(){
	var r = parseInt(Math.random()*255);
	var g = parseInt(Math.random()*255);
	var b = parseInt(Math.random()*255);

		return "rgb("+r+","+g+","+b+")";
}

//获取四位数随机验证码
function randomNumber(){
	function random(a,b){
		return Math.round(Math.random()*(a-b)+b);
	}
	var str = "";
	for(var i=0;i<3;i++){
		var num1 = String.fromCharCode(random(48,57))
		var num2 = String.fromCharCode(random(97,122))
		var num3 = String.fromCharCode(random(65,90))
		str += num1+num2+num3;
	}
	var str2 = "";
	for(var i=0;i<4;i++){
		var random = Math.round(Math.random()*(str.length-1));  //随机索引
		str2 += str[random];
	}	
	return str2;		
}

// 十六位颜色随机
function random16Color(){;
	r = Math.round(Math.random()*255).toString(16)
	g = Math.round(Math.random()*255).toString(16)
	b = Math.round(Math.random()*255).toString(16)
	return random ="#"+zero(r)+zero(g)+zero(b);
}				

//补零:
function zero(n) {
	if(n < 10 || n.length < 2) {
		return "0" + n;
	} else {
		return n;
	}
}

//获取非行内样式
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

//阻止事件冒泡
function stopBubble(a) {
	if(a.stopPropagation) {
		a.stopPropagation()
	} else {
		a.cancelBubble = true;
	}
}

//阻止默认事件
function stopDefault(b) {
	if(b.preventDefault) {
		b.preventDefault()
	} else {
		b.returnValue = false;
	}
}


//表单中加行 +最后删除
function addTr(a,b,c){
	var td1 = document.createElement("td");
	td1.innerHTML = a;
	var td2 = document.createElement("td");
	td2.innerHTML = b;
	var td3 = document.createElement("td");
	td3.innerHTML = c;
	var td4 = document.createElement("td");
	td4.innerHTML = "<span>删除</span>";
	var tr = document.createElement("tr");
	tr.appendChild(td1)
	tr.appendChild(td2)
	tr.appendChild(td3)
	tr.appendChild(td4)
	otab.appendChild(tr)
//删除 行	
	var aspan = document.querySelectorAll("span");
	for(var i=0;i<aspan.length;i++){
		aspan[i].onclick = function(){
			this.parentNode.parentNode.remove()
		}
	}
}

//事件监听的操作——能创建多个事件，两者不影响， 结果可同时出现，只要满足一个就是true；
//ele 可位 obox；obtn 等 ，myeve位‘click’；‘mouseover’等 ，fn 为事件驱动运行函数
var myEvent = {
	add: function(ele, myeve, fn) {
		if(ele.addEventListener) {
			ele.addEventListener(myeve, fn, false);
		} else if(ele.attachEvent) {
			ele.attachEvent("on" + myeve, fn)
		} else {
			ele["on" + myeve] = fn;
		}
	},
	remove: function(ele, myeve, fn) {
		if(ele.removeEventListener) {
			ele.removeEventListener(myeve, fn)
		} else if(ele.detachEvent) {
			ele.detachEvent("on" + myeve, fn)
		} else {
			ele["on" + myeve] = null;
		}
	}
}



//增加或修改cookie
function setCookie(Name, value, days) {
	var d = new Date;
	d.setDate(d.getDate() + days);
	document.cookie = Name + '=' + value + ';expires=' + d; //必须为字符串
}
//		setCookie('name',123,8) //第一个必须加引号，才能输入name
//获取cookie
function getCookie(Name) {
	var arr = document.cookie.split('; ') //分号+空格
	for(i = 0; i < arr.length; i++) {
		var c = arr[i].split('=')
		if(arr[i].split('=')[0] == Name) {
			return arr[i].split('=')[1]
		}

	}
	return null; //当cookie不存在时输出
}
//		console.log(getCookie('name'))
//第一个必须加引号，才能输入name
function removeCookie(Name) {
	//改变时间可自动移除cookie
	setCookie(Name, '', -1)
}
//		removeCookie('pos')
//第一个必须加引号，才能输入name



//委托函数的封装
//a 父元素所有子节点 ； b为执行函数
function eventEnt(a, b) {
	return function(eve) {
		var e = eve || window.event;
		var target = e.target || e.srcElement;
		for(i = 0; i < a.length; i++) {
			if(a[i] == target) {
				b.bind(target)();

			}
		}

	}
}

//随机a~b之间的数
function randomNumber(a,b){
	return Math.round(Math.random()*(a-b)+b);
}




