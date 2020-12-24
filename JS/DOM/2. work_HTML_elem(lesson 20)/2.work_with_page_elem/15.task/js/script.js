/*1.10 Задача. Абзац с class="my-class class". Класс "my-class" задает красный цвет. 
две кнопки: первая выводит значение класса, вторая меняет значение этого класса*/

const p = document.querySelector("p");
const showClassBtn = document.getElementById("btn-show-class");
const changeClassBtn = document.getElementById("btn-change-class");

p.style.color = "hotpink";

showClassBtn.addEventListener("click", () => {
    alert(p.getAttribute("class"));
})

changeClassBtn.addEventListener("click", () => {
    p.setAttribute("class", "new-class")
    alert("Класс был изменёт! Нажмите для проверки класса");
})