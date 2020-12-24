/*1.13. Задача. При нажатии на кнопку текст абзаца меняется и становится красным. 
Кнопка становится неактивной*/

const p = document.querySelector("p");
const input = document.querySelector("input");

input.addEventListener("click", () => {
    p.style.color = "red";
    input.value = "Oh, no! U can't use me";
    input.disabled = true;
})