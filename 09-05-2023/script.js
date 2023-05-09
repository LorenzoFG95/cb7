// Per fare funzionare il pulsante hamburger

const hamburgerBtn = document.querySelector(".hamburger");
const tendinaDiv = document.querySelector(".tendina");

function hamburgerFunc() {
  console.log("Hai cliccato");
  tendinaDiv.classList.toggle("show");
}

hamburgerBtn.addEventListener("click", hamburgerFunc);

// Fine js per hamburger

// Esercizio 1

const benvenuto = document.querySelector(".benvenuto");
const bottone1 = document.querySelector(".button1");

bottone1.addEventListener("click", () => {
  benvenuto.textContent = "Benvenuto!";
});

// Fine esercizio 1
