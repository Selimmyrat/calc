// function calc(){
//     let a = document.getElementById('box1').value;
//     let b = document.getElementById('box2').value;
//     let selectOperator = document.getElementById('operators');
//     let result = document.getElementById('result');
//     result.setAttribute('value', 0);

//     if (selectOperator.value === "+") { 
//         result.value = +a + +b; 
//     } else if (selectOperator.value === "-") { 
//         result.value = +a - +b; 
//     } else if (selectOperator.value === "*") { 
//         result.value = +a * +b; 
//     } else if (selectOperator.value === "/") { 
//         result.value = +a / +b; 
//     }
// }

let input = document.getElementById('result');
function display(val){
    let getLast = input.value.charAt(input.value.length - 1);
    let getFirst = input.value.charAt(0);
    if((val === '+' || val === '*' || val === '/' || val === '.') && (getFirst === '')) return;
    if((val === '+' || val === '-' || val === '*' || val === '/' || val === '.') && (getLast === '+' || getLast === '-' || getLast === '*' || getLast === '/' || getLast === '.')) return;
    input.value += val;
}
function clr(){
    input.value = '';
}
function equal(){
    input.value = eval(input.value)
}