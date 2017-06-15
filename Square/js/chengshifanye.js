// JavaScript Document
window.onload=function(){
	var adiv=document.getElementById("div");
	var adivs=adiv.getElementsByTagName("div");
	var p=document.getElementById("previous");
	var n=document.getElementById("next");
	var iNow=0;

	var previous=function(){ //向前函数
		iNow--;
		if(iNow==-1){
			iNow=adivs.length-1;
		}
		console.log(iNow);
		tab();
	};

	var next=function(){ //向后函数
		iNow++;
		if(iNow==adivs.length){
			iNow=0;
		}
		tab();
	};
	function tab(){//公共部分
	for(var i=0;i<adivs.length;i++){
		adivs[i].style.display='none';
	}
	adivs[iNow].style.display='block';
	}
	p.onclick=previous;//给文字“上一页”添加响应
	n.onclick=next;//给文字“下一页”添加响应
	document.onkeydown=function(){//绑定键盘事件
		var e=event||window.event;
		var keyCode=e.keyCode||e.width;
		 switch(keyCode){
     case 37:
      previous();
      break;  
     case 39:
      next();    
  	};
	};
};