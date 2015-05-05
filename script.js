$(document).ready(function() {

	var total = 0; 
	var num1 = " ";
	var num2 = " ";
	var op = " ";
	var blink = function()  {
		$("#result").fadeOut(50).fadeIn(50);
	}
	
	$('.num_button').mousedown(function(){
		var button = $(this).text();
		

		if(isNaN(button)) {
			if(button === "C") {
				total = 0;
				num1 = " ";
				num2 = " ";
				op = " ";
				$('#result').text(total);
				blink();

			}
			else if(button === "=") {
				switch(op) {
					case "x":
						total = num1 * num2;
						break;
					case "/":
						total = num1 / num2;
						break;
					case "+":
						total = Number(num1) + Number(num2);
						break;
					case "-":
						total = num1 - num2;
						break;
					default:
					
				}
				$('#result').text(total);
				if(num2 == total) {
					blink();
				}
				num1 = total;

			}
			else {
				op = button;
				blink();
			}

		} else {
			if(op === " ") {
				num1 = num1 + button;
				$('#result').text(num1);
			}
			else {
				if(total != 0) {
					num1 = total;
				}
				num2 = num2 + button;
				$('#result').text(num2);
				if(num1 === num2) {
					blink();
				}
			}
		}



	});
	

});




