// Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i
// valoarea false.
// Adauga metode numite openTrunk() si closeTrunk() care sa seteze
// proprietatea isTrunkOpen pe true, respectiv false.
// Adauga o proprietate booleana numita areLightsOn si
// asigneaza-i valoarea false.
// Adauga metode numite turnLightsOn() si turnLightsOff() care sa
// manipuleze valoarea.
// Adauga o metoda numita flashLights() care sa apeleze cele doua
// metode in succesiune, folosind metoda window.setTimeout().

const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  //flags:
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,

  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  decelerateBy5: function () {
    this.speed -= 5;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();
    //handling "this" keyword lost reference
    //oldschool
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 5000);
  },
  stop: function () {
    this.speed = 0;
  },
  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  },
};
window.car = car;
car.decelerateBy5();
console.log(`Viteza noua este de ${car.speed} km/h.`);

car.stop();
console.log(car.speed);

// Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

// Decelereaza masina cu 5 unitati apoi afiseaza propozitia: "Viteza noua este speed km/h".
// Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.
// Adauga o proprietate numita topReverseSpeed si asigneaza-i valoarea -50.
// Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.
// Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza. Metoda
// trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc
// proprietatile topSpeed si topReverseSpeed
