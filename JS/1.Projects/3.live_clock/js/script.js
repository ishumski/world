const clock = document.querySelector(".clock");
const color = document.querySelector(".color");
const body = document.body;


function coloredClock() {

    let time = new Date;
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if (h.length%12 < 2) {
        h = `${0 + h}`;
    }
    if (m.length < 2) {
        m = `${0 + m}`;
    }
    if (s.length < 2) {
        s = `${0 + s}`;
    }

    let clockString = `${h} : ${m} : ${s}`;
    let colorString = `#${h + m + s}`;

    clock.textContent = clockString;
    color.textContent = colorString;

    body.style.background = colorString;

}

coloredClock();

setInterval(coloredClock, 1000);