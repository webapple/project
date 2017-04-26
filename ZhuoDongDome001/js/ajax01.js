$(function(){
var Span=document.querySelectorAll(".search span");
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
var Bouttom = document.querySelector(".search_input");
$(Bouttom).click(function(){
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
							var id = data.result.song_info.song_list[0].album_id;
							$.ajax({
								type:"GET",
								url:"http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.album.getAlbumInfo&format=json&album_id="+id+"",
								dataType:"jsonp",
								success:function(data){
									console.log(data);
									console.log(id);
									if(id==0){
										alert("本API暂无此专辑");
									}
										var Img=document.querySelector(".max img");
										if(data.albumInfo.pic_s500==""){
											Img.src="img/geshou.png"
										}else{
											Img.src=data.albumInfo.pic_s500;
										}
										var P1=document.querySelector(".max .album_title");
										P1.innerHTML = "专辑名："+data.albumInfo.title;
										var P2=document.querySelector(".max .year");
										P2.innerHTML = "年份："+data.albumInfo.publishtime;
										var P3=document.querySelector(".max .info");
										console.log(P3);
										P3.innerHTML = "简介："+data.albumInfo.info;
										console.log(data.albumInfo.info);
										if(data.albumInfo.info==" "||data.albumInfo.info==""){
											P3.innerHTML = "此专辑暂无简介";
										}
										var P=document.querySelector(".max .title");
                                        P.innerHTML = "包括歌曲：";   
									for(var i=0;i<data.songlist.length;i++){
										P.innerHTML += data.songlist[i].title+"/";
									}
								}
							})
					}
				})
				var rom = document.querySelectorAll(".count-one");
				if(rom.length-48>0){
					for(var i=0;i<rom.length-1;i++){
						var max = document.querySelector(".max");
						var last = max.lastElementChild;
						max.removeChild(last);
					}
				}
			}
	
}
ajax("八度空间");	
});
