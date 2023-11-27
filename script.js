
const equation =document.querySelector("#equation > p")
const resultScreen =document.querySelector("#answer > p")
const numbers = document.querySelectorAll('[data-number]')
const operator = document.querySelectorAll('[data-operator')
const equals = document.querySelectorAll('#equals')
const point = document.querySelectorAll('#point')
const clearBtn = document.querySelectorAll('#clear');

let value1 = '';
let value2 = '';
let sign ='';
numbers.forEach(button => button.addEventListener("click", () =>{
    if (value1 != ''){
        clearResultforSecondValue()
    }
    joinNumbers(button.textContent)
}))
clearBtn.forEach(button => button.addEventListener("click", () =>{
    clear()
}))
operator.forEach(button => button.addEventListener("click", () =>{
    let symbol = button.textContent;
    if (symbol == 'x'){
        sign ='*';
        firstOperand();
        displayFirstOperand(symbol);  
    }else if (symbol == '-'){
        sign = '-'
        firstOperand();
        displayFirstOperand(symbol);
    }else if (symbol == '+'){
        sign = '+'
        firstOperand();
        displayFirstOperand(symbol);
    }else{
        sign = '/'
        firstOperand();
        displayFirstOperand(symbol);
    }
}))
function joinNumbers(operand){
    resultScreen.textContent += operand   
} 
function clearResultforSecondValue(){
    resultScreen.textContent = '';
}  
function displayFirstOperand(a){
    equation.textContent += ' ' + String(resultScreen.textContent) + ' ' + String(a);
   
     
}
function firstOperand(){
    value1 = parseFloat(resultScreen.textContent)
    return value1
}
function clear(){
    equation.textContent='';
    resultScreen.textContent='';
    value1='';
    value2='';
}

function add(val1,val2){
    result = val1 + val2;
}

function subtract(val1,val2){
    result = val2 -  val2;
}


function multiply(val1,val2){
    result = val2 * val2;
}

function multiply(val1,val2){
    result = val2 * val2;
}

function operate(){

}