/*1.5. ЗАДАЧА. При нажатии на кнопку текст абзацев меняется
кроме последнего */

const p = document.querySelectorAll("p");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    p.forEach(elem => {
        elem.innerHTML = "CHANGED TEXT";
    })
})