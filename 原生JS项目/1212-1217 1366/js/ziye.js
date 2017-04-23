window.onload=function(){
	//---------------------搜索框
	var div=document.getElementsByClassName("div");
		var a=div[0].getElementsByClassName("td1")[0];
		var b=div[0].getElementsByClassName("td2")[0];
		var spa=div[0].getElementsByTagName("span");
		console.log(spa)
		var ssk=document.getElementById("sskx");
			a.onfocus=function(){
				a.style.borderColor="#FF6700"
				b.style.borderColor="#FF6700"
				ssk.style.display="block"
				spa[0].style.display="none"
				spa[1].style.display="none"
			}
			a.onblur=function(){
				a.style.borderColor="#bbb"
				b.style.borderColor="#bbb"
				ssk.style.display="none"
				spa[0].style.display=""
				spa[1].style.display=""
			}
	
	//=-------------------------------购物车
	
	var gouwu=document.getElementsByClassName("g")[0];
	var gou=document.getElementsByClassName("gou")[0];
		gou.onmouseover=function(){
			la(gouwu,0)
		}
		gou.onmouseout=function(){
			la(gouwu,-140)
		}
	
	//-----------------------------------开始的导航
	var taba=document.getElementsByClassName("er_yi")[0];
				var lis=taba.getElementsByTagName("li")
				console.log(lis)
				var kuaik=document.getElementsByClassName("kuai");
				var er=document.getElementById("er_er2")
				var timer1;
				var dd;
				console.log(kuaik)
				for(var i=0;i<kuaik.length;i++){
					lis[i].index=i
					lis[i].onmouseover=function(){
						la(er,0)
						kuaik[this.index].style.display="block"
						dd=this.index
					}
					lis[i].onmouseout=function(){
						la(er,-200)
						kuaik[this.index].style.display="none"
					}
					er.onmouseover=function(){
						la(er,0)
						kuaik[dd].style.display="block"
					}
					er.onmouseout=function(){
						la(er,-200)
							kuaik[dd].style.display="none"
					}
					
					
				}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//------------------------------------封装好的透明函数
	function touming(obj,attr,target,speed){
					//清除定时器
					clearInterval(obj.timer);
					//定时器
					obj.timer=setInterval(function(){
						var cur;
						//判断传入的属性是透明度还是其他的   因为透明度没单位
						if(attr=="opacity"){
							cur=getStyle(obj,"opacity")*100; 
						}else{
							cur=parseInt(getStyle(obj,attr)); // 其他的   如width 、height/left
						}
						
						//得到并设置速度
						
						var speed=(target-cur)/10;
						speed=speed>0?Math.ceil(speed):Math.floor(speed);
						
						
						//达到目标值清除定时器
						if(cur==target){
							clearInterval(obj.timer);
						}else{
							//如果透明度   分火狐和ie
							if(attr=="opacity"){
								obj.style.opacity=(cur+speed)/100;
								obj.style.filter="alpha(opacity="+(cur+speed)+")"
							}else{// 如果是其他   如width、height
								obj.style.height=cur+speed+"px";
							}
						}
					},10)
				}
	
	
	//--------------------------------封装好的移动函数
				function la(obj,target){
					clearInterval(obj.timer);
					obj.timer=setInterval(function(){
					var cur=parseInt(getStyle(obj,"top"));
					var speed=(target-cur)/8;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
						if(cur==target){
							clearInterval(obj.timer)
						}else{
							obj.style.top=cur+speed+"px";
						}
					},10)
					
				}
	
//	=======================================图片大小
            var div113=document.getElementById("si1p1");
			var div114=document.getElementById("si1p2");
			div113.style.width=window.innerWidth+"px";
			div113.style.marginTop=(window.innerWidth)*0.2+"px";
			div114.style.width=window.innerWidth+"px";
	onresize=function aa(){
			var div111=document.getElementById("san");
			div111.style.width=window.innerWidth+"px";
			div111.style.height=window.innerHeight+"px";
			var div121=document.getElementById("si");
			div121.style.width=window.innerWidth+"px";
			div121.style.height=window.innerHeight+"px";
			var div131=document.getElementById("wu");
			div131.style.width=window.innerWidth+"px";
			div131.style.height=window.innerHeight+"px";
			var div141=document.getElementById("liu");
			div141.style.width=window.innerWidth+"px";
			div141.style.height=window.innerHeight+"px";
			var div151=document.getElementById("ba");
			div151.style.width=window.innerWidth+"px";
			div151.style.height=window.innerHeight+"px";
			var div162=document.getElementById("si1");
			div112.style.width=window.innerWidth+"px";
			div112.style.height=window.innerHeight+"px";
			var div113=document.getElementById("si1p1");
			var div114=document.getElementById("s`i1p2");
			div113.style.width=window.innerWidth+"px";
			div113.style.marginTop=(window.innerWidth)*0.2+"px";
			div114.style.width=window.innerWidth+"px";
			var div115=document.getElementById("liu1");
			div115.style.width=window.innerWidth+"px";
			div115.style.height=window.innerHeight+"px";
			liu21.style.marginTop=(window.innerWidth)*0.2+"px";
			var div116=document.getElementById("da");
			div116.style.width=window.innerWidth+"px";
	}
	  //===========视频重新播放
	function fangying(){
		si1.src="";
		si1.src="img/01.webm";
	}
	function fangying1(){
		liu1.src="";
		liu1.src="img/02.webm" ;
	}
	
	
	
	function move (obj,json,speed,fn){
					clearInterval(obj.timer);  //共用的一个定时器  
					obj.timer=setInterval(
							
						function(){
							var isTrue=true;
							for (var attr in json) {
								var cur=0;	
								if(attr=="opacity"){
									cur=getStyle(obj,"opacity")*100;
								}else{
									cur=parseInt(getStyle(obj,attr));
								}
								speed=(json[attr]-cur)/6;
								speed=speed>0?Math.ceil(speed):Math.floor(speed);
								if(cur!=json[attr]){
									isTrue=false;
								 if(attr=="opacity"){
									obj.style.opacity=(cur+speed)/100;
									obj.style.filter=parseInt("alpha(opacity="+(cur+speed)+")");
		//							console.log(obj.style.filter);
									}else{
									obj.style[attr]=cur+speed+"px";
									}
								}//  for in 结束
								if(isTrue){
									clearInterval(obj.timer); 
									if(fn){
										fn.call(obj);
									}
								}
							
							}
						},30
					)
				}
				function getStyle(obj,attr){    //获取元素属性
					if(obj.currentStyle){
						return obj.currentStyle[attr];  //IE
					}else{
						return getComputedStyle(obj,false)[attr];  //火狐；
					}
				}	
	
				move(san1,{top:100,opacity:100},10);
		        qi1.style.background="orange"
				var panduan=2;
				var scrollFunc=function shijianjinting(e){ 
			        ee=e || window.event; 
			        var t1=document.getElementById("wheelDelta"); 
			        var t2=document.getElementById("detail"); 
			        if(e.wheelDelta){//IE/Opera/Chrome 
			            t1.value=e.wheelDelta; 
			        }else if(e.detail){//Firefox 
			            if(e.detail==3){
			            	panduan=panduan+1;
			            }
			            if(e.detail==-3){
			            	panduan=panduan-1;
			            }
			            if(panduan>7){
			            	panduan=panduan>7?7:panduan;
			            return;
			            }
			            if(panduan<1){
			            	panduan=panduan<1?1:panduan;
			            return;
			            }
			        } 
			        var er=document.getElementById("er");
				        switch(panduan){
				        	case 1 :
				        			move(er,{top:40},10)
				        			move(yi,{top:0},10)
				        			move(san,{bottom:-140},10)
				        			move(san1,{top:0,opacity:20},10);
				        	       break;
				        	case 2 :
				        			qi1.style.background="orange"
				        			qi2.style.background=""
				        			move(san,{bottom:0},10,move(san1,{top:100,opacity:100},10));
				        			move(si,{bottom:0},10)
				        			move(er,{height:0},10)
				        			move(yi,{height:0},10)
				        			move(er,{top:-140},10)
				        			move(yi,{top:-40},10)
				        			console.log(panduan);
				        			break;
				        	case 3 :
				        			qi1.style.background="";
				        			qi2.style.background="orange";
				        			qi3.style.background="";
				        			move(san,{bottom:1000},10)
				        			move(si,{bottom:1000},10)
				        			move(wu,{top:-400},10)
				        			move(san1,{top:0,opacity:20},10);
				        			fangying();
				        			console.log(panduan);
				        			break;
				        	case 4 :
				        			qi2.style.background=""
				        			qi3.style.background="orange"
				        			qi4.style.background=""
				        			move(si,{bottom:1800},10)
				        			move(wu,{top:-1700},10)
				        			
				        			console.log(panduan);
				        			move(liu,{top:-800},10)
				        			break;	
				        	case 5 :
				        			qi3.style.background=""
				        			qi4.style.background="orange"
				        			qi5.style.background=""
				        			move(wu,{top:-2700},10)
				        			move(liu,{top:-2550},10)
				        			move(ba,{top:-1000},10)
				        			fangying1();
				        			console.log(panduan);
				        			break;	
		        			case 6 :
				        			qi4.style.background=""
				        			qi5.style.background="orange"
				        			qi6.style.background=""
				        			move(ba,{top:-3200},10)
				        			move(liu,{top:-3550},10)
				        			move(jiu,{top:-2000},10)
				        			console.log(panduan);
				        			break;	
				        	case 7 :
				        			qi5.style.background=""
				        			qi6.style.background="orange"
				        			move(ba,{top:-3800},10)
				        			move(jiu,{top:-3800},10)
				        			console.log(panduan);
				        			break;			
				        }
			    } 
			    /*注册事件*/ 
			    if(document.addEventListener){ 
			        document.addEventListener('DOMMouseScroll',scrollFunc,false); 
			    }//W3C 
			    window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome 
	
	
				function getStyle(obj,attr){
							if(obj.currentStyle){
								return obj.currentStyle[attr];
							}else{
								return getComputedStyle(obj,false)[attr];
							}
						}
	
}



