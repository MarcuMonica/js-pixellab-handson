const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const stopwatchHours = document.getElementById('stopwatch-hour');
const stopwatchMinutes = document.getElementById('stopwatch-minutes');
const stopwatchSeconds = document.getElementById('stopwatch-seconds');
const stopwatchMiliseconds = document.getElementById('stopwatch-miliseconds');

let timelapse = null;
let seconds = 0;
let minutes = 0;
let hours = 0;
let miliseconds = 0;

startButton.addEventListener('click', function () {
  clearInterval(timelapse);
  timelapse = setInterval(function () {
    miliseconds += 50;
    console.log('mili');
    if (miliseconds >= 1000) {
      seconds++;
      miliseconds = 0;
    }
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes >= 60) {
      hours++;
      minutes = 0;
    }

    stopwatchMiliseconds.innerText = doubleDigits(parseInt(miliseconds / 10));
    stopwatchSeconds.innerText = doubleDigits(seconds);
    stopwatchMinutes.innerText = doubleDigits(minutes);
    stopwatchHours.innerText = doubleDigits(hours);
  }, 50);
});
stopButton.addEventListener('click', function () {
  clearInterval(timelapse);
});
resetButton.addEventListener('click', function () {
  clearInterval(timelapse);
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  stopwatchMiliseconds.innerText = '00';
  stopwatchSeconds.innerText = '00';
  stopwatchMinutes.innerText = '00';
  stopwatchHours.innerText = '00';
});
