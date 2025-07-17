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
    let result;
    switch (operator) {
        case "+":
            result = add(firstNum, lastNum);
            break;
        case "-":
            result = sub(firstNum, lastNum);
            break;
        case "*":
            result = mult(firstNum, lastNum);
            break;
        case "/":
            result = div(firstNum, lastNum);
            break;
        default:
            return null;
    }
    if (!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(4));
    }
    return result;
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
const plusminus = document.getElementById("plusminus");
const decimal = document.getElementById("decimal");

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

decimal.addEventListener("click", () => {
    if (shouldResetdisplay) {
        display.value = "0";
        shouldResetdisplay = false;
    }
    if (!display.value.includes(".")) {
        display.value += ".";
    }
});

clear.addEventListener("click", () => {
    display.value = "";
});

equal.addEventListener("click", () => {
    lNum = display.value;
    display.value = operate(fNum, op, lNum);
    shouldResetdisplay = true;
});

plusminus.addEventListener("click", () => {
    display.value = display.value * -1;
});