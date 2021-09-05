let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

let tag1 = document.getElementById('demo1');
tag1.innerHTML = "Browser width is " + width + "px" + "<br>" + "Browser height is " + height + "px";


document.getElementById('demo2').innerHTML = screen.availWidth + ' ' + screen.availWidth;


let tag2 = document.getElementById('demo3');
// tag2.innerHTML = window.location.href;
// tag2.innerHTML = window.location.hostname;
tag2.innerHTML = window.location.pathname;
// tag2.innerHTML = window.location.protocol;
// tag2.innerHTML = window.location.port;


let btn = document.getElementById('btn');
btn.addEventListener("click",changeLocation);
btn.addEventListener("mouseover",showMessage);
btn.addEventListener("mouseout",clearMessage);

function changeLocation(){
	window.location.assign('https://miladpegah.ir');
}

function showMessage(){
	document.getElementById('message').innerHTML = "redirect to htttps://miladpegah.ir";
}

function clearMessage(){
	document.getElementById('message').innerHTML = "";
}