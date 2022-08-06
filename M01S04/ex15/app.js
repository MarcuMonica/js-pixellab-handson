var person = {
  name: 'Sindolor',
  surname: 'Gel',
  age: 34,
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

//Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested)
// afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
// Poti folosi metoda pentru a converti numerele negative in pozitive.

for (let i = 0; i < person.friends.length; i++) {
  for (let j = 0; j < person.friends.length; j++) {
    if (i !== j) {
      var message = `Intre ${person.friends[i].name}`;
      var ageDiff = Math.abs(person.friends[i].age - person.friends[j].age);
      message += ` si ${person.friends[j].name} este o diferenta de ${ageDiff} ani.`;
      console.log(message);
    }
  }
}
