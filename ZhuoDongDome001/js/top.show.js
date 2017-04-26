$(function(){
	$(".top-a").hover(function(){
		$(".top-show1").toggle();
	})
	$(".top-b").hover(function(){
		$(".top-show2").toggle();
	})
	$(".top-c").hover(function(){
		$(".top-show3").toggle();
	})
	$(".top-d").hover(function(){
		$(".top-show4").toggle();
	})
	var oTop=document.getElementById("to_top");
		     	var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		     	$("#to_top").click(function(){
		     		$("body,html").animate({"scrollTop":0},1000);
		     	})
		     	$(window).scroll(function(){
		     		if($(document).scrollTop()>=200){
		     			 oTop.style.display="block";
		     		}else{
		     			 oTop.style.display="none";
		     		}
		     	})
})



