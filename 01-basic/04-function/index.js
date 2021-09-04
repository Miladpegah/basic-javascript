function sayHello(){
	console.log('say hello');
}


function sum(x, y){
	return x + y;
}


let el = document.getElementById('lblresult');
el.innerHTML = sum(2,4);

// anynimous function

(function(){
	console.log(sum('milad', 'pegah'));
	sayHello();
})();



// arrow function 

var func = (a,b) => a+b;
console.log(func(1,2));

var func2 = (x,y) => {return x-y};
console.log(func2);


// multipule argument to function
function test(){
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

test('milad', 2, true);
