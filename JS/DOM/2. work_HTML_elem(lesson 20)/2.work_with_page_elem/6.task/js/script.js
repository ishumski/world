/*1.1.  Повторите страницу по данному по образцу. При нажатии на кнопку текст меняется*/

const p = document.querySelector("p");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    p.innerHTML = "ADD NEW TEXT";
})