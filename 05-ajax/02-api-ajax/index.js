function api(){
	let request = new XMLHttpRequest();
	request.open('GET', 'info.txt', true);

	request.onload = function(){
		let data = JSON.parse(this.request);
		data.forEach(product => {
			console.log(product);
		})
	}

	request.send();
}