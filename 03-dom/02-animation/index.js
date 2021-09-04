let tag = document.getElementById('demo');

tag.style.color = 'red';
tag.style.width='50%';


function startAnimatio(){
	let elem = document.getElementById('animation');
	let pos = 0;
	let id = setInterval(frame,50);

	function frame(){
		if(pos == 35){
			clearInterval(id);
		}else{
			pos++;
			elem.style.top = pos +	'rem';
			elem.style.left = pos +	'rem';
		}
	}
}

(function write(){
	let el =document.getElementById('demo');
	let text = -1;
	let id = setInterval(frame,50);
	let varaible = 'Lorem ipsum dolor sit amet';
	function frame(){
		let array1 = varaible.split('');
		if (text == array1.length - 1) {
			clearInterval();
		}else{
			text++;
			el.innerHTML += array1[text]; 
		}

	}
	// let test = frame();
	// function test1(){
	// 	for (let i = 0; i < test.length; i++){
	// 		el.innerHTML += test[i];
	// 	}
	// }
	// setInterval(test1(),100);
})();