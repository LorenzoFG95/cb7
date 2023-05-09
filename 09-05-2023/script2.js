// Per fare funzionare il pulsante hamburger

const hamburgerBtn = document.querySelector(".hamburger");
const tendinaDiv = document.querySelector(".tendina");

function hamburgerFunc() {
  console.log("Hai cliccato");
  tendinaDiv.classList.toggle("show");
}

hamburgerBtn.addEventListener("click", hamburgerFunc);

// Fine js per hamburger

// Esercizio 2
const form = document.getElementById("esercizio2");
const input = document.getElementById("input2");
const output = document.getElementById("output");

function submit(event) {
  event.preventDefault();
  output.textContent = input.value;
  input.value = "";
}

form.addEventListener("submit", submit);
// Fine esercizio 2
