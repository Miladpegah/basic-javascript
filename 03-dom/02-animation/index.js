let tag = document.getElementById('demo');

tag.style.color = 'red';
tag.style.width='50%';


function startAnimatio(){
	let elem = document.getElementById('animation');
	let pos = 0;
	let id = setInterval(frame,10);

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