let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
function mOver(){
	document.getElementById('demo').innerHTML = text;
}

function mOut(){
	document.getElementById('demo').innerHTML = '';
}


let up;
function mUp(id){
	id.style.backgroundColor = 'gold';

	id.innerHTML = 'Tank you';
	up = setTimeout(blackDiv,2000);
}
function mDown(id){
	id.style.backgroundColor = 'orange';
	id.innerHTML = "Release Me!";
	clearInterval(up);
}

function blackDiv(){
	document.getElementById('div2').style.backgroundColor = 'black';
	document.getElementById('div2').innerHTML = "Click again";
}
