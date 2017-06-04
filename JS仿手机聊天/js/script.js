var $ = function (id) {
	return document.getElementById(id);
};

var picList = ["images/1.jpg", "images/2.jpg"];
var num = 0;

(function () {
	$("insert").onclick = function() {
		if(!oText.value) {
			alert("输入为空");
			return
		}
		var newDiv = document.createElement("div");
		var newI = document.createElement("i");
		var newImg = document.createElement("img");
		if(num == 0) {
			newImg.src = picList[num];
			newImg.className = "pic1";
			newDiv.appendChild(newImg);
			newI.innerHTML = $("oText").value;
			newDiv.appendChild(newI);
			newDiv.className = "chat";
			$("inner").appendChild(newDiv);
		}else {
			newImg.src = picList[num];
			newImg.className = "pic2";
			newDiv.appendChild(newImg);
			newI.innerHTML = $("oText").value;
			newI.className = "fl";
			newDiv.appendChild(newI);
			newDiv.className = "chat";
			$("inner").appendChild(newDiv);
		}
		$("oText").value = "";
	}

	$("pic").onclick = function() {
		if(num == 0) {
			num++;
			$("pic").src = picList[num];
		}else {
			num--;
			$("pic").src = picList[num];
		}
	}
})();