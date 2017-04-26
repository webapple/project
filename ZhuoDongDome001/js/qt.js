$(function(){
	initCarousel: function(selector, timeout) {
            var now = 0;
            for(var i = 0; i < 3; i++){
                $(selector + i).css('z-index', 2 - i);
            }
            setInterval(function(){
                var next = now === 2 ? 0 : now + 1;
                var nextnext = now === 0 ? 2 : now - 1;
                var nowPic = $(selector + now);
                var nextPic = $(selector + next);
                var nextnextPic = $(selector + nextnext);
                nowPic.animate({
                    opacity: "0"
                }, 1000, 'linear', function(){
                    nowPic.css('z-index', 0).css('opacity', '1');
                    nextPic.css('z-index', 2);
                    nextnextPic.css('z-index', 1);
                });
                now = next;
            }, timeout);
        }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

