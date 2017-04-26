$(function(){
	
	//index
	var H=$(window).height();
	$("#index_01").height($(window).height());
	$(window).resize(function(){
        $("#index_01").height($(window).height());
	})
	
	
	
	$(".Nav").each(function(index){
		$(".Nav").eq(index).click(function(){
			$(".Nav").removeClass("activ")
			$(".Nav").eq(index).addClass("activ")
		})
	})
	
	
	//回到顶部
	
	 var scrollFunc=function(e){
//	 	var scroll=document.documentElement.scrollTop;
	 	var scroll=$(document).scrollTop()+500;
	 	console.log(scroll)
        ee=e || window.event; 
        if(e.wheelDelta){//IE/Opera/Chrome 
        	if(scroll>H){
        		$(".top1").addClass("topy")
        	}else{
        		$(".top1").removeClass("topy")
        	}
        }else if(e.detail){//Firefox 
        	if(scroll>H){
        		$(".top1").addClass("topy")
        	}else{
        		$(".top1").removeClass("topy")
        	}
        } 
    } 
    /*注册事件*/ 
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',scrollFunc,false); 
    }//W3C 
    window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome 
	
	
	
	
	
	
	$(".top").mouseover(function(){
		$(".top2").animate({
			"opacity":1
		},300)
	})
	$(".top").mouseleave(function(){
		$(".top2").animate({
			"opacity":0
		},300)
	})
	$(".top").click(function(){
		$("body,html").animate({ "scrollTop": 0 },300);
		$(".top1").removeClass("topy")
	})
	
	
	
	
	
	//list
	$(".list").hide()
	$(".list").eq(0).show()
	$(".flLi").each(function(index){
		$(".flLi").eq(index).click(function(){
			$(".list").slideUp()
			$(".list").eq(index).slideDown()
			$(".flLi").removeClass("active")
			$(".flLi").eq(index).addClass("active")
		})
	})
	
	//support
	$(".kuai").each(function(index){
		$(".kuai").eq(index).mouseover(function(){
			$(this).animate({
				"background-position":"0px"
			},300)
		})
		$(".kuai").eq(index).mouseleave(function(){
			$(this).animate({
				"background-position":"-170px"
			},100)
		})
	})
	
	$(".ipt").focus(function(){
		$(this).animate({
			"width":"600px"
		},500)
	})
	$(".ipt").blur(function(){
		$(this).animate({
			"width":"300px"
		},500)
	})
	
	
	var arr=["MD5： 8F08B5320FBD167FCE5FB92354AB038E","MD5： 21C667FA8D74F7D78A3727669B9757A8","MD5： 01E2E88D3DB32EC5C36FD20780CD23EF","MD5： 335CDD001AEBD109AC01D5D3D928E856","MD5： 9451E74CDF3A2FD692BB13796BD42371","MD5：  A3D144B01DFEB55A4C44E4A5AC58BD94","MD5： E7CCBE8581E8548E36EC7188A83F382B","MD5： 225FABE7A346D19F101C8B58B527F229"]
	
	$(".down022").each(function(index){
		$(".down022").eq(index).mouseover(function(){
			$(".bian").html(arr[index])
		})
	})
	
	
	
	
	
})
