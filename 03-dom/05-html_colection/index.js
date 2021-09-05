let mycollection = document.getElementsByTagName('p');

document.getElementById('demo').innerHTML = mycollection[0].innerHTML;

console.log(mycollection.length);

let btn = document.getElementById('btn');
btn.addEventListener("click",changeColor);


function changeColor(){
	for(n in mycollection){
		let tag = mycollection[n];
		tag.style.color = 'red';
	}
}
