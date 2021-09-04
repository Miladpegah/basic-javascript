let people = [];
let result = '';
function Person(name, family, age){
	this.name = name;
	this.family = family;
	this.age = age;
	this.fullname = function(){
		return this.name + ' ' + this.family;
	}
}

function addpeople(){
	let name = document.getElementById('name').value;
	let family = document.getElementById('family').value;
	let age = document.getElementById('age').value;

	if(isNaN(age)){
		alert('please enter a number for age');
		return false;
	}

	people.push(new Person(name, family, age));
	for(p in people){
		result += people[p].fullname() + '<br>';
	}
		document.getElementById('demo').innerHTML = result;
		result = '';
}

