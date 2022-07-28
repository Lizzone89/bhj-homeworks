const element = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

function cookieClicker() {
    clickerCounter.textContent = parseInt(clickerCounter.textContent) + 1;
    if (clickerCounter.textContent % 2 !==0) {
        this.width = 150;
    } else {
        this.width = 200;
    }
}

element.onclick = cookieClicker;