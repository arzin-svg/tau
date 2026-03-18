let display = document.getElementById('display');

function appendNumber(num) {
    if (display.value === '0' && num !== '.') {
        display.value = num;
    } else if (!(display.value.includes('.') && num === '.')) {
        display.value += num;
    }
}

function appendOperator(op) {
    if (display.value !== '' && display.value[display.value.length - 1] !== '+' && display.value[display.value.length - 1] !== '-' && display.value[display.value.length - 1] !== '*' && display.value[display.value.length - 1] !== '/') {
        display.value += op;
    }
}

function clearDisplay() {
    display.value = '0';
}

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '0';
        }, 1500);
    }
}