function timer() {
	var countdownTime = 300;
	var time = countdownTime,
		minutes,
		seconds;
	var x = setInterval(function() {
		minutes = parseInt(time / 60, 10);
		seconds = parseInt(time % 60, 10);

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		document.querySelector('#timer').textContent = minutes + ':' + seconds;

		if (--time < 0) {
			time = duration;
		}
	}, 1000);
}

var button = document.querySelector('#primary');
button.addEventListener('click', timer);
