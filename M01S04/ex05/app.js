// for (var i = 0; i <= 100; i++) {
//   console.log(i);
//   if (i % 7 !== 0) {
//     continue;
//   }
//   console.log('Acest numar este mutiplu de 7.');
// }

var number = prompt('Introdu un numar: ');
var highestNumber = prompt(
  'Introdu limita superioara pana la care sa mearga bucla: ',
);

for (var i = 5; i <= highestNumber; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(` Acest numar este multiplu de ${number}.`);
}
