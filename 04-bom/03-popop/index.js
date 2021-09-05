ask = document.getElementById('btn');

ask.addEventListener("click",confirmuser);

function confirmuser(){
		let text;
	if (confirm('is it ok?')) {
		text = "user confirmed";
	}else{
		text = "user not confirmed";
	}
	document.getElementById('message').innerHTML = text;
}

answere = document.getElementById('answere');
answere.addEventListener("click",information);

function information(){
	let text;
	let person = prompt('Who are oyu?');
	if (person == null || person == '') {
		text = "user canceled prompt";
	}else{
		text = "Hello " + person;
	}
	document.getElementById('information').innerHTML = text;
}