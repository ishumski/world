/*1.2. ЗАДАЧА. При нажатии на кнопку текст в абзаце поменяется,
жирный в h3*/

const p = document.querySelector("p");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    p.outerHTML = "<h3><b>NEW BOLD TEXT";
})