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

let shouldResetDisplay = false;

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".num");
const clear = document.getElementById("clear");
const operators = document.querySelectorAll(".op");
const equal = document.getElementById("equal");
const plusminus = document.getElementById("plusminus");
const decimal = document.getElementById("decimal");

numbers.forEach(button => {
    button.addEventListener("click", () => {
        if (shouldResetDisplay) {
            display.value = "";
            shouldResetDisplay = false;
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

document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key)) {
        if (shouldResetDisplay) {
            display.value = "";
            shouldResetDisplay = false;
        }
        display.value += e.key;
    } 
    else if (e.key === "." && !display.value.includes(".")) {
        if (shouldResetDisplay) {
            display.value = "0";
            shouldResetDisplay = false;
        }
        display.value += ".";
    } 
    else if (["+", "-", "*", "/"].includes(e.key)) {
        fNum = display.value;
        op = e.key;
        display.value = "";
    } 
    else if (e.key === "Enter" || e.key === "=") {
        lNum = display.value;
        display.value = operate(fNum, op, lNum);
        shouldResetDisplay = true;
    } 
    else if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
    else if (e.key.toLowerCase() === "c") {
        display.value = "";
        fNum = "";
        op = "";
        lNum = "";
    }
});

decimal.addEventListener("click", () => {
    if (shouldResetDisplay) {
        display.value = "0";
        shouldResetDisplay = false;
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
    shouldResetDisplay = true;
});

plusminus.addEventListener("click", () => {
    display.value = display.value * -1;
});