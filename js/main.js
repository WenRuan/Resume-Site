//Flicker for terminal

var filled = true;

$(document).ready(function(){

	function flicker(){

		var cursor = $("#insertFlicker");
		
		if(filled == true)
		{
			cursor.html("&#9647")
		}
		else
		{
			cursor.html("&#9646")
		}
		filled = !filled;
	}

	setInterval(flicker, 700);
});