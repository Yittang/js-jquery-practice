window.onload = function() {
	//起始语句
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	var arr = [];

	setInterval(function() {
		context.clearRect(0,0,canvas.width,canvas.height);//清除画布

		for(var i =0; i<arr.length; i++) {
			arr[i].r++;
			arr[i].op -= 0.01;
			if(arr[i].op <= 0) {
				arr.splice(i, 1);
			}
		}

		for(var i=0; i<arr.length; i++) {
			context.beginPath();//画圆要起始一条路径
			context.fillStyle = "rgba("+arr[i].c1+","+arr[i].c2+","+arr[i].c3+","+arr[i].op+")";//颜色的绘画
			context.arc(arr[i].x,arr[i].y,arr[i].r,0,2*Math.PI);//画圆：x坐标轴，y轴坐标轴，半径，起始角，结束角
			context.closePath();//结束这条路径
			context.fill();//填充这个圆
		};
	},1000/60);

	
	//生产圆的各个属性
	function createArc() {
		var x = canvas.width * Math.random();
		var y = canvas.height * Math.random();
		var r = 10;
		var c1 = Math.floor(Math.random() * 256);
		var c2 = Math.floor(Math.random() * 256);
		var c3 = Math.floor(Math.random() * 256);
		//每个圆的属性放置在数组中
		arr.push({
			x: x,
			y: y,
			r: r,
			op: 1,
			c1: c1,
			c2: c2,
			c3: c3
		});
	}

	setInterval (function() {
		createArc();
	},200);
};