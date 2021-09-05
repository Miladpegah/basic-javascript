let back = document.getElementById('back');
let forward = document.getElementById('forward');


back.addEventListener("click",goBack);
forward.addEventListener("click",goForward);

function goBack(){
	window.history.back();
}

function goForward(){
	window.history.forward();
}