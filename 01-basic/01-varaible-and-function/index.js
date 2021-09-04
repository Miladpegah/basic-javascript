// let is changable

let name = 'milad';
let num = 2;
let boolean = true;


// const is not changable(can add new varaible but can not change all of const)

const person = {name : 'milad', family : 'pegah', age : 22};
console.log(person);
person.mobile = '09172923062';
person.name = 'reza';
console.log(person);

const person2 = ['reza','milad'];
console.log(person2);
person2.push('mahan');
console.log(person2);

// alert(num);

function alertnum(){
	let num1 = 23;
	let num2 = 232;
	let sumnum = num1 + num2;
	alert(sumnum);
}