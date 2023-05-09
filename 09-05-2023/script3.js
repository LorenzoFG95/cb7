// Per fare funzionare il pulsante hamburger

const hamburgerBtn = document.querySelector(".hamburger");
const tendinaDiv = document.querySelector(".tendina");

function hamburgerFunc() {
  console.log("Hai cliccato");
  tendinaDiv.classList.toggle("show");
}

hamburgerBtn.addEventListener("click", hamburgerFunc);

// Fine js per hamburger

// Esercizio 3
const form = document.getElementById("esercizio3");
const input = document.getElementById("input3");
const lista = document.querySelector(".lista");

function submit(event) {
  event.preventDefault();

  const elemento = document.createElement("li");
  elemento.textContent = input.value;
  lista.appendChild(elemento);
  input.value = "";
}

form.addEventListener("submit", submit);

// Fine esercizio 1
