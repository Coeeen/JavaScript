var Start = document.querySelector('.Start');
var Reset = document.querySelector('.Reset');
var Stop = document.querySelector('.Stop');

let seconds = 0;
let Min = 0;
let hou = 0
let interval;

Start.addEventListener('click', function () {
  interval = setInterval(Timer, 1000);
  Start.classList.add('hidden')
  Stop.classList.add('move')
});

Reset.addEventListener('click', function () {
  seconds = 0;
  Min = 0;
  document.querySelector('.seconds').textContent = "0" + seconds;
  document.querySelector('.min').textContent = "0" + Min;
});

Stop.addEventListener('click', function () {
  clearInterval(interval);
  Start.classList.remove('hidden')
  Stop.classList.remove('move')
});

let Timer = function () {
  seconds++;
  if (seconds < 60) {
    document.querySelector('.seconds').textContent = seconds;
  }
  if (seconds < 9) {
    document.querySelector('.seconds').textContent = "0" + seconds;
  }

  if (seconds >= 60) {
    seconds = 0;
    document.querySelector('.seconds').textContent = seconds;
    Min++;
    document.querySelector('.min').textContent = Min;
  }
  if (Min < 9) {
    document.querySelector('.min').textContent = "0" + Min;
  }
  if (hou < 9) {
    document.querySelector('.hou').textContent = "0" + hou;
  }
  if (Min >= 60) {
    min = 0;
    document.querySelector('.min').textContent = min;
    hou++;
    document.querySelector('.hou').textContent = hou;
  }

};