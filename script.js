var target_date = new Date("Feb 13, 2018 15:37:25").getTime(); // set the countdown date
var days, hours, minutes, seconds; // variables for time units
var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
//   localStorage.setItem("current_date");
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("current_date");
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
  localStorage.setItem("days",days);
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
  localStorage.setItem("hours",hours);
	minutes = pad( parseInt(seconds_left / 60) );
  localStorage.setItem("minutes",minutes);
	seconds = pad( parseInt( seconds_left % 60 ) );
  localStorage.setItem("seconds",seconds)

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + localStorage.getItem("days") + "</span><span>" + localStorage.getItem("hours") + "</span><span>" + localStorage.getItem("minutes") + "</span><span>" + localStorage.getItem("seconds") + "</span>";
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}
