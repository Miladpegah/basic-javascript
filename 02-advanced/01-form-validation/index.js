function formValidation(){
	let form = document.forms["form"];
	let input = form['name'].value;

	if (input == '') {
		alert('name is requirement');
		return false;
	}else{
		alert('name sended');
	}
}


function formValidation2(){
	let form = document.forms["form"];
	let input = form['name'].value;
	let message;
	let field = document.getElementById('demo');
	if (isNaN(input)) {
		message = 'input not valid';
		field.style.color = 'red';
		field.innerHTML = message;
		return false;
	}else{
		message = 'input is valid';
		field.style.color = 'green';
		field.innerHTML = message;
		alert('name sended');
	}
}
