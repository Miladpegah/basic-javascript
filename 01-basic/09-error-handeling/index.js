function myFunction(){
	let message,x;
	message = document.getElementById('message');
	message.innerHTML = '';
	x = document.getElementById('num').value;


	try	{
		if (x == '') throw 'empty';
		if (isNaN(x)) throw 'not a number';

		x = Number(x);

		if (x < 5) throw 'to low';
		if (x > 10) throw 'to hight';

	} catch (err) {
		message.innerHTML = "Input is " + err;
	} finally {
		document.getElementById('num').value = '';
	}
}
// throw "throw is a message for developer than if use that out of try, log the message in colsole else send message to catch err";
