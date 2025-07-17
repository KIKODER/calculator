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

let fNum = "";
let op = "";
let lNum = "";

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".num");
const clear = document.getElementById("clear");

numbers.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

