const form = document.querySelector("form");
const firstNum = document.querySelector(".firstNumber");
const secondNum = document.querySelector(".secondNumber");
const operator = document.querySelector("#operators");
const result = document.querySelector("span");

const sum = (num1, num2) => parseInt(num1) + parseInt(num2);
const sub = (num1, num2) => parseInt(num1) - parseInt(num2);
const mult = (num1, num2) => parseInt(num1) * parseInt(num2);
const div = (num1, num2) => parseInt(num1) / parseInt(num2);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (e.target[2].value) {
    case "sum":
      result.textContent = sum(e.target[0].value, e.target[1].value);
      break;
    case "sub":
      result.textContent = sub(e.target[0].value, e.target[1].value);
      break;
    case "mult":
      result.textContent = mult(e.target[0].value, e.target[1].value);
      break;
    case "div":
      result.textContent = div(e.target[0].value, e.target[1].value);
      break;
  }
});
