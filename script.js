
const btn = document.querySelectorAll("#btn");


function checkExpression(exp){
    if ((parseInt(exp) == exp) || (exp ==".")){
        console.log(exp);
    }
    else if (exp == "+"){
        console.log("add");
    }
    else if (exp == "-"){
        console.log("minus");
    }
    else if (exp == "/"){
        console.log("divide");
    }
    else if (exp =="x"){
        console.log("multiply");
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
    
}