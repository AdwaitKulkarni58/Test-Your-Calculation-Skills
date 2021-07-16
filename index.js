let operandArr = ["PLUS", "MINUS", "MULTIPLIED BY"];
let num1;
let num2;
let randomOperand;
let count = 0;

function displayOperation() {
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    randomOperand = operandArr[Math.floor(Math.random() * operandArr.length)];
    document.getElementById("number_one").innerHTML = num1;
    document.getElementById("number_two").innerHTML = num2;
    document.getElementById("operand_type").innerHTML = randomOperand;
}

document.getElementById("reload").addEventListener("click", function () {
    displayOperation();
});

function calculate() {
    switch (randomOperand) {
        case "PLUS":
            add()
            break;
        case "MINUS":
            subtract()
            break;
        case "MULTIPLIED BY":
            multiply()
            break;
    }
}

function add() {
    let res = num1 + num2;
    let userAnswer = document.getElementById("answer").value;
    if (parseInt(userAnswer) === res) {
        count++;
        alert("correct! Your score is " + count);
        displayOperation();
    } else {
        alert("Wrong!");
        displayOperation();
    }
}

function subtract() {
    let res = num1 - num2;
    let userAnswer = document.getElementById("answer").value;
    if (parseInt(userAnswer) === res) {
        count++;
        alert("correct! Your score is " + count);
        displayOperation();
    } else {
        alert("Wrong!");
        displayOperation();
    }
}

function multiply() {
    num1 = document.getElementById("number_one").innerHTML;
    num2 = document.getElementById("number_two").innerHTML;
    let res = num1 * num2;
    let userAnswer = document.getElementById("answer").value;
    if (parseInt(userAnswer) === res) {
        count++;
        alert("Correct! Your score is " + count);
        displayOperation();
    } else {
        alert("Wrong!");
        displayOperation();
    }
}

document.getElementById("calculate").addEventListener("click", function () {
    calculate();
});