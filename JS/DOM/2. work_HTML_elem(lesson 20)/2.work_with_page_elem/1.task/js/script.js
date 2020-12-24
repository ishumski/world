/*1. Задача. Повторите поведение кнопки по нажатию на нее 
(она меняет текст в span): */

const submitBtn = document.getElementById("submit-btn");
const textSpan = document.querySelector("span");
submitBtn.addEventListener("click", () => {
    textSpan.innerHTML = "!!!";
})