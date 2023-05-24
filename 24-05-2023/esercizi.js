// // ESERCIZIO 1

// let persona = ["Mario", "Rossi", "Italia"];
// let [nome, cognome, nazionalità] = persona;

// console.log(`Nome: ${nome}`);
// console.log(`Cognome: ${cognome}`);
// console.log(`Nazionalità: ${nazionalità}`);

// // ESERCIZIO 2

// let libroPreferito = {
//   titolo: "Il Nome della Rosa",
//   autore: "Umberto Eco",
//   anno: 1980,
// };

// let { titolo, autore, anno } = libroPreferito;

// console.log(`Nome del libro: ${titolo}`);
// console.log(`Nome dell'autore: ${autore}`);
// console.log(`Anno di pubblicazione: ${anno}`);

// ESERCIZIO AVANZATO 1

// const notFound = "non specificato";

// let persona = ["Mario", "Rossi"];
// let [nome = notFound, cognome = notFound, nazionalità = notFound] = persona;

// console.log(`Nome: ${nome}`);
// console.log(`Cognome: ${cognome}`);
// console.log(`Nazionalità: ${nazionalità}`);

//////////

// const notFound = "non specificato";
// let libroPreferito = {
//   titolo: "Il Nome della Rosa",
//   anno: 1980,
// };

// let { titolo = notFound, autore = notFound, anno = notFound } = libroPreferito;

// console.log(`Nome del libro: ${titolo}`);
// console.log(`Nome dell'autore: ${autore}`);
// console.log(`Anno di pubblicazione: ${anno}`);
