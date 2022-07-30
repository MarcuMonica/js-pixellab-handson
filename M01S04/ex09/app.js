// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// var i = 1;
// do {
//   if (i > 50) {
//     i++;
//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

//Modifica exemplul astfel incat bucla sa numere de la 1 la 52
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

//Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 52);

//Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)
// var i = 0;
// do {
//   console.log(i);

//   if (i === 12) {
//     break;
//   }
//   i++;
// } while (i <= 52);

//Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
// var i = 0;
// do {
//   if (i <= 8) {
//     i++;
//     continue;
//   }
//   if (i >= 32) {
//     i++;
//     continue;
//   }
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 52);

//Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara
// apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.
var number = prompt('Alegeti un numar:');
var lowLimit = prompt('Alege o limita inferioara:');
var highLimit = prompt('Alege o limita superioara:');

var i = lowLimit;
do {
  if (i % number === 0) {
    console.log(i);
  }
  i++;
} while (i < highLimit);
