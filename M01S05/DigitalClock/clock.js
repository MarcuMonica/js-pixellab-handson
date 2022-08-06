const hourContainer = document.getElementById('hour');
const minutesContainer = document.getElementById('minutes');
const secondsContainer = document.getElementById('seconds');
const switchToClock = document.getElementById('switch-to-clock');
const switchToStopwatch = document.getElementById('switch-to-stopwatch');
const clockElement = document.getElementById('clock');
const stopwatchElement = document.getElementById('stopwatch');
const dateElement = document.getElementById('dateParagraph');

let activeClock = 'stopwatch';
const getMonth = (month) => {
  switch (month) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
  }
};

const getDay = (day) => {
  switch (day) {
    case 0:
      return 'Sunday!';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
  }
};

const doubleDigits = (digits) => {
  if (digits < 10) {
    return `0${digits}`;
  } else {
    return `${digits}`;
  }
};

const ticker = () => {
  const time = new Date();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  dateElement.innerText = `${getDay(day)} ${date} ${getMonth(
    month + 1,
  )} ${year}`;
  hourContainer.innerText = doubleDigits(hours);
  minutesContainer.innerText = doubleDigits(minutes);
  secondsContainer.innerText = doubleDigits(seconds);
};

const toggleClock = function () {
  if (activeClock === 'clock') {
    stopwatchElement.classList.add('d-none');
    clockElement.classList.remove('d-none');
    switchToClock.classList.add('d-none');
    switchToStopwatch.classList.remove('d-none');

    activeClock = 'stopwatch';
  } else if (activeClock === 'stopwatch') {
    stopwatchElement.classList.remove('d-none');
    clockElement.classList.add('d-none');
    switchToClock.classList.remove('d-none');
    switchToStopwatch.classList.add('d-none');

    activeClock = 'clock';
  }
};

// se executa la page load
toggleClock();
ticker();
// se executa la fiecare secunda
setInterval(ticker, 1000);

// face switch intre ceasuri
switchToClock.addEventListener('click', toggleClock);
switchToStopwatch.addEventListener('click', toggleClock);
