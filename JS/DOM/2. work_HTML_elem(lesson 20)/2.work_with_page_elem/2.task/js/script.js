/*2.Задача 
Задача. Повторите поведение кнопки по нажатию на нее 
(она меняет span на тег b, не изменяя при этом текст внутри тега):*/

const button = document.getElementById("submit-btn");
const textSpan = document.querySelector("span");
button.addEventListener("click", () => {
    textSpan.outerHTML = "<b>Text without changing";
})