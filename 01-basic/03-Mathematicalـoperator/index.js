let x = 10;
let y = 20;

let el = document.getElementById('lblresult');

// el.innerHTML = x + y;
// el.innerHTML = x - y;
// x++;

// x += 2;
// x -= 2;
// x *= 2;
// x /= 2;

el.innerHTML = x;



function sum(){
	let num1 = document.getElementById('num1').value;
	let num2 = document.getElementById('num2').value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	let sum = num1 + num2;
	el.innerHTML = sum;


}