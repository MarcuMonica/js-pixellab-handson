var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`
Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);
person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`
Folosind o bucla for afiseaza suma anilor animalelor.
`);
var ageSum = 0;
for (var i = 0; i < person.pets.length; i++) {
  let pet = person.pets[i];

  ageSum = ageSum + pet.age;
}
console.log(ageSum);

console.warn(`
Folosind forEach() afiseaza cate una pe linie
propozitiile: “Twix este papagal si are 4 ani. Mars
este caine si are… etc”.
`);
person.pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`
Folosind o bucla for afiseaza cate una pe linie
propozitiile: “Intre Dragos si Twix este o diferenta
de xx ani. Intre Dragos si Mars… ” (repeta pentru
  toate intrarile din array).
`);
for (var i = 0; i < person.pets.length; i++) {
  var age = new Date().getFullYear() - person.birthYear;
  var pet = person.pets[i];
  var ageDiff = age - pet.age;
  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(`
Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii:
“Animalul meu se numeste xxxx.”.
`);
for (var i = person.pets.length - 1; i >= 0; i--) {
  var pet = person.pets[i];

  console.log(`Animalul meu se numeste ${pet.name}`);
}

console.warn(`
Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia:
“xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”
`);
var oldestPetName = '';
var oldestPetAge = 0;
var personAge = new Date().getFullYear() - person.birthYear;

for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  var petAge = pet.age;
  var petName = pet.name;

  if (petAge > oldestPetAge) {
    oldestPetAge = petAge;
    oldestPetName = petName;
  }
}

var ageDiff = personAge - oldestPetAge;

console.log(
  `${oldestPetName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(`
Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
`);
var message = 'Am ';
person.pets.forEach(function (pet, index, pets) {
  var punctuation = ', ';
  if (index === pets.length - 1) {
    punctuation = '.';
  }

  if (index === pets.length - 2) {
    punctuation = ' si ';
  }

  message = message + pet.species + punctuation;
});
console.log(message);
