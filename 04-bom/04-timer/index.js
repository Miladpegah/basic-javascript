function showAlert(){
	alert(".....");
}



let myTime = setInterval(myTimer,1000);


 function myTimer(){
 	let d = new Date();
 	document.getElementById('demo').innerHTML = d.toLocaleTimeString();
 }

 function stopWatch(){
 	clearInterval(myTime);
 }


 (function write(){
	let el =document.getElementById('timer');
	let time = 30;
	let id = setInterval(frame,1000);
	function frame(){
		if (time <= 0) {
			clearInterval(id);
			alert("Time over");
			el.innerHTML = "Time Over"; 
		}else{
			time--;
			el.innerHTML = time; 
		}

	}
	function stopTimer(){
 		clearInterval(id);
	 }
})();
