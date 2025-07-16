function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mult(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}

let fNum = {};
let op = {};
let lNum = {};

function operate(firstNum, operator, lastNum) {
    firstNum = Number(firstNum);
    lastNum = Number(lastNum);

    switch (operator) {
        case "+":
            return add(firstNum, lastNum);
        case "-":
            return sub(firstNum, lastNum);
        case "*":
            return mult(firstNum, lastNum);
        case "/":
            return div(firstNum, lastNum);
        default:
            return null;
    }
}

