$(function(){
	$(".div1")[0].style.height=((window.innerHeight)/3)+"px";
	$(".div1")[1].style.height=((window.innerHeight)/3)+"px";
	$(".div1")[2].style.height=((window.innerHeight)/3)+"px";
	$(".div2")[0].style.height=((window.innerHeight)/3)+"px";
	$(".div2")[1].style.height=((window.innerHeight)/3)+"px";
	$(".div2")[2].style.height=((window.innerHeight)/3)+"px";
	onresize=function(){
		$(".div1")[0].style.height=((window.innerHeight)/3)+"px";
		$(".div1")[1].style.height=((window.innerHeight)/3)+"px";
		$(".div1")[2].style.height=((window.innerHeight)/3)+"px";
		$(".div2")[0].style.height=((window.innerHeight)/3)+"px";
		$(".div2")[1].style.height=((window.innerHeight)/3)+"px";
		$(".div2")[2].style.height=((window.innerHeight)/3)+"px";
	};
	$(".div1").each(function(index){
		$(this).mouseenter(function(){
			$("img:eq("+(index+1)+")").animate({
				"top":"-80%"
			},1000);
			$(".div2:eq("+(index)+")").animate({
				"top":"0"
			},1000);
		})
		$(".div1:eq("+index+")").mouseleave(function(){
			$("img:eq("+(index+1)+")").animate({
				"top":0
			},500);
			$(".div2:eq("+index+")").animate({
				"top":"100%"
			},500);
		})
	});
	var i=2;
	$(".div1").each(function(index){
		$(this).click(function(){
			$(this).addClass("div4");
		var time=setInterval(function(){
			i--;
			if(i==0){
				window.location="new.html";
			}
		},500)
		})
	})
	$("#nav").mouseenter(function(){
		$("#nav span").each(function(index){
			$("#nav span:eq("+index+")").css({
				"background": "red"
			});
		});
	});
	$("#nav").mouseleave(function(){
		$("#nav span").each(function(index){
			$("#nav span:eq("+index+")").css({
				"background": "#fff"
			});
		});
	});
	$("#nav").click(function(){
		$("#cebianlan").animate({
			"left":"0%"
		},1000)
	});
	$("#cebianlan").mouseleave(function(){
		$(this).animate({
			"left":"-20%"
		},1000)
	});
	$("#icon1").click(function(){
		$("#cebianlan").animate({
			"left":"-20%"
		},1000)
	});
	
})
