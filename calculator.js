var input = []
var to_solve = []
var operation = ""

var add = function(num1, num2) {
	return parseInt(num1) + parseInt(num2);
};

var subtract = function(num1, num2) {
	return parseInt(num1) - parseInt(num2);
};

var multiply = function(num1, num2) {
	return parseInt(num1) * parseInt(num2);
};

var divide = function(num1, num2) {
	return parseInt(num1) / parseInt(num2);
};


document.getElementById("seven").onclick=(function(){ 
	input.push(7.0);
	console.log(input.join(""));
});

document.getElementById("eight").onclick=(function(){
	input.push(8.0);
	console.log(input.join(""));
});

document.getElementById("nine").onclick=(function(){ 
	input.push(9.0);
	console.log(input.join(""));
});

document.getElementById("four").onclick=(function(){
	input.push(4.0);
	console.log(input.join(""));
});

document.getElementById("five").onclick=(function(){ 
	input.push(5.0);
	console.log(input.join(""));
});

document.getElementById("six").onclick=(function(){ 
	input.push(6.0);
	console.log(input.join(""));
});

document.getElementById("one").onclick=(function(){ 
	input.push(1.0);
	console.log(input.join(""));
});

document.getElementById("two").onclick=(function(){ 
	input.push(2.0);
	console.log(input.join(""));
});

document.getElementById("three").onclick=(function(){ 
	input.push(3.0);
	console.log(input.join(""));
});

document.getElementById("zero").onclick=(function(){ 
	input.push(0.0);
	console.log(input.join(""));
});

document.getElementById("divide").onclick=(function() { 
	operation = "divide";
	input = input.join("");
	to_solve = input;
	input = [];
	console.log("/");
});

document.getElementById("multiply").onclick=(function() { 
	operation = "multiply";
	input = input.join("");
	to_solve = input;
	input = [];
	console.log("*");
});

document.getElementById("subtract").onclick=(function() { 
	operation = "subtract" 
	input = input.join("");
	to_solve = input;
	input = [];
	console.log("-");
});

document.getElementById("add").onclick=(function() { 
	operation = "add" 
	input = input.join("");
	to_solve = input;
	input = [];
	console.log("+");
});

document.getElementById("equals").onclick=(function() {
	if (operation === "divide") {
		input = input.join("");
		var answer = divide(to_solve, input);
	} else if (operation === "multiply") {
		input = input.join("");
		var answer = multiply(to_solve, input);
	} else if (operation === "subtract") {
		input = input.join("");
		var answer = subtract(to_solve, input);
	} else if (operation === "add") {
		input = input.join("");
		var answer = add(to_solve, input);
	}

	console.log("Answer:", answer);
	input = []; 
	to_solve = [];
	operation = [];	
});

document.getElementById("clear").onclick=(function() {
	input = []; 
	to_solve = [];
	operation = [];
	console.log("Cleared");
});

