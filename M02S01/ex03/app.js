var Car = {
  make: '',
  color: '',
  wheels: 4,
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: -50,
  areLightsOn: false,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    if (this.speed + 1 <= this.topSpeed) {
      this.speed = this.speed + 1;
    }

    this.displaySpeed();
  },

  decelerate: function () {
    if (this.speed - 1 >= this.topReverseSpeed) {
      this.speed = this.speed - 1;
    }

    this.displaySpeed();
  },

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      this.displaySpeed();
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      this.displaySpeed();
      return;
    }

    this.speed = speed;
    this.displaySpeed();
  },

  turnLightsOn() {
    this.areLightsOn = true;
    console.log(`Lights are now on`);
  },

  turnLightsOff() {
    this.areLightsOn = false;
    console.log(`Lights are now off`);
  },

  flashLights() {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 300);
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.speed = 0;

audi.setSpeed(140);
audi.accelerate();
audi.accelerate();

audi.flashLights();
setInterval(function () {
  audi.flashLights();
}, 2000);
