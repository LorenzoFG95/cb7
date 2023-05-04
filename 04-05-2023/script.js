// // ESERCIZIO 1
// let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// let arrayReversed = [];
// let iMax = array1.length;
// for (let i = 0; i < iMax; i++) {
//   arrayReversed.push(array1.pop());
// }

// console.log(`L'array al contrario è ${arrayReversed}`);

// -
// -
// -
// -
// -
// -
// -

// // soluzione alternativa che non rimuove gli elementi dall'array originale

// for (let i = 0; i < array1.length; i++) {
//   arrayReversed.unshift(array1[i]);
// }

// console.log(`L'array normale è ${array1}`);
// console.log(`L'array al contrario è ${arrayReversed}`);
// -
// -
// -
// -
// -
// -
// -
// -
// // ESERCIZIO 2
let array = [257, 15, 790, 5000, 23, 690, 3, 999];
let arrayMax = array[0];
let arrayMin = array[0];
for (let i = 0; i < array.length; i++) {
  if (arrayMax < array[i + 1]) arrayMax = array[i + 1];
}
for (let i = 0; i < array.length; i++) {
  if (arrayMin > array[i + 1]) arrayMin = array[i + 1];
}
console.log(`Il valore massimo è ${arrayMax}`);
console.log(`Il valore minimo è ${arrayMin}`);
