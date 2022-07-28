let start = 59;

const timerShow = document.getElementById("timer");
const timer = setInterval(function() {
    seconds = start % 60;
    minutes = start / 60 % 60;
    hour = start / 60 / 60 % 60;
    if (start <= 0) {
        clearInterval(timer);
        alert('Вы победили в конкурсе!');
    } else { 
        let strTimer = `${('0' + Math.trunc(hour)).slice(-2)}:${('0' + Math.trunc(minutes)).slice(-2)}:${('0' + seconds).slice(-2)}`;
        timerShow.innerHTML = strTimer;
    }
    --start; 
}, 1000);