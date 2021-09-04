let tag = document.getElementById('btn');

tag.addEventListener("click",click1);
tag.addEventListener("mouseover",click3);
tag.addEventListener("mouseout",click4);
window.addEventListener("resize",function(){
	resize(window.innerWidth);
});


function click1(){
	alert('click is done');
}

let message = document.getElementById('message')

function click3(){
	message.innerHTML = "After click send you a alert";
}

function click4(){
	message.innerHTML = '';
}

function resize(width){
	let el = document.getElementById('windowwidth');
	el.innerHTML = width + ' px';
}