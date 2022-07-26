// 1. var value = window.prompt('Introdu o valoare');
// var message = '';
// var messageParagraph = document.getElementById('message');

// console.log('Valoarea este: ' + value);

// if (value % 2 === 0) {
//   message = 'Numarul este par';
// } else {
//   message = 'Numarul este impar';
// }

// console.log(message);
// messageParagraph.innerText = message;

var value = window.prompt('Introdu o valoare');
var message = '';
var number = window.prompt('Cu ce numar compar?');

value = Number(value);
number = Number(number);

if (isNaN(value) === true) {
  message = 'Nu ai introdus un numar.';
} else if (value === number) {
  message = `Numarul ${value} este egal cu ${number}`;
} else if (value > number) {
  message = `Numarul ${value} estemai mare decat ${number}`;
} else {
  message = `Numarul ${value} este egal cu ${number}`;
}

var messageParagraph = document.getElementById('message');
messageParagraph.innerText = message;