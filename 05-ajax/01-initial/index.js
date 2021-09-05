let loader = document.getElementById('start');
loader.addEventListener("click",loadDoc);
loader.addEventListener("mouseover",showMessage);
loader.addEventListener("mouseout",clearMessage);


function loadDoc(){
	let xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'info.txt', true);
	xhttp.send();

	xhttp.onreadystatechange = function (){
		document.getElementById('text').innerHTML = this.responseText;
	}
}




function showMessage(){
	document.getElementById('message').innerHTML = "On click send a ajax request an load docs.";
}

function clearMessage(){
	document.getElementById('message').innerHTML = "";
}