$(function(){
	$(".banner_center").mouseover(function(){
		$("#img_one").animate({"opacity":"1"},1000)
		$(".qingting_center").animate({"top":"284px"},1000)
		$(".center_item_two").delay(200).animate({"margin":"30px 0","opacity":"1"},1000)
		$(".btns_down").delay(400).animate({"opacity":"1"},1000)
		
		
	})
	$(".part_one").mouseover(function(){
		$(".part_list_one").animate({
			"left":"0"
		},1000)
		$(".part_list_two").animate({
			"right":"0"
		},1000)
	})
	$(".part_two").mouseover(function(){
		$("#tag_item_one").animate({"top":"161px","opacity":"1"},1000)
		$("#tag_item_two").delay(400).animate({"top":"161px","opacity":"1"},900)
		$("#tag_item_three").delay(800).animate({"top":"161px","opacity":"1"},800)
		$(".tag_list").delay(1200).animate({"top":"0"},1000)
	})
	
	
	$(".part_three").mouseover(function(){
		$(".tag_box_one").animate({"opacity":"1","margin":"30px auto 160px"},1000)
	})
	
	
	$(".part_four").mouseover(function(){
		$(".slow_one").animate({"right":"0"},1000)
		$(".slow_two").animate({"left":"0"},1000)
	})
	
	
	$(".part_five").mouseover(function(){
		$(".fast_one").animate({"left":"0","opacity":"1"},1000)
		$(".fast_two").animate({"right":"0","opacity":"1"},1000)
	})
	
	
	$(".part_six").mouseover(function(){
		$(".super_one").animate({"top":"140px","opacity":"1"},1000)
		$(".super_two").delay(200).animate({"bottom":"170px","opacity":"1"},1000)
		$(".btn_know").delay(600).animate({"margin":"790px auto 0","opacity":"1"},800)
	})
	
	$(".part_seven").mouseover(function(){
		$(".try_one").animate({"top":"198px","opacity":"1"},800)
		$(".btn_down_one").delay(200).animate({"margin":"285px auto 0","opacity":"1"},800)
	})
	
	
	
	
	
	
	
	
	
	
})