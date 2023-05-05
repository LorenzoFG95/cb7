//// ESERCIZIO 2

// function calculator(firstNum, secondNum, operator) {
//   switch (operator) {
//     case "+":
//       return `${firstNum} ${operator} ${secondNum} = ${firstNum + secondNum}`;
//       break;
//     case "-":
//       return `${firstNum} ${operator} ${secondNum} = ${firstNum - secondNum}`;
//       break;
//     case "*":
//       return `${firstNum} ${operator} ${secondNum} = ${firstNum * secondNum}`;
//       break;
//     case "/":
//       return `${firstNum} ${operator} ${secondNum} = ${firstNum / secondNum}`;
//       break;
//     default:
//       return "Insert valid operator";
//   }
// }

// console.log("di seguito alcuni test");
// console.log(calculator(2, 5, "*"));
// console.log(calculator(10, 3, "-"));
// console.log(calculator(33, 3, "/"));
// console.log(calculator(1, 999, "*"));
// console.log(calculator(50, 369, "+"));
// console.log(calculator(3, 5, "ciao"));

//// ESERCIZIO 3

// const lorenzoInfo = {
//   firstName: "Lorenzo",
//   secondName: "Fraterrigo Garofalo",
//   age: 27,
//   gender: "male",
//   height: 175,
//   weight: 125,
//   maxBench: 135,
//   maxDeadlift: 230,
//   maxSquat: 230,
// };

// console.log(`Lorenzo ha ${lorenzoInfo.age} anni.`);
// console.log(`Lorenzo è alto ${lorenzoInfo.height} centimetri.`);
// console.log(
//   `Lorenzo è in grado di sollevare ${lorenzoInfo.maxSquat}Kg nello squat.`
// );

//// ESERCIZIO AVANZATO

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}
function subtraction(firstNum, secondNum) {
  return firstNum - secondNum;
}
function product(firstNum, secondNum) {
  return firstNum * secondNum;
}
function division(firstNum, secondNum) {
  return firstNum / secondNum;
}

function calculator() {
  let firstNum = parseInt(prompt("Insert first number"));
  let secondNum = parseInt(prompt("Insert second number"));
  let operator = prompt('insert "+", "-", "*" or "/"');
  switch (operator) {
    case "+":
      return sum(firstNum, secondNum);
      break;
    case "-":
      return subtraction(firstNum, secondNum);
      break;
    case "*":
      return product(firstNum, secondNum);
      break;
    case "/":
      return division(firstNum, secondNum);
      break;
    default:
      console.log("Insert valid operator");
  }
}

console.log("Il risultato è " + calculator());
