window.onload=function(){
	
	var obtn=document.getElementById("btn");
	var timer=null;
	var isTop=true;
	//获得可视化高度
	var clientHeight=document.documentElement.clientHeight;
//滑轮滚动执行的函数
	window.onscroll=function(){
//获得滑轮离顶部高度
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(osTop>=clientHeight)
		{
			obtn.style.display="block";
				}
			else
			{
				obtn.style.display="none";
		
		}
		if(!isTop)  //当滑轮滑动时清除定时器
		{
			clearInterval(timer);
		}
	
			isTop=false;
		
		
	}
	btn.onclick=function(){
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		var ispeed=Math.floor(-osTop/6);
        document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
        isTop=true;
        
        if(osTop==0)
        {
        	clearInterval(timer);
        }
        
		
			
		},30);
		
		}
	
var obun=document.getElementById("bun");
var onav=document.getElementById("nav");
var icon=document.getElementById("icon");
var snav=document.getElementById("snav");
obun.onclick=function(){
	if(onav.style.display=="none")
	{
		onav.style.display="block";
	}
	else{
		onav.style.display="none";
	}
	
	if(snav.style.display=="none")
	{
		snav.style.display="block";
	}
	else{
		snav.style.display="none";
	}
}
icon.onclick=function(){
	if(snav.style.display=="none")
	{
		snav.style.display="block";
	}
	else{
		snav.style.display="none";
	}
}
//防止点击div 使得div关闭
onav.onclick=function(){
	return flase;
}
}
