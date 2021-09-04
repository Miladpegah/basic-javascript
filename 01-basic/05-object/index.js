let person = {
	name : 'milad',
	family : 'pegah',
	age : 22,
	fullname : function (){
		return this.name + this.family;
	}
};

// console.log(person);  //show all object
// console.log(person.name);  //show part of object
console.log(person.fullname());  //call object function
