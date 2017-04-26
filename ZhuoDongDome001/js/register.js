$(function(){
	var zhuceName = document.querySelector(".name");
	var zhucePas = document.querySelector(".pas");
	var zhuceOverPas = document.querySelector(".input_over_style_one");
	var zhuceBtn = document.querySelector(".btnss");
	var dengluName = document.querySelector(".input_style");
	var dengluPas = document.querySelector(".input_over_style");
	var dengluBtn = document.querySelector(".btn");
	var zhengze=/^[a-zA-Z_]\w{6,12}$/;
	var zhengze1=/^[a-zA-Z_0-9]\w{6,12}$/;
	zhuceName.onblur=function(){
		if(this.value==""||this.value==null){
			$(this).css({"border":"1px solid red"});
			var thi = this.nextElementSibling
			thi.innerHTML="帐号不能为空";
		}else if(zhengze.test(zhuceName.value)){
			$(this).css({"border":"none"});
			var thi = this.nextElementSibling
			thi.innerHTML="√";
		}else{
			$(this).css({"border":"1px solid red"});
			var thi = this.nextElementSibling
			thi.innerHTML="首字为字母，长度7-12位";
		}
	}
	zhucePas.onblur=function(){
		if(this.value==""||this.value==null){
			$(this).css({"border":"1px solid red"});
			var thi = this.nextElementSibling
			thi.innerHTML="密码不能为空";
		}else if(zhengze1.test(zhucePas.value)){
			$(this).css({"border":"none"});
			var thi = this.nextElementSibling
			thi.innerHTML="√";
		}else{
			$(this).css({"border":"1px solid red"});
			var thi = this.nextElementSibling
			thi.innerHTML="格式为长度7-12位";
		}
	}
	zhuceOverPas.onblur=function(){
		if(zhuceOverPas.value==""||zhuceOverPas.value==null){
			$(this).css({"border":"1px solid red"});
			var thi = this.nextElementSibling
			thi.innerHTML="不能为空";
		}else if(zhucePas.value==zhuceOverPas.value){
			$(this).css({"border":"1px solid none"});
			var thi = this.nextElementSibling
			thi.innerHTML="√";
		}else{
			$(this).css({"border":"none"});
			var thi = this.nextElementSibling
			thi.innerHTML="两次密码输入不一致";
			$(this).css({"border":"1px solid red"});
		}
	}
	zhuceBtn.onclick=function yanzheng(){
					var l=0;
					var suoyou=document.querySelectorAll(".alll");
					console.log(suoyou);
					for(var i=0;i<suoyou.length;i++){
						if(suoyou[i].innerHTML!="√"){
							var l=2;
                            	$(zhuceBtn).animate({"left":"10px"},100);
                            	$(zhuceBtn).animate({"left":"-10px"},100);
                            	$(zhuceBtn).animate({"left":"10px"},100);
                            	$(zhuceBtn).animate({"left":"-10px"},100);
                            	$(zhuceBtn).animate({"left":"0"},100);
                            	$(zhuceBtn).css({"color":"red"});
								i=suoyou.length;
						}
					}
					if(l==0){
						localStorage.setItem("name",zhuceName.value);
						localStorage.setItem("pas",zhucePas.value);
						$("#denglu").hide();
						$(".login")[0].innerHTML=localStorage.getItem("name");
							}
				}
	dengluBtn.onclick=function(){
		if(dengluName.value==localStorage.getItem("name")&&dengluPas.value==localStorage.getItem("pas")){
			$(dengluBtn).css({"color":"#fff"});
				$("#denglu").hide();
				$(".login")[0].innerHTML=localStorage.getItem("name");
		}else{
			$(dengluBtn).animate({"left":"10px"},100);
        	$(dengluBtn).animate({"left":"-10px"},100);
        	$(dengluBtn).animate({"left":"10px"},100);
        	$(dengluBtn).animate({"left":"-10px"},100);
        	$(dengluBtn).animate({"left":"0"},100);
        	$(dengluBtn).css({"color":"red"});
        	
		}
	}
})
