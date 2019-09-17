var kongzhidian = document.querySelector(".kongzhidian");
var bofangxian = document.querySelector(".bofangxian");
console.log(kongzhidian.offsetLeft);
var l,h = true;
var b;

$(document).click(function(e){
							if(e.target.className == "nn" || e.target.className == "back-color" || e.target.className.baseVal=="icons"){
								$(".back-color").css("display","block");
							}else{
								$(".back-color").css("display","none");
							}
						});
						var i = 0;
						var eleLinks = document.querySelectorAll('link[title]');
						var eleRadios = document.querySelectorAll('.back-color ul li');
						[].slice.call(eleRadios).forEach(function (radio) {
							radio.addEventListener('click', function () {
								var value = this.id;
								localStorage.setItem("fuseText",value);
								fuse(value);
							});
						});
						console.log(localStorage.getItem('fuseText'));
						//初始化本地存储的皮肤
						if(localStorage.getItem('fuseText') == null){
							fuse("one.css");
						}else{
							fuse(localStorage.getItem('fuseText'));
						}
						function fuse(value){
							[].slice.call(eleLinks).forEach(function (link) {
								link.disabled = true;
								if (link.getAttribute('href') == value) {
									link.disabled = false;
								}
							});
						}



						$(document).click(function(e){
							if(e.target.className.baseVal=="iconT"){
								$(".email-nav").css("display","block");
							}
						});
						$(".email-close").click(function(){
							$(".email-nav").css("display","none");
							pinlun(0);
						});
						$(".email-nav ul li").click(function(){
							pinlun($(this).index());
						});
						function pinlun(index){
							console.log(index);
							$(".email-nav ul li").eq(index).addClass("email-active");
							$(".email-nav ul li").eq(index).siblings().removeClass("email-active");
						}



$('#login').click(function(){
			$(".alert-login").css("display","block");
		});
		$("#erweima").click(function(){
			$(".saoma").css("display","block");
		});
		$(".saoma a").click(function(){
			$(".saoma").css("display","none");
		});
		$("#back").click(function(){
			$(".saoma").css("display","none");
			$("#alr-one").css("display","block");
			$("#res").css("display","none");
		});
		$("#reg").click(function(){
			$(".saoma").css("display","none");
			$("#alr-one").css("display","none");
			$("#res").css("display","block");
		});
		$('#close').click(function(){
			$(".alert-login").css("display","none");
			$("#res").css("display","none");
			$(".saoma").css("display","none");
		});
		$('#closet').click(function(){
			$(".alert-login").css("display","none");
			$("#res").css("display","none");
			$(".saoma").css("display","none");
			$("#alr-one").css("display","block");
		});



var fixArr = document.querySelectorAll("body .fix-nav-item");
		// console.log(fixArr[1].index);
		[].slice.call(fixArr).forEach(function (radio,index) {
			radio.index = index;
			radio.addEventListener('click', function () {
				var that = this.index;
				[].slice.call(fixArr).forEach(function (radiol) {
					if(radiol.index == that){
						radiol.classList.add("fix-nav-active");
					}else{
						radiol.classList.remove("fix-nav-active");
					}
				});
			});
		});


var audio = document.getElementById("audio");
		$(".fix-bottom-kapian").click(function(){
			console.log("2")
			$(this).addClass("kapian-active");
			$(".music-kapian-small").css("display","none");
			$(".music-kapian-batter").css("display","block");
		});
		$(".music-shou").click(function(){
			console.log("1");
			$(".fix-bottom-kapian").removeClass("kapian-active");
			$(".music-kapian-batter").css("display","none");
			$(".music-kapian-small").css("display","block");
			return false;
		});
		var stopI = 0;
		$("#stop").click(function(){
			stopI++;
			if(stopI%2==1){
				audio.play();
				$(".stop-one").css("display","block");
				$(".stop-tow").css("display","none");
			}else{
					  // console.log(audio.currentTime);
					  // audio.play = false;
					  audio.pause();
					  // console.log(audio.currentTime);
					  // audio.currentTime = audio.duration * l/650;
					  // console.log(audio.currentTime);
				$(".stop-one").css("display","none");
				$(".stop-tow").css("display","block");
			}
		});

