// ESERCIZIO 1

// let input = parseInt(prompt("Insert number"));
// if (input % 2 === 0) {
//   alert("The number is even");
// } else if (input % 2 === 1) {
//   alert("The number is odd");
// } else {
//   alert("Please insert a valid number");

// ESERCIZIO 2

// let input = parseInt(prompt("Insert number"));
// input % 2 === 0 ? alert("The number is even") : alert("The number is odd");

// ESERCIZIO AVANZATO
let firstNum = parseInt(prompt("Insert first number"));
let secondNum = parseInt(prompt("Insert second number"));
let operator = prompt('insert "+", "-", "*" or "/"');

switch (operator) {
  case "+":
    alert(`${firstNum} ${operator} ${secondNum} = ${firstNum + secondNum}`);
    break;
  case "-":
    alert(`${firstNum} ${operator} ${secondNum} = ${firstNum - secondNum}`);
    break;
  case "*":
    alert(`${firstNum} ${operator} ${secondNum} = ${firstNum * secondNum}`);
    break;
  case "/":
    alert(`${firstNum} ${operator} ${secondNum} = ${firstNum / secondNum}`);
    break;
  default:
    alert("Insert valid operator");
}
