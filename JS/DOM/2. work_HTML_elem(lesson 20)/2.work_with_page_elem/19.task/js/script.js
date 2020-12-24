/*1.14. Задача. при нажатии на кнопку текст в каждом абзаце 
поменяется на порядковый номер абзаца)*/

const p = document.querySelectorAll("p");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    p.forEach((elem, index) => {
        elem.innerHTML = index;
    })
})
