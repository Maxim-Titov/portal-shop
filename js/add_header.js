$(document).ready(function() {
    fetch('../html/site-elements/header.html')
	    .then(response => response.text())
		.then(data => {
			document.getElementById('header').innerHTML = data;
		});
});