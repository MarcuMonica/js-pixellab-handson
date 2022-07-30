var person = {
  name: 'Flamingo',
  surname: 'Red',
  age: 66,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.
`);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(`
In mod similar, afiseaza skillruile care contin litera a.
`);
person.skills.forEach(function (skill) {
  if (skill.toLowerCase().includes('a')) {
    console.log(skill);
  }
});

console.warn(`
Folosind forEach afiseaza propozitia: "Prietenii mei se numesc
xxx yyy, xxx yyy si xxx yyy."
`);
var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  console.log('friends', friends);
  var punctuation = ', ';
  var friendsCount = friends.length;
  var fullName = friend.name + ' ' + friend.surname;
  console.log('fullName', fullName);

  if (index === friendsCount - 1) {
    punctuation = '.';
  }

  // if (index === friendsCount - 2) {
  //   punctuation = ' si ';
  // }

  message += fullName + punctuation;
});
// Prietenii mei se numesc Carol Carolson, Steven Stevenson, Larry Larryson.
console.log(message);

console.warn(`
Folosind forEach, afiseaza numarul total de ani pe care il au
persoanele din arrayul friends, doar daca au varsta mai mare
decat 30 inclusiv.
`);
var totalAge = 0;
person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    totalAge += friend.age;
  }
});
console.log(totalAge.toString());

console.warn(`
Folosind forEach, afiseaza suma anilor de nastere a
persoanelor care au varsta impara.
`);
var totalYears = 0;
person.friends.forEach(function (friend) {
  var birthYear = new Date().getFullYear() - friend.age;

  if (friend.age % 2 !== 0) {
    totalYears += birthYear;
  }
});
console.log(totalYears.toString());

console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii
din arrayul friends daca aceasta este mai mare sau egala cu 2
ani.
`);
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(`
Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "

`);
var message = '';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);

  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
});
console.log(message.trim());

console.warn(`
Folosind metoda reverse si apoi forEach, afiseaza in ordine
inversa elementele arrayului skills.
`);
person.skills.reverse().forEach(function (skill) {
  console.log(skill);
});

console.warn(`
Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.
`);
person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(`
In mod similar, afiseaza skillurile care nu incep cu j.
`);
person.skills.forEach(function (skill) {
  if (skill[0] !== 'j') {
    console.log(skill);
  }
});

console.warn(`
Folosind forEach afiseaza propozitia: "Numele mari ale
prietenilor mei sunt xxx, xxx, xxx."
`);
var message = 'Numele mari ale prietenilor mei sunt ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';
  var friendsCount = friends.length;

  if (index === friendsCount - 1) {
    punctuation = '.';
  }

  message += friend.surname + punctuation;
});
console.log(message);

console.warn(`
Folosind forEach, afiseaza numarul total de ani pe
care il au persoanele din arrayul friends
`);
var sumAge = 0;
person.friends.forEach(function (friend) {
  sumAge += friend.age;
});
console.log(sumAge.toString());

console.warn(`
Folosind forEach, afiseaza suma anilor de nastere a
persoanelor
`);
var sumYears = 0;
person.friends.forEach(function (friend) {
  var birthYear = new Date().getFullYear() - friend.age;
  sumYears += birthYear;
});
console.log(sumYears.toString());

console.warn(`
Afiseaza diferenta de varsta dintre persoana si
prietenii din arrayul friends.
`);
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  console.log(ageDiff.toString());
});

console.warn(`
Folosind metoda reverse si apoi forEach, afiseaza in
ordine inversa numele complet al prietenilor din
arrayul friends.
`);
[...person.friends].reverse().forEach(function (friend) {
  var friendName = friend.name + ' ' + friend.surname;
  console.log(friendName);
});
