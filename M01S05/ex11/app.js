console.warn(`
Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca primeste un
parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze
suprafata totala a paralelipipedului. Foloseste structura switch.
`);
const calculateSurface = function (width, length, heigth) {
  switch (arguments.length) {
    case 1: {
      return width * width;
    }
    case 2: {
      return width * length;
    }
    case 3: {
      return 2 * width * length + 2 * width * heigth + 2 * length * heigth;
    }
  }
};

console.warn(`
Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.
`);
const calculateCircleArea = (radius) => {
  return Math.PI * Math.pow(radius, 2);
};
console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`
Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia
: “Animalul meu are petAge ani”
`);

const pet = {
  getName: function () {
    return 'Tweety';
  },
  getSpecies: function () {
    return 'flying reptile';
  },
  getAge: function () {
    return 45;
  },
};
const petAge = pet.getAge();

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);
console.log(`Animalul meu are ${petAge} ani.`);