var n = false;
kongzhidian.onmousedown = function(e){
	console.log("111");
	h=false;
	n = true;
	e = e || window.event;
	var clX = e.clientX;
	var lastLeft = this.offsetLeft;
	var that = this;
	document.onmousemove = function(e){
		if(n){
			e = e || window.event;
			l = lastLeft + e.clientX-clX;
			if(l>=0 && l<=650){
				that.style.left =l/6.5+"%";
				bofangxian.style.width = l/6.5+"%";
			}else if(l<0){
				// that.style.left ="100%";
			}else{
				// that.style.left ="0px";
			}
		}
	}
	document.onmouseup = function(){
		if(n){
			document.onmousemove = null;
			if(l/6.5>=0 && l/6.5<=100){
				b = audio.duration * l/650;
				audio.currentTime = audio.duration * l/650;
				console.log("222");
			}else if(l/6.5<0){
				audio.currentTime = audio.duration * 0;
			}else{
				audio.currentTime = audio.duration * 1;
			}
			// if(stopI%2==1){
			// 	// audio.play();
			// 	console.log("haha");
			// }else{
			// 	// audio.pause();
			// }
			h = true;
			n = false;
		}
	}
}
audio.ontimeupdate = function() {//audio时间改变事件
	// console.log(audio.duration,audio.currentTime);
	if(h){
		spanTime();
		changdu(audio.currentTime/audio.duration);
	}
}
audio.addEventListener("pause",function(){
	
	// this.currentTime =  b;
	// console.log(l);
	console.log(b);
	// console.log(audio.duration,bofangxian.offsetWidth,this.currentTime);
	// this.currentTime = 20;
	// this.currentTime = b;
},false);
audio.addEventListener("play",function(){
	// b = audio.duration * l/650;
	// console.log(this.duration,b);
	// this.currentTime =  15;
	// this.currentTime =  b;
	// console.log(b);
	// console.log(audio.duration,bofangxian.offsetWidth,this.currentTime);
	// this.currentTime = 20;
	// this.currentTime = b;
},false);
// audio.addEventListener('timeupdate',function(){
// 	console.log("1");
// });
// audioSrc("http://music.163.com/song/media/outer/url?id=1376142151.mp3");
// var qingqiu = 0;
audioSrc();
function audioSrc(){
	// audio.src = src;
	// audio.load();
	$("#a").text("123");
	setTimeout(function(){
		var s,f;
		// console.log(isNaN(audio.duration),audio.currentTime);
		if(isNaN(audio.duration)){
			audioSrc("http://music.163.com/song/media/outer/url?id=1376142151.mp3");
			// qingqiu++;
			// if(qingqiu>10){
			// 	alert("你检查一下网络吧！！！亲,可以不刷新页面");
			// }
		}else{
			var totalTime = audio.duration;
			if(totalTime/60<10){
				s = totalTime/60;
				s = "0" + s.toString().substr(0,1);
			}else{
				s = totalTime/60;
				s = s.toString().substr(0,2);
			}
			if(totalTime%60<10){
				f = totalTime%60;
				f = s+ ":0" + f.toString().substr(0,1);
			}else{
				f = totalTime%60;
				f = s+ ":" + f.toString().substr(0,2);
			}
			$("#a").text("00:00");
			$("#b").text(f);
		}
	},400);
}
function spanTime(){
	var totalTime = audio.currentTime;
	if(totalTime/60<10){
		s = totalTime/60;
		s = "0" + s.toString().substr(0,1);
	}else{
		s = totalTime/60;
		s = s.toString().substr(0,2);
	}
	if(totalTime%60<10){
		f = totalTime%60;
		f = s+ ":0" + f.toString().substr(0,1);
	}else{
		f = totalTime%60;
		f = s+ ":" + f.toString().substr(0,2);
	}
	$("#a").text(f);	
}
function changdu(n){
	kongzhidian.style.left = n*100+"%";
	bofangxian.style.width = n*100+"%";
}