// var i = 1;

// while (i < 100) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla atunci cand numarul este
// egal cu 50 (dar afiseaza-l).
// var i = 1;
// while (i < 100) {
//   if (i > 50) {
//     i++;
//     break;
//   }

//   console.log(i);

//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 67.
// var i = 0;
// while (i <= 67) {
//   console.log(i);
//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
// var i = 0;

// while (i < 67) {
//   console.log(i);
//   i++;
// }

//Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
// var i = 1;
// while (i < 100) {
//   if (i > 12) {
//     i++;
//     break;
//   }
//   console.log(i);
//   i++;
// }

//Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
// var i = 1;
// while (i <= 32) {
//   if (i % 2 === 0) {
//     console.log(i);
//     i++;
//     continue;
//   }
//   i++;
// }

//Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi
// afiseaza toti multiplii de numar intre 5 si limita superioara introduse.

var divider = prompt('Alegeti un numar'); // 3
var limit = prompt('Introdu limita superioara'); // 10

var i = 5;
while (i <= limit) {
  if (i % divider === 0) {
    console.log(i);
  }
  i++;
}
