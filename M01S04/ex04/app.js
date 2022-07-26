//Modifica exemplul astfel incat bucla sa numere de la 1 la 100

for (var i = 1; i <= 100; i++) {
  console.log(i);
}

//Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).

for (var i = 1; i < 100; i++) {
  console.log(i);
}

//Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).

for (var i = 48; i < 100; i++) {
  console.log(i);

  if (i === 50) {
    break;
  }
}

//Folosind keywordul continue afiseaza doar numerele pare intre 1 si 100 (inclusiv 100).

for (var i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}

//In mod similar, afiseaza doar numerele care sunt divizibile cu 5.

for (var i = 1; i <= 100; i++) {
  if (i % 5 !== 0) {
    continue;
  }

  console.log(i);
}

//Modifica exemplul astfel incat bucla sa numere de la 1 la 89.

for (var i = 1; i <= 89; i++) {
  console.log(i);
}

//Modifica exemplul astfel incat bucla sa numere de la 1 la 88.

for (var i = 1; i <= 88; i++) {
  console.log(i);
}

//Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.

for (var i = 40; i <= 100; i++) {
  console.log(i);

  if (i === 42) {
    break;
  }
}

//Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89.

for (var i = 0; i <= 89; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

// In mod similar, afiseaza doar numerele care sunt divizibile cu 3.

for (var i = 0; i <= 89; i++) {
  if (i % 3 !== 0) {
    continue;
  }
  console.log(i);
}
