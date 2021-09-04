// let tags = document.getElementsByTagName("p");
// for (t in tags){
// 	console.log(tags[t].innerHTML);
// }



// let tags = document.getElementsByClassName("class");
// for (t in tags){
// 	console.log(tags[t].innerHTML);
// }



// let tags = document.querySelectorAll("p.class");
// for (t in tags){
// 	console.log(tags[t].innerHTML);
// }


function myFunction(){
	let form = document.forms['form'];
let text = '';
console.log(form);
for (var i = 0; i < form.length; i++) {
	text += form.elements[i].value + "<br>";
}

document.getElementById('demo').innerHTML = text;
}