/*1.8. Задача. При нажатии на кнопку выводит alert с классом абзаца */

const p = document.querySelector(".my-class");
const button = document.getElementById("btn");
const getClassAttribute = p.getAttribute("class")

button.addEventListener("click", () => {
    alert(getClassAttribute);
})