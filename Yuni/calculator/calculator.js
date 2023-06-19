const inputBox = document.getElementById("input");

let num = "";
let symbol;

function btn_click(number) {
  input.value += number;
}

function cal(operator) {
  var firstNum = inputBox.value;
  num = parseFloat(firstNum);
  symbol = operator;
  inputBox.value = "";
}

function result() {
  var secondNum = parseFloat(inputBox.value);
  var result;
  switch (symbol) {
    case "+":
      result = num + secondNum;
      inputBox.value = result;
      break;
    case "-":
      result = Number(num) - Number(secondNum);
      inputBox.value = result;
      break;
    case "*":
      result = Number(num) * Number(secondNum);
      inputBox.value = result;
      break;
    case "/":
      result = Number(num) / Number(secondNum);
      inputBox.value = result;
      break;
  }
}

function reset() {
  input.value = "";
}
