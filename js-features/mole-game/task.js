const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function clickHoles() {
    if (this.className.includes("hole_has-mole")) {
        dead.textContent = parseInt(dead.textContent) + 1;
    } else {
        lost.textContent = parseInt(lost.textContent) + 1;
    }

    if (parseInt(dead.textContent) === 10) {
        alert("Вы победили!");
        clear();
    }

    if (parseInt(lost.textContent) === 5) {
        alert("Вы проиграли");
        clear();
    }

}

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = clickHoles;
}

function clear() {
    dead.textContent = 0;
    lost.textContent = 0;
}