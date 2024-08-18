const display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function appendToDisplay(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    } catch (e) {
        display.innerText = 'Error';
    }
}
