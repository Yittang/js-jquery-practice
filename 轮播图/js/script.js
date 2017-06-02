var pic = $(".banner ul li");//图片的选择
var lib = $(".lib ul li");//指示器的选择
var _index = 0;
var timer;
/*轮播函数*/
$(function() {
	/*显示第一张图*/
	play();
	/*自动轮播*/
	showTime();
	/*鼠标移到指示器上改变对应图片*/
	lib.hover(function() {
		_index = $(this).index();
		play();
		clearInterval(timer);
	},function() {
		showTime();
	})
	/*左侧按钮改变图片*/
	$(".prev").click(function() {
		clearInterval(timer);
		if(_index == 0) {
			_index = 5;
		}
		_index--;
		play();
		showTime()
	});
	/*右侧按钮改变图片*/
	$(".next").click(function() {
		clearInterval(timer);
		if(_index == 4) {
			_index = -1;
		}
		_index++;
		play();
		showTime()
	});
	/*鼠标移到图片上停止轮播*/
	$(".banner").hover(function() {
		clearInterval(timer);
	},function() {
		showTime();
	});
});

/*图片及相对应的指示器的替换*/
function play() {
	pic.eq(_index).fadeIn(300).siblings().fadeOut(300);
	lib.eq(_index).addClass("list5").siblings().removeClass("list5");
}

/*轮播自动播放*/
function showTime() {
	timer = setInterval(function() {
		_index++
		if(_index ==5) {
			_index = 0;
		}
		play();
	},3000);
}

/*菜单选项脚本*/
var sub = $(".category-Flist");
var curId = null;
var sideNav;
var time;
$(".nav ul li").hover(function() {
		curId = $(this).data("id");//取得当前鼠标聚焦的一级菜单li的自定义ID
		sideNav = $("#"+ curId);
		sideNav.removeClass("none");
},function() {
	sideNav.hover(function() {
			sideNav.removeClass("none");
		},function() {
			sideNav.addClass("none");
		});
	sideNav.addClass("none");
})


