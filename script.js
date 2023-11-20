
const btn = document.querySelectorAll("#btn");
const operands =document.querySelector("#operand > p")

        
function checkExpression(exp){
    if ((parseInt(exp) == exp) || (exp ==".")){
        joinNumbers(exp);
    }
    else if (exp == "+"){
        console.log("+");
    }
    else if (exp == "-"){
        console.log("-");
    }
    else if (exp == "/"){
        console.log("/");
    }
    else if (exp =="x"){
        console.log("*");
        
    }
    else if (exp =="="){
        console.log("equals");
        }
    
}
btn.forEach(button => button.addEventListener("click", () =>{
    let expression = button.textContent;
    checkExpression(expression);
}))

function joinNumbers(operand){
    let value = operands.innerText;
    value = value + operand;
    operands.innerText =value;
    
}

function clear(exp){
    let value = ''
    operands.innerText =value;
}