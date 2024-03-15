const display = document.querySelector(".display");

function clearScreen(){
    display.value  =  "\n";
}

function appendToDisplay(input) {
    display.value += input;
}




function deleteCharacter(){
    var field = document.querySelector(".display")
    var text = field.value;
    if(text.length !== 0){
        field.value = text.substring(0, text.length - 1);
    }
}

let count = 0;

function parenthesis() {
    if (count === 0) {
        display.value += "(";
        count = 1;
    } else {
        display.value += ")";
        count = 0;
    }
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiple(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function pow(a, b){
    return Math.pow(a, b);
}

function percentage(a) {
    return a / 100;
}

function factorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    } else {
        return a * factorial(a - 1);
    }
}

function sqrt(a){
    return Math.sqrt(a);
}


function equal() {
    var field = document.querySelector(".display");
    var text = field.value;
    var operators = ['+', '-', '*', '/', '^', '%', '!', '√'];
    var operator;

    for (var i = 0; i < operators.length; i++) {
        if (text.includes(operators[i])) {
            operator = operators[i];
            break;
        }
    }

    if (operator) {
        var values = text.split(operator);
        var a = parseFloat(values[0]);
        var b = parseFloat(values[1]);
        var result;
        if (!isNaN(a) && !isNaN(b)) {    
            if (operator === '+') {
                result = addition(a, b);
            } else if (operator === '-') {
                result = subtraction(a, b);
            } else if (operator === '*'){
                result = multiple(a, b);
            } else if (operator === '/'){
                result = divide(a, b);
            } else if (operator === '^'){
                result = pow(a, b);
            }
            field.value = result;
        } else if (!isNaN(a)) {
            if (operator === '%') {
                result = percentage(a);
            } else if (operator === '!') {
                result = factorial(a);
            } else if(operator === '√'){
                result = sqrt(a);
            }
            field.value = result;
        }
    }
}