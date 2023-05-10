const display = document.querySelector(".display");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button0 = document.getElementById("0");
const buttonPlus = document.getElementById("+");
const buttonMinus = document.getElementById("-");
const buttonMult = document.getElementById("*");
const buttonDiv = document.getElementById("/");
const buttonDot = document.getElementById("dot");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const equal = document.querySelector(".equal");

button1.addEventListener("click", (e) => {
  display.value += 1;
});
button2.addEventListener("click", (e) => {
  display.value += 2;
});
button3.addEventListener("click", (e) => {
  display.value += 3;
});
button4.addEventListener("click", (e) => {
  display.value += 4;
});
button5.addEventListener("click", (e) => {
  display.value += 5;
});
button6.addEventListener("click", (e) => {
  display.value += 6;
});
button7.addEventListener("click", (e) => {
  display.value += 7;
});
button8.addEventListener("click", (e) => {
  display.value += 8;
});
button9.addEventListener("click", (e) => {
  display.value += 9;
});
button0.addEventListener("click", (e) => {
  display.value += 0;
});
buttonPlus.addEventListener("click", (e) => {
  display.value += "+";
});
buttonMinus.addEventListener("click", (e) => {
  display.value += "-";
});
buttonMult.addEventListener("click", (e) => {
  display.value += "*";
});
buttonDiv.addEventListener("click", (e) => {
  display.value += "/";
});
buttonDot.addEventListener("click", (e) => {
  display.value += ".";
});

del.addEventListener("click", (e) => {
  display.value = display.value.toString().slice(0, -1);
});

clear.addEventListener("click", (e) => {
  display.value = "";
});

equal.addEventListener("click", (e) => {
  if (display.value === "") {
    display.value = "";
  } else {
    display.value = eval(display.value);
  }
});
