
window.onload=function(){

	document.onselectstart=new Function("event.returnValue=false;");
	function g(id){															//定义通用函数
		if(id.substr(0,1)=="."){
			return document.getElementsByClassName(id.substr(1))
		}
		return document.getElementById(id);	
	}
	
	function getOffsetLeft(obj){												//获取当前元素距离屏幕的距离，他的值等于循环加上距离父元素的值
		var left= obj.offsetLeft;
		var top= obj.offsetTop;
		var parent=obj.offsetParent;
		while(parent!=null){
			left+=parent.offsetLeft;
			top+=parent.offsetTop;
			parent=	parent.offsetParent;
		}
		return{"left":left,"top":top}
	}
	
	var isMousedown=false;														//定义只有当鼠标点击后，才会执行选框拖动的动作
	var contact="";
	
	g("pos_e").onmousedown=function(e){											//右边拖动
	e.stopPropagation();
		isMousedown=true;
		contact="pos_e";
	}
	g("pos_e").onmouseup=function(e){
		e.stopPropagation();
		isMousedown=false;
		contact="pos_e";
	}
	
	g("pos_n").onmousedown=function(e){											//上边拖动
	e.stopPropagation();
		isMousedown=true;
		contact="pos_n";
	}
	g("pos_n").onmouseup=function(e){
		e.stopPropagation();
		isMousedown=false;
		contact="pos_n";
	}
	
	g("pos_s").onmousedown=function(e){											//下边拖动
	e.stopPropagation();
		isMousedown=true;
		contact="pos_s";
	}
	g("pos_s").onmouseup=function(e){
		e.stopPropagation();
		isMousedown=false;
		contact="pos_s";
	}
	
	g("pos_w").onmousedown=function(e){											//左边拖动
	e.stopPropagation();
		isMousedown=true;
		contact="pos_w";
	}
	g("pos_w").onmouseup=function(e){
		e.stopPropagation();
		isMousedown=false;
		contact="pos_w";
	}
	g("pos_ne").onmousedown=function(e){											//东北拖动
	e.stopPropagation();
		isMousedown=true;
		contact="pos_ne";
	}
	g("pos_ne").onmouseup=function(e){
		e.stopPropagation();
		isMousedown=false;
		contact="pos_ne";
	}
	g("pos_es").onmousedown=function(e){											//东南拖动
	e.stopPropagation();
		isMousedown=true;
		contact="pos_es";
	}
	g("pos_es").onmouseup=function(e){
		e.stopPropagation();
		isMousedown=false;
		contact="pos_es";
	}
	g("pos_sw").onmousedown=function(e){											//东南拖动
	e.stopPropagation();
		isMousedown=true;
		contact="pos_sw";
	}
	g("pos_sw").onmouseup=function(e){
		e.stopPropagation();
		isMousedown=false;
		contact="pos_sw";
	}
	g("pos_nw").onmousedown=function(e){											//西北拖动
	e.stopPropagation();
		isMousedown=true;
		contact="pos_nw";
	}
	g("pos_nw").onmouseup=function(e){
		e.stopPropagation();
		isMousedown=false;
		contact="pos_nw";
	}
	


	
	
	
	window.onmousemove=function(e){
		e.stopPropagation();
		switch(contact){
			case "pos_e":rightmove(e);break;
			case "pos_n":upmove(e);break;
			case "pos_s":downmove(e);break;
			case "pos_w":leftmove(e);break;
			case "pos_ne":upmove(e);rightmove(e);break;
			case "pos_es":rightmove(e);downmove(e);break;
			case "pos_sw":leftmove(e);downmove(e);break;
			case "pos_nw":leftmove(e);upmove(e);break;
		}
		
		
	}
	
	function rightmove(e){													//右边移动
	e.stopPropagation();
		if(isMousedown==true){
			var addLeft="";
			var orginW=g("marquee").offsetWidth;
			var eX=e.clientX;
			var posL=getOffsetLeft(g("marquee")).left;
			addLeft=eX-orginW-posL;
			g("marquee").style.width=addLeft+orginW+"px";
		}else if(isMousedown==false){
			return false;	
		}	
		startClip();
		copyImg();
	}
	
	function upmove(e){													//上边移动
	e.stopPropagation();
		if(isMousedown==true){
			var orginH=g("marquee").offsetHeight-2;								//获取元素的高
			var eY=e.clientY;													//获取鼠标的y轴
			var posT=getOffsetLeft(g("marquee")).top;						//获取元距离屏幕上方的距离
			var addTop=posT-eY;												    //获取增加的高度
			g("marquee").style.height=orginH+addTop+"px";
			g("marquee").style.top=eY+"px";
		}else if(isMousedown==false){
			return false;	
		}
		startClip();
		copyImg();
	}
	
	function downmove(e){														//下方移动
	e.stopPropagation();
		if(isMousedown==true){
			var orginH=g("marquee").offsetHeight;								//获取元素的高
			var eY=e.clientY;													//获取鼠标的y轴
			var posT=getOffsetLeft(g("marquee")).top;						//获取元距离屏幕上方的距离
			var addTop=eY-posT-orginH;												    //获取增加的高度
			
			g("marquee").style.height=orginH+addTop+"px";
		
			
		}else if(isMousedown==false){
			return false;	
		}
		startClip();
		copyImg();
	}
	
	function leftmove(e){														//左方移动
	e.stopPropagation();
		if(isMousedown==true){
			var addLeft="";
			var orginW=g("marquee").offsetWidth-2;
			var eX=e.clientX;
			var posL=getOffsetLeft(g("marquee")).left;
			addLeft=posL-eX;
			g("marquee").style.width=addLeft+orginW+"px";
			g("marquee").style.left=eX+"px";
		}else if(isMousedown==false){
			return false;	
		}
		startClip();
		copyImg();
	}
	
	function startClip(){
		var top=g("marquee").offsetTop-100;
		var right=g("marquee").offsetLeft-200+g("marquee").offsetWidth;
		var bottom=g("marquee").offsetTop-100+g("marquee").offsetHeight;
		var left=g("marquee").offsetLeft-200;
		
		g("imgClip").style.clip="rect("+top+"px "+right+"px "+bottom+"px "+left+"px"+")";
	}
	
	function copyImg(){
		var top=g("marquee").offsetTop-100;
		var right=g("marquee").offsetLeft-200+g("marquee").offsetWidth;
		var bottom=g("marquee").offsetTop-100+g("marquee").offsetHeight;
		var left=g("marquee").offsetLeft-200;
		g("copy_img").style.clip="rect("+top+"px "+right+"px "+bottom+"px "+left+"px"+")";
		g("copy_img").style.left=-left+850+"px";
		g("copy_img").style.top=-top+100+"px";
	}
	
	var drag=false;
	
	g("marquee").onmousedown=function(e){
		e.stopPropagation();
		drag=true;
		var dX=e.clientX;
		var dY=e.clientY;
		var eOffsetLeft=dX-g("marquee").offsetLeft;
		var eOffsetTop=dY-g("marquee").offsetTop;
		g("mybody").onmousemove=function(e){

			var currentX=e.clientX;
			var currentY=e.clientY;
			if(drag==true){
				g("marquee").style.left=currentX-eOffsetLeft+"px";
				g("marquee").style.top=currentY-eOffsetTop+"px";
				startClip();
				copyImg();
			}
		}
		g("mybody").onmouseup=function(e){

			drag=false;
		}
	}
	
	
}