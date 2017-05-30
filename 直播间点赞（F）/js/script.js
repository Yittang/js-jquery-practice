$(function() {
	$("#btn-click").on("click", function() {
		//图片的位置
		var ctop = $(this).offset().top;
		var cleft = $(this).offset().left + 50;
		//获取1~3号爱心
		var num = Math.floor(Math.random() * 3 + 1);
		//left的随机值 500~900
		var randLeft = Math.floor(Math.random() * 400 + 500);
		$(".aim").append("<img src='images/love"+num+".png' alt='爱心1号'/>");
			$("img").css({
				top: ctop,
				left: cleft
			}).animate({
				top: 100,
				opacity: 0,
				left: randLeft 
			},3000)
	})
});