let btn = document.getElementById('btn');
btn.addEventListener("click",addPara);

function addPara(){
	let para = document.createElement('p');
	let node = document.createTextNode('this is new');
	para.appendChild(node);

	let el = document.getElementById('div');
	// el.appendChild(para);

	let pr2 = document.getElementById('p2');
	el.insertBefore(para, pr2);

}

let dbtn = document.getElementById('dbtn');

dbtn.addEventListener("click",rmPara);

function rmPara(){
	let el = document.getElementById('div');
	let child = document.getElementById('p2');
	el.removeChild(child);
}


let cbtn = document.getElementById('cbtn');

dbtn.addEventListener("click",editPara);

function editPara(){
	let para = document.createElement('p');
	let node = document.createTextNode('text changed');
	let el = document.getElementById('div');
	let child = document.getElementById('p2');
	el.replaceChild(para,child);
}

