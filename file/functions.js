/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date1){
	//var date1 =new Date('2021/2/19 13:18:00');
	var date2 =new Date(); 
	
	var sec = date2.getTime() - date1.getTime();

	var second = 1000, minute = 60 * second, hour = 60 * minute, day = 24 * hour;


	var days = Math.floor(sec / day);
	sec -= days * day;
	var hours = Math.floor(sec / hour);
	sec -= hours * hour;
	var minutes = Math.floor(sec / minute);
	sec -= minutes * minute;
	var seconds = Math.floor(sec / second);
	//document.getElementById("demo").innerHTML=(days + " 天" + (days != 1 ? "" : "") + ", " + hours + " 小时" + (hours != 1 ? "" : "") + ", " + minutes + " 分" + (minutes != 1 ? "" : "") + ", " + seconds + " 秒" + (seconds != 1 ? "" : ""));
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}
