const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const multiply = function (num1, num2) {
    return num1 * num2;
};

const divide = function (num1, num2) {
    return (num1/num2);
}

const operate = (operator, num1, num2) => {
    var solution = 0;
    switch (operator) {
        case '+':
            solution = add(num1, num2);
            break;
        case '-':
            solution = subtract(num1, num2);
            break;
        case 'x':
            solution = multiply(num1, num2);
            break;
        case '%':
            solution = divide(num1, num2);
            break;
        default:
            solution = 0;
            break;
    }
    return solution;
}

const currentDisplay = document.getElementById("v-current");
var vCurrent = '0';
currentDisplay.innerText = vCurrent;

const prevDisplay = document.getElementById("v-previous")
var vPrevious = '';

const nums = document.getElementsByClassName("number");
Array.from(nums).forEach(num => {
    num.addEventListener('click', () => write_display(num.textContent));
});

const ops = document.getElementsByClassName("operator");
Array.from(ops).forEach(op => {
    op.addEventListener('click', () => send_to_prev(op.textContent));
})

function write_display(num) {
    if (vCurrent == '0') vCurrent = num;
    else vCurrent += num;
    currentDisplay.innerText = vCurrent;
}

var prevOp = ''
function send_to_prev(operator){
    if (operator == '=') {
        vCurrent = operate(prevOp, Number(vPrevious), Number(vCurrent));
        vPrevious = '';
    }
    else if (operator == 'c') {
        vCurrent = '0';
        vPrevious = '';
    }
    else if (vPrevious!= '' && vCurrent != '0') {
        vPrevious = operate(prevOp, Number(vPrevious), Number(vCurrent));
        prevOp = operator;
        vCurrent = '0';
    }
    else {
        vPrevious = vCurrent;
        vCurrent = 0;
        prevOp = operator;
    }
    currentDisplay.innerText = vCurrent;
    prevDisplay.innerText = vPrevious;
}