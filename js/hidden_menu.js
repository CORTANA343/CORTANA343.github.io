window.onload = function(){

	/*获取鼠标滚动事件*/
	var scrollFunc = function get_mouse(ev){
		var oEvent = ev||window.event;
		var direct = 0;
		var oNav = document.getElementById('nav');
		if(oEvent.wheelDelta){
			direct = oEvent.wheelDelta;
			if(direct < 0){
				hidden();
			}else{
				rise();
			}
		}
		if(oEvent.detail){
			direct = oEvent.detail;
			if(direct > 0){
				hidden();
			}else{
				rise();
			}
		}
	}
	if(document.addEventListener){
		document.addEventListener('DOMMouseScroll',scrollFunc,false);
	}
	window.onmousewheel = document.onmousewheel = scrollFunc;
	
	/*菜单缓慢隐藏*/
	function hidden(){
		var oNav = document.getElementById('nav');
		var timer = null;
		var speed = 0;
		//运动定时器
		timer = setInterval(function(){
			speed = (50 - oNav.offsetTop)/10;
			speed = Math.ceil(speed);
			if(speed >= 11 ){
				clearInterval(timer);
				speed = 0;
				}
			oNav.style.top = oNav.offsetTop - speed + 'px';
		},30)
	}
	
	/*菜单缓慢出现*/
	function rise(){
		var oNav = document.getElementById('nav');
		var timer = null;
		var speed = 0;
		//运动定时器
		timer = setInterval(function(){
			speed = (82 + oNav.offsetTop)/10;
			speed = Math.ceil(speed);
			if(oNav.offsetTop > -6){
				clearInterval(timer);
				speed = 0;
			}
			oNav.style.top = oNav.offsetTop + speed + 'px';
		},30)
	}
}










