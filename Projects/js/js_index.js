"Use strict"

document.getElementById('headerSearchBtn').onclick = function () {
	let s1mple = document.getElementById('headerSearch').value;
	if (s1mple == "s1mple") {
		setTimeout(function () {
			window.location.href = 'https://www.youtube.com/';
		});
	}
	else {
		alert(`Sorry, but we didn't ${s1mple}`)
	}
}