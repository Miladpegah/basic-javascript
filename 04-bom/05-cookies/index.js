function setCookie(cname, cvalue, exdays){
	let d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path/";
}

function getCookie(cname){
	let name = cname + "=";
	let decodedcookie = decodeURIComponent(document.cookie);
	let ce = decodedcookie.split(";");
	for (let i = 0; i < ce.length; i++){
		let c = ce[i];
		while (c.charAt(0) == ' '){
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}


function chackCookie(){
	let user = getCookie('username');
	if (user != '') {
		alert(user + " cookie alridy is exist");
	}else{
		user = prompt("please enter your name");
		if (user != "" && user != null) {
			setCookie("username", user, 30);
			alert("Set cookie is DONE for 30 days");

		}
	}
}

(function(){
	let user = getCookie('username');
	if (user != '') {
		alert("welcome again " + user);
	}
})();