/** @format */

$(document).ready(function () {
	window.addEventListener('message', function (event) {
		var item = event.data
		if (item.action == 'http') {
			httpGetAsync(item.url, (response) => { })
		}
		if (item.action == 'clipboard') {
			copyToClipboard(item.coords)
		}
	})
})

function httpGetAsync(theUrl, callback) {
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText)
	}
	xmlHttp.open('GET', theUrl, true) // true for asynchronous
	xmlHttp.send(null)
}

const copyToClipboard = str => {
	const el = document.createElement('textarea');
	el.value = str;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};
