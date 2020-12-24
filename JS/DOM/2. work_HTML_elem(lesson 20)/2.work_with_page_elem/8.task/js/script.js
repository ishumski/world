/*1.3. Задача. При нажатии на кнопку абзац станет h3, но текст останется.*/

const p = document.querySelector("p");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    p.outerHTML = "<h3>VERY FUNNY TEXT";
})
