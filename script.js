
const equation =document.querySelector("#equation > p")
const resultScreen =document.querySelector("#answer > p")
const numbers = document.querySelectorAll('[data-number]')
const operator = document.querySelectorAll('[data-operator')
const equals = document.querySelectorAll('#equals')
const pointBtn = document.querySelectorAll('#point')
const clearBtn = document.querySelectorAll('#clear');
const delBtn = document.querySelectorAll('#delete')

let value1 = '';
let value2 = '';
let sign ='';
let point = '';

numbers.forEach(button => button.addEventListener("click", () =>{
    joinNumbers(button.textContent)
}))
clearBtn.forEach(button => button.addEventListener("click", () =>{
    clear()
}))
operator.forEach(button => button.addEventListener("click", () =>{
    if(!sign){
        let symbol = button.textContent;
        if (symbol == 'x'){
            sign = '*'
        }else if (symbol == '-'){ 
            sign = '-'
        }else if (symbol == '+'){
            sign = '+'
        }else{
            sign = '÷'
        }
        firstOperand();
        displayFirstOperand(symbol);
        clearResultforSecondValue();
        
}}))
equals.forEach(button => button.addEventListener('click', () =>{
    secondOperand();
    operate()
    
}))
pointBtn.forEach(button => button.addEventListener("click", () =>{
    //why is (!point) different to (point == '')//
    if (point == ''){
       if(resultScreen.textContent == ''){
        point = '0.'
        resultScreen.textContent += point
       } else{
        point = '.'
        resultScreen.textContent+= point
       }
    }
}))
delBtn.forEach(button => button.addEventListener('click', () =>{
    deleteNumber()
}))
function joinNumbers(operand){
    resultScreen.textContent += operand   
} 
function clearResultforSecondValue(){
    resultScreen.textContent = '';
    point=  '';
}  
function operate(){
    if(value1 != ''&& value2 != ''){
        if(sign == '+'){
            add(value1,value2)
        }else if (sign == '-'){
            subtract(value1,value2)
        }else if (sign == '*'){
            multiply(value1, value2)
        }else{
            divide(value1, value2)

        }
    } 
        displayFirstResult()
}
function displayFirstOperand(a){
    equation.textContent = ' ' + String(resultScreen.textContent) + ' ' + String(a);
}
function displayFirstResult(){
    sign =''
    value2=''
    let result = resultScreen.textContent
    equation.textContent = ' = ' + result
    value1 = result
    result=''
}
function firstOperand(){
    value1 = parseFloat(resultScreen.textContent)
    return value1
}
function secondOperand(){
    if (value1!='' &&  resultScreen.textContent != ''){
        value2 = parseFloat(resultScreen.textContent)
        return value2
}}
function clear(){
    equation.textContent='';
    resultScreen.textContent='';
    value1='';
    value2='';
    sign ='';
    point=  '';
}

function add(val1,val2){
    result = val1 + val2;
    equation.textContent += val2
    resultScreen.textContent= result
}

function subtract(val1,val2){
    result = val1 -  val2;
    equation.textContent += val2
    resultScreen.textContent= result
}
function multiply(val1,val2){
    result = val1* val2;
    equation.textContent += val2
    resultScreen.textContent= result
}
function divide(val1,val2){
    if (val2==0){
        resultScreen.textContent= 'Zero divisor alert!\
         I\'m good but not \'divide by zero\'\
             good.Press clear and Try again!'
    }else{
        result =val1/val2
        equation.textContent += val2
        resultScreen.textContent= result
    }
    
}
    
function deleteNumber() {
  resultScreen.textContent = resultScreen.textContent.toString().slice(0, -1)
}