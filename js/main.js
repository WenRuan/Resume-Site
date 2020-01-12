var i = 0;
var txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
var speed = 20;

function typeWriter() {
	if (i < txt.length){
		document.getElementById("text-type").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
