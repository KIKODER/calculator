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
    if (y == 0) {
        return "Nice try...";
    }
    else {
        return x / y;
    }
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

let shouldResetdisplay = false;

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".num");
const clear = document.getElementById("clear");
const operators = document.querySelectorAll(".op");
const equal = document.getElementById("equal");

numbers.forEach(button => {
    button.addEventListener("click", () => {
        if (shouldResetdisplay) {
            display.value = "";
            shouldResetdisplay = false;
        }
        display.value += button.textContent;
    });
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        fNum = display.value;
        op = button.textContent;
        display.value = "";
    });
});

clear.addEventListener("click", () => {
    display.value = "";
});

equal.addEventListener("click", () => {
    lNum = display.value;
    display.value = operate(fNum, op, lNum);
    shouldResetdisplay = true;
});