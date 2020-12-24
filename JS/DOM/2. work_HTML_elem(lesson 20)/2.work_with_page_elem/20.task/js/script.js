/*1.15. Задача. При нажатии на кнопку текст в каждом абзаце поменяется - 
спереди добавится порядковый номер абзаца */

const p = document.querySelectorAll("p");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    p.forEach((elem, index) => {
        elem.innerHTML = `${index}. ${elem.innerHTML}`;
    })
})