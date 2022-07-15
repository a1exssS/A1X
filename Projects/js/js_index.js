"Use strict"
// search bar
document.getElementById('headerSearchBtn').onclick = function () {
	let s1mple = document.getElementById('headerSearch').value;
	if (s1mple == "s1mple") {
		// setTimeout(function () {
		window.location.href = 'https://www.youtube.com/';
		// });
	}
	else {
		alert(`Sorry, but we didn't ${s1mple}`)
	}
}

// clock
setInterval(() => {
	let hours = document.getElementById('hours')
	let minutes = document.getElementById('minutes')
	let ampm = document.getElementById('ampm')

	let h = new Date().getHours();
	let m = new Date().getMinutes();

	let am = h >= 12 ? "PM" : "AM"

	if (h > 12) {
		h = h - 12
	}

	h = (h < 10) ? "0" + h : h
	m = (m < 10) ? "0" + m : m

	hours.innerHTML = h;
	minutes.innerHTML = m;
	ampm.innerHTML = am;
})