fetch('../html/site-elements/header.html')
	.then(response => response.text())
	.then(data => {
		document.getElementById('header').innerHTML = data;
	});

fetch('../html/site-elements/slider.html')
	.then(response => response.text())
	.then(data => {
		document.getElementById('slider').innerHTML = data;
	});

fetch('../html/site-elements/footer.html')
	.then(response => response.text())
	.then(data => {
		document.getElementById('footer').innerHTML = data;
	});