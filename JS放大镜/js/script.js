(function() {
	var small = document.getElementById("small");
	var span = small.getElementsByTagName("span")[0];
	var big = document.getElementById("big");
	var bigImg = big.getElementsByTagName("img")[0];
	small.onmousemove = (function(e) {
		var x = e.clientX;//鼠标的x，y值
		var y = e.clientY;
		var smPicL = small.offsetLeft;//小图的x,y值
		var smPicT = small.offsetTop;
		var currentX = x - smPicL - 50; //放大镜的x，y值
		var currentY = y - smPicT - 50;
		currentX = currentX < 0 ? 0 : currentX;
		currentX = currentX > 310 ? 310 : currentX;
		currentY = currentY < 0 ? 0 : currentY;
		currentY = currentY > 130 ? 130 : currentY;
		span.style.left = currentX + "px";
		span.style.top = currentY + "px";
		span.style.display = "block";
		big.style.display = "block";
		/*大图移动特效*/
		var currentL = -currentX * 2;
		var currentT = -currentY * 2;
		currentL = currentL < -410 ? -410 : currentL;
		currentT = currentT < -130 ? -130 : currentT;
		bigImg.style.left = currentL + "px";
		bigImg.style.top = currentT + "px";
	});

	small.onmouseout = (function() {
		span.style.display = "none";
		big.style.display = "none";
	});
})();

