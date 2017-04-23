window.onload=function(){
				
	
	
	
				//找到圆的span
				var div=document.getElementById("sixiaolong");
				var nav=div.getElementsByTagName("span");
				var block=document.getElementsByClassName("block1");
				//给圆添加事件
				var num=0;
				for(var i=0;i<nav.length;i++){  // 0 1 2 3
					nav[i].index=i;           //自定义了一个index属性，对选项卡的导航进行编号（储存下标）
					nav[i].onmouseover=function(){
					 removeStyle(num);
					 addStyle(this.index);
					 num=this.index;
					 clearInterval(timer);
					}
					nav[i].onmouseout=function(){
					timer=setInterval(function(){
					removeStyle(num);
					num+=1;
					if(num>3){
						num=0;
					}
					addStyle(num);
					
					},4000)
					}
				}
				function removeStyle(n){
					//去掉上一个样式
					nav[n].removeAttribute("class");//去掉圆的样式
					block[n].style.display="none"; //去掉div的样式
				}
				function addStyle(n){
					nav[n].className="active";//圆添加样式
					block[n].style.display="block"; //block[0]//对应的div显示 。给div加样式
				}
				 timer=setInterval(function(){
					removeStyle(num);
					num+=1;
					if(num>3){
						num=0;
					}
					addStyle(num);
					
				},4000)
				
				zuo3.onclick=function(){
					removeStyle(num);
					num-=1;
					if(num>3){
						num=0;
					}
					if(num<0){
						num=3;
					}
					addStyle(num);
					
				}
				you3.onclick=function(){
					removeStyle(num);
					num+=1;
					if(num>3){
						num=0;
					}
					addStyle(num);
					
				}
				//得到TOP
		      	var Top=document.getElementById("huiding");
		      	Top.onclick=function(){
		      	var timer=setInterval(function(){
		      	//得到被卷进去的scrollTop的值
		      	var scrollTop=document.documentElement.scrollTop  || document.body.scrollTop;
		         	scrollTop-=10;
		      	if(document.documentElement.scrollTop){ //判断兼容document.documentElement.scrollTop  ie兼容
		      		document.documentElement.scrollTop=scrollTop;
		      	}else{//document.body.scrollTop  火狐和谷歌兼容
		      		document.body.scrollTop=scrollTop;
		      	}
		      	console.log(scrollTop);
		      	if(scrollTop<0){
		      		clearInterval(timer);
		      		return;
		      	}
		      	},1)
		      }
			
			
			var lis=document.getElementsByTagName("li");
				for(var i=0;i<lis.length;i++){
					lis[i].onmouseover=function(){
						if(this.children.length>1){
							this.children[1].style.display="block";
						}
					}
					lis[i].onmouseout=function(){
						if(this.children.length>1){
							this.children[1].style.display="none";
						}
					}
				}
//			                    无缝滚动
			var yidong=document.getElementById("yidong");
			var yidong1=document.getElementById("babayin");
			var a=yidong1.offsetLeft;
			var y=yidong.offsetLeft ;
			var shijian=setInterval(function(){
				y++;
				a++;
				ScrollTop1=a;
				ScrollTop=y;
				if(ScrollTop>1200){
					y=-1200;
				}
				if(ScrollTop1>1200){
					a=-1200;
				}
				yidong.style.left=ScrollTop+"px";
				yidong1.style.left=ScrollTop1+"px";
			},10)
			
			
			
//			时间监听
			var zhongbu=document.getElementById("zhongbu");
			zhongbu.onclick=function(){
				document.documentElement.scrollTop=840;
		      		document.body.scrollTop=840;
//				if(document.documentElement.scrollTop){ //判断兼容document.documentElement.scrollTop  ie兼容
//		      		document.documentElement.scrollTop=840;
//		      	}else{//document.body.scrollTop  火狐和谷歌兼容
//		      	}
				
			}

			
			var yejiao=document.getElementById("yejiao");
			yejiao.onclick=function(){
		      		document.documentElement.scrollTop=5000;
		      		document.body.scrollTop=5000;
//				if(document.documentElement.scrollTop){ //判断兼容document.documentElement.scrollTop  ie兼容
//		      	}else{//document.body.scrollTop  火狐和谷歌兼容
//		      	}
				
			}
			var dingbu=document.getElementById("dingbu");
			dingbu.onclick=function(){
		      		document.documentElement.scrollTop=1;
		      		document.body.scrollTop=1;
//				if(document.documentElement.scrollTop){ //判断兼容document.documentElement.scrollTop  ie兼容
//		      	}else{//document.body.scrollTop  火狐和谷歌兼容
//		      	}
				
			}
  
// 一级导航     
			var lab=document.getElementsByClassName("lable1");
			function yichu(){
				for(var i=0;i<lab.length;i++ ){
					lab[i].style.display="none";
				}
			}
		
			var li1=document.getElementById("zhong").getElementsByTagName("li");
			var yiji=document.getElementById("yijidaohang");
			console.log(lab);
			var dd;
				for (var i=0;i<li1.length;i++) {
					li1[i].index=i;
					console.log(li1[i].index);
					li1[i].onmousemove=function(){
					    yichu();
						move(yijidaohang,{height:200},10);
						lab[this.index].style.display="block";
						dd=this.index;
					}
						yiji.onmouseleave=function(){
						move(yijidaohang,{height:0},10);
					}
				}
				gouwuche.onmousemove=function(){
					move(gouwu,{height:200},10);
				}
				gouwu.onmouseleave=function(){
					move(gouwu,{height:0},10);
				}
				function move (obj,json,speed){
					clearInterval(obj.timer);  //共用的一个定时器  
					obj.timer=setInterval(
						function(){
							for (var attr in json) {
								var cur=0;	
								if(attr=="opacity"){
									cur=getStyle(obj,"opacity")*100;
								}else{
									cur=parseInt(getStyle(obj,attr));
								}
								speed=(json[attr]-cur)/8;
								speed=speed>0?Math.ceil(speed):Math.floor(speed);
								if(cur==json[attr]){
									clearInterval(obj.timer);
								}else if(attr=="opacity"){
									obj.style.opacity=(cur+speed)/100;
									obj.style.filter=parseInt("alpha(opacity="+(cur+speed)+")");
		//							console.log(obj.style.filter);
								}else{
									obj.style[attr]=cur+speed+"px";
								}
							}
						},50
					)
				}
				function getStyle(obj,attr){    //获取元素属性
					if(obj.currentStyle){
						return obj.currentStyle[attr];  //IE
					}else{
						return getComputedStyle(obj,false)[attr];  //火狐；
					}
				}	
  
            var zhujia=document.getElementsByClassName("zhujia");
            var biaoge=gouwu.lastElementChild;
            var yitiao=biaoge.lastElementChild;
            console.log(zhujia);
            console.log(biaoge);
             console.log(yitiao);
            
            for(var i=0;i<zhujia.length;i++){
	  			zhujia[i].onclick=function(){
	  				
	  				var mingzi=this.previousElementSibling;
	  				var mingzi1=mingzi.previousElementSibling;
	  				var mingzi2=mingzi1.innerHTML;
	  				console.log(mingzi2);
	  				var jiage=this.innerHTML;
	  				var jiage=jiage.split("，");
	  				console.log(jiage[0]);
	  				
	  				var ttr=document.createElement("tr");
	  				ttr.innerHTML=mingzi2+":"+jiage[0];
	  				yitiao.appendChild(ttr);
	  				
		           var lleng=shuzi.children.length;
		           shuzi1.innerHTML=lleng;
		            
	  			}
            }
	             var arr=document.cookie.split(";");
				 var arr1=arr[0].split("=");
				 var aa=arr[1].split("=");
				if(arr!=""||arr!=null){
					yonghuming.innerHTML=arr1[1];
				    }
            
            
            
}
			
			
		