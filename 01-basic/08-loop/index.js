let names = ['milad', 'ali', 'hassan'];

let el = document.getElementById('shownames');

let text = '';

// for
for (let i = 0; i < names.length; i++) {

	text += names[i] + '<br>';
}
el.innerHTML = text;


// foreach
for(n in names){
	console.log(names[n]);
}



// while
let i = 9;
while(i < 10){
	console.log('while is working');
	i++;
}

// do while
do{
	console.log('do while is working');
}
while(i>10)