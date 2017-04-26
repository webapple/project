$(function(){
	(function(){
		var one = document.querySelector(".max_one");
		var two = document.querySelector(".max_two");
		var three = document.querySelector(".max_three");
		var $spanOne = $(".center_max span")[0];
		var $spanTwo = $(".center_max span")[1];
		var $spanThree = $(".center_max span")[2];
		var $clickSpanLeft = $(".banner div")[0];
		var $clickSpanRight = $(".banner div")[1];
		var $indexSpan = $(".center_max span");
		var $banner = $(".banner");
		
		console.log($banner);
		$banner.mouseenter(function(){
			$(".left1").animate({"left":0},"slow");
			$(".right").animate({"right":0},"slow");
		});
		$banner.mouseleave(function(){
			$(".left1").animate({"left":"-5%"},"slow");
			$(".right").animate({"right":"-5%"},"slow");
		});
		$(".judgeLeft").mouseover(function(){
			$(".left1").css({ background: "#31c27c" });
			$(".left1").animate({width: "0.8rem"},"slow")
		});
		$(".judgeRight").mouseover(function(){
			$(".right").css({background: "#31c27c" });
			$(".right").animate({width: "0.8rem"},"slow");
		});
		$(".judgeLeft").mouseleave(function(){
			$(".left1").css({background: "#ccc" });
			$(".left1").animate({width: "0.6rem"},"slow")
		});
		$(".judgeRight").mouseleave(function(){
			$(".right").css({width: "0.6rem", background: "#ccc" });
			$(".right").animate({width: "0.6rem"},"slow");
		});
		var num=0;
		$indexSpan[0].onclick=function(){
			$(one).animate({left:0+"rem"}, "slow");
			$(two).animate({left:12+"rem"}, "slow");
			$(three).animate({left:24+"rem"}, "slow");
			$indexSpan[num].className = "";
			$indexSpan[0].className = "show";
			num = 0;
		}
		$indexSpan[1].onclick=function(){
			$(one).animate({left:12+"rem"}, "slow");
			$(two).animate({left:24+"rem"}, "slow");
			$(three).animate({left:0+"rem"}, "slow");
			$indexSpan[num].className = "";
			$indexSpan[1].className = "show";
			num = 1;
		}
		$indexSpan[2].onclick=function(){
			$(one).animate({left:24+"rem"}, "slow");
			$(two).animate({left:0+"rem"}, "slow");
			$(three).animate({left:12+"rem"}, "slow");
			$indexSpan[num].className = "";
			$indexSpan[2].className = "show";
			num = 2;
		}
		$clickSpanLeft.onclick=function(){
			var Left1 = parseInt($(one).css("left"))/100-12;
			var Left2 = parseInt($(two).css("left"))/100-12;
			var Left3 = parseInt($(three).css("left"))/100-12;
			console.log(Left1);
			if(Left1<=-12){
				Left1=24;
			}
			if(Left2<=-12){
				Left2=24;
			}
			if(Left3<=-12){
				Left3=24;
			}
			$indexSpan[num].className = "";
			num--
			if(num<0){
				num=2
			}
			$indexSpan[num].className = "show";
			$(one).animate({left:Left1+"rem"}, "slow");
			$(two).animate({left:Left2+"rem"}, "slow");
			$(three).animate({left:Left3+"rem"}, "slow");
		}
		$clickSpanRight.onclick=function(){
			var Left1 = parseInt($(one).css("left"))/100+12;
			var Left2 = parseInt($(two).css("left"))/100+12;
			var Left3 = parseInt($(three).css("left"))/100+12;
			if(Left1>25){
				Left1=0;
			}
			if(Left2>25){
				Left2=0;
			}
			if(Left3>25){
				Left3=0;
			}
			$indexSpan[num].className = "";
			num++
			if(num>2){
				num=0
			}
			$indexSpan[num].className = "show";
			console.log(Left1);
			console.log(Left2);
			console.log(Left3);
			$(one).animate({left:Left1+"rem"}, "slow");
			$(two).animate({left:Left2+"rem"}, "slow");
			$(three).animate({left:Left3+"rem"}, "slow");
		}
		console.log($("li"));
		$("li").each(function(){
			$(this).mouseenter(function(){
				var l = $(this)[0].children;
				var t = l[2];
				$(t).animate({"opacity":1},"slow");
				
			})
			$(this).mouseleave(function(){
				var l = $(this)[0].children;
				var t = l[2];
				$(t).animate({"opacity":0},"slow");
				
			})
		})
	})();
	(function(){
		var one = document.querySelector(".hotsong .max_one");
		var two = document.querySelector(".hotsong .max_two");
		var three = document.querySelector(".hotsong .max_three");
		var $spanOne = $(".hotsong .center_max span")[0];
		var $spanTwo = $(".hotsong .center_max span")[1];
		var $spanThree = $(".hotsong .center_max span")[2];
		var $clickSpanLeft = $(".hotsong div")[0];
		var $clickSpanRight = $(".hotsong div")[1];
		var $indexSpan = $(".hotsong .center_max span");
		var $banner = $(".hotsong");
		$banner.mouseenter(function(){
			$(".left2").animate({"left":0},500);
			$(".right1").animate({"right":0},500);
		});
		$banner.mouseleave(function(){
			$(".left2").animate({"left":"-5%"},500);
			$(".right1").animate({"right":"-5%"},500);
		});
		$(".judgeLeft").mouseover(function(){
			$(".left2").css({ background: "#31c27c" });
			$(".left2").animate({width: "0.8rem"},"slow")
		});
		$(".judgeRight").mouseover(function(){
			$(".right1").css({background: "#31c27c" });
			$(".right1").animate({width: "0.8rem"},"slow");
		});
		$(".judgeLeft").mouseleave(function(){
			$(".left2").css({background: "#ccc" });
			$(".left2").animate({width: "0.6rem"},"slow")
		});
		$(".judgeRight").mouseleave(function(){
			$(".right1").css({width: "0.6rem", background: "#ccc" });
			$(".right1").animate({width: "0.6rem"},"slow");
		});
		var num=0;
		$indexSpan[0].onclick=function(){
			$(one).animate({left:0+"rem"}, "slow");
			$(two).animate({left:12+"rem"}, "slow");
			$(three).animate({left:24+"rem"}, "slow");
			$indexSpan[num].className = "";
			$indexSpan[0].className = "show";
			num = 0;
		}
		$indexSpan[1].onclick=function(){
			$(one).animate({left:12+"rem"}, "slow");
			$(two).animate({left:24+"rem"}, "slow");
			$(three).animate({left:0+"rem"}, "slow");
			$indexSpan[num].className = "";
			$indexSpan[1].className = "show";
			num = 1;
		}
		$indexSpan[2].onclick=function(){
			$(one).animate({left:24+"rem"}, "slow");
			$(two).animate({left:0+"rem"}, "slow");
			$(three).animate({left:12+"rem"}, "slow");
			$indexSpan[num].className = "";
			$indexSpan[2].className = "show";
			num = 2;
		}
		$clickSpanLeft.onclick=function(){
			var Left1 = parseInt($(one).css("left"))/100-12;
			var Left2 = parseInt($(two).css("left"))/100-12;
			var Left3 = parseInt($(three).css("left"))/100-12;
			if(Left1<=-12){
				Left1=24;
			}
			if(Left2<=-12){
				Left2=24;
			}
			if(Left3<=-12){
				Left3=24;
			}
			$indexSpan[num].className = "";
			num--
			if(num<0){
				num=2
			}
			$indexSpan[num].className = "show";
			$(one).animate({left:Left1+"rem"}, "slow");
			$(two).animate({left:Left2+"rem"}, "slow");
			$(three).animate({left:Left3+"rem"}, "slow");
		}
		$clickSpanRight.onclick=function(){
			var Left1 = parseInt($(one).css("left"))/100+12;
			var Left2 = parseInt($(two).css("left"))/100+12;
			var Left3 = parseInt($(three).css("left"))/100+12;
			if(Left1>25){
				Left1=0;
			}
			if(Left2>25){
				Left2=0;
			}
			if(Left3>25){
				Left3=0;
			}
			$indexSpan[num].className = "";
			num++
			if(num>2){
				num=0
			}
			$indexSpan[num].className = "show";
			$(one).animate({left:Left1+"rem"}, "slow");
			$(two).animate({left:Left2+"rem"}, "slow");
			$(three).animate({left:Left3+"rem"}, "slow");
		}
		$(".hotsong li").each(function(){
			$(this).mouseenter(function(){
				var l = $(this)[0].children;
				var t = l[2];
				$(t).animate({"opacity":1},"slow");
				
			})
			$(this).mouseleave(function(){
				var l = $(this)[0].children;
				var t = l[2];
				$(t).animate({"opacity":0},"slow");
				
			})
		})
	})();
	
})
