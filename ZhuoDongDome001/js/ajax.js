$(function(){
var Span=document.querySelectorAll("span");
$(Span).each(function(){
	$(this).click(function(){
		var Text = this.innerHTML;
		ajax(Text);
	})
})
var Bouttom = document.querySelector(".icon_search");
$(Bouttom).click(function(){
    var txt = $(".search_input_input")[0].value;
//  console.log(txt);
    ajax(txt);
})
$(".search_input").click(function(){
    var txt = $(".search_input_input")[0].value;
//  console.log(txt);
    ajax(txt);
})
function  ajax(Text){
			var bool = true,
				num=0;
				ajax();
			function ajax(){
				var url = "http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.search.merge&format=json&query="+Text+"&page_no=1&page_size=50&type=-1&data_source=0&use_cluster=1 ";
				$.ajax({
					type:"GET",
					url:url,
					dataType:"jsonp",
					success:function(data){
						console.log(data);
						for(var i=0;i<data.result.song_info.song_list.length;i++){
							var oDiv=document.querySelectorAll(".count-one")[0];
							var call=oDiv.cloneNode(true);
							var cen=document.querySelectorAll(".inner")[3];
							cen.appendChild(call);
							var Img=document.querySelectorAll(".max img")[i];
							if(data.result.song_info.song_list[i].pic_small==""){
								Img.src="img/geshou.png"
							}else{
								Img.src=data.result.song_info.song_list[i].pic_small;
							}
							var P=document.querySelectorAll(".max P")[i];
							P.innerHTML=data.result.song_info.song_list[i].author;
						}
					}
				})
				var rom = document.querySelectorAll(".count-one");
				console.log(rom.length);
				if(rom.length-48>0){
					for(var i=0;i<rom.length-1;i++){
						var max = document.querySelector(".max");
						var last = max.lastElementChild;
						max.removeChild(last);
					}
				}
			}
	
}
ajax("歌手");	
})