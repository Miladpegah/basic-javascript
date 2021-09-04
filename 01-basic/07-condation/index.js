let x = 9;
if (x > 8) {
	console.log('True');
}else{
	console.log('False');
}


// and
// if (x > 8 && x > 10) {
// 	console.log('True');
// }else{
// 	console.log('False');
// }



// or
// if (x > 8 || x > 10) {
// 	console.log('True');
// }else{
// 	console.log('False');
// }

// else if

// let time = 10;
// if (time <= 10) {
// 	console.log('good morning');
// }
// else if(time > 18){
// 	console.log('good day');
// }
// else {
// 	console.log('good night');
// }


switch(new Date().getDay()){
	case 0:{
		console.log('1');
		break;
	}
	case 1:{
		console.log('2');
		break;
	}
	case 2:{
		console.log('3');
		break;
	}
	case 3:{
		console.log('4');
		break;
	}
	case 4:{
		console.log('5');
		break;
	}
	case 5:{
		console.log('6');
		break;
	}
	default:{
		console.log('7');
		break;
	}

}
