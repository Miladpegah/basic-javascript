function showDate(){
	let el = document.getElementById('lbl');
	el.innerHTML = Date();
}

function change(value){
	let el = document.getElementById('change');
	el.innerHTML = value;
}

function keypress(value){
	let el = document.getElementById('press');
	el.innerHTML = value;
}