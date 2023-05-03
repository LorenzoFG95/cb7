// ESERCIZIO 1

// let input = parseInt(prompt("Insert number"));
// if (input % 2 === 0) {
//   console.log("The number is even");
// } else if (input % 2 === 1) {
//   console.log("The number is odd");
// } else {
//   console.log("Please insert a valid number");
// }

// ESERCIZIO 2

// let input = parseInt(prompt("Insert number"));
// input % 2 === 0
//   ? console.log("The number is even")
//   : console.log("The number is odd");

// ESERCIZIO AVANZATO
let firstNum = parseInt(prompt("Insert first number"));
let secondNum = parseInt(prompt("Insert second number"));
let operator = prompt('insert "+", "-", "*" or "/"');

switch (operator) {
  case "+":
    console.log(
      `${firstNum} ${operator} ${secondNum} = ${firstNum + secondNum}`
    );
    break;
  case "-":
    console.log(
      `${firstNum} ${operator} ${secondNum} = ${firstNum - secondNum}`
    );
    break;
  case "*":
    console.log(
      `${firstNum} ${operator} ${secondNum} = ${firstNum * secondNum}`
    );
    break;
  case "/":
    console.log(
      `${firstNum} ${operator} ${secondNum} = ${firstNum / secondNum}`
    );
    break;
  default:
    console.log("Insert valid operator");
}
