const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

function myStop() {
  clearInterval(myInterval);
}
function myRun() {
    setInterval(myTimer, 50);
}
















let timer;
let running = false;

function start() {
    if (!running) {
        timer = setInterval(updateClock, 1000);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
}

function reset() {
    clearInterval(timer);
    document.getElementById('display').innerHTML = '00:00:00';
    running = false;
}

function updateClock() {
    let display = document.getElementById('display');
    let timeArray = display.innerHTML.split(':');
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);
    let seconds = parseInt(timeArray[2]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
            if (hours === 24) {
                hours = 0;
            }
        }
    }

    display.innerHTML = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}