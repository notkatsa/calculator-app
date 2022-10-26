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

function send_to_prev(operator) {
    if (vPrevious != '' && vCurrent != '0') {
        vPrevious = (operate(old_operator, Number(vPrevious), Number(vCurrent)));
        prevDisplay.innerText = vPrevious;
        vCurrent = 0;
        currentDisplay.innerText = vCurrent;
        return;
    }
    else if (operator == 'c') {
        vCurrent = '0';
        vPrevious = '';
        old_operator = '';
        currentDisplay.innerText = '0';
        prevDisplay.innerHTML = '';
        return;
    }
    else {
        old_operator = operator;
    }
    vPrevious = vCurrent;
    prevDisplay.innerText = vPrevious;
    vCurrent = 0;
    currentDisplay.innerText = vCurrent;
}
