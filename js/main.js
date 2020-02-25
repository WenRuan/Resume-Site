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

////////////////////////////////////////////////////////



	//Display projects
	$("#schoolButton").on("click", function(){
		$(".school").removeClass("hidden");
		$(".work").addClass("hidden");
		$(".forFun").addClass("hidden");
	});

	$("#workButton").on("click", function(){
		$(".work").removeClass("hidden");
		$(".school").addClass("hidden");
		$(".forFun").addClass("hidden");
	});

	$("#forFunButton").on("click", function(){
		$(".forFun").removeClass("hidden");
		$(".work").addClass("hidden");
		$(".school").addClass("hidden");
	});

});

