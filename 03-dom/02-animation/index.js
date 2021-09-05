let tag = document.getElementById('demo');

tag.style.color = 'red';
tag.style.width='50%';


function startAnimatio(){
	let elem = document.getElementById('animation');
	let pos = 0;
	let id = setInterval(frame,50);

	function frame(){
		if(pos == 35){
			pos = 0;
			// clearInterval(id);
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
})();


(function(){
	let elem = document.getElementById('animation2');
	let pos = 0;
	let id = setInterval(frame,50);
	let margin = 40;	
	function frame(){
		if(pos == 37 && margin == 3){
			test();
			clearInterval(id);
		}else{
			pos++;
			margin--;
			elem.style.width = pos +	'rem';
			elem.style.height = pos +	'rem';
			elem.style.margin = margin + '%';
		}
	}
})();
function test(){
	let elem = document.getElementById('animation3');
	let psdsos = 0;
	let ids = setInterval(frame,50);
	let marsdgin = 55;	
	function frame(){
		if(psdsos == 40 && marsdgin == 15){
			clearInterval(ids);
			clearInterval(id);
		}else{
			psdsos++;
			marsdgin--;
			elem.style.width = psdsos * 2 + '%';
			elem.style.height = psdsos * 2 + '%';
			elem.style.margin = marsdgin + '%';
		}
	}
}

