var inputoperandA = document.querySelector("#operand_a");
var inputoperandB = document.querySelector("#operand_b");
var inputOperator = document.querySelector("#operator");
var output = document.querySelector("#output");
var error = document.querySelector("#error");

var showError = function(){
	error.setAttribute("class", "");
};

var hideError = function(){
	error.setAttribute("class", "hidden");
};

var showResult = function(result){
	output.value = result + "";
};



var multiply = function(a, b){
	return a * b;
};



var isOperator = function(operator){
	return operator == "+" || operator == "-" || operator == "*" ||
	operator == "/" || operator == "%";
};

var isNumber = function(a){
	return !Number.isNaN(a);
};

var isNonZeroNumber = function(a){
	return isNumber(a) && a != 0;
};

var isInteger = function(a){
	return Number.isInteger(a);
};

var isNaturalNumber = function(a){
	return isInteger(a) && a > 0;
};


var isMultiplication = function(operator, a, b){
	return operator == "*" && isNumber(a) && isNumber(b);
};



var isReady = function(operator, a, b){
	return isDivision(operator, a, b) || isModulus(operator, a, b) ||
	isMultiplication(operator, a, b) || isSubtraction(operator, a, b) || isAddition(operator, a, b);
};

var startCalc = function(){
	var operandA = inputoperandA.value;
	var operandB = inputoperandB.value;
	var operator = inputOperator.value;

	operandA = Number(operandA);
	operandB = Number(operandB);

	hideError();
	if(isReady(operator, operandA, operandB)){
		var result = 0;
		
		}if(operator == "*"){
			result = multiply(operandA, operandB);
		
		showResult(result);
	}else{
		showError();
	}
};

var initApp = function(){
	var calcButton = document.querySelector("#calcButton");

	calcButton.addEventListener("click", startCalc)
};

initApp();