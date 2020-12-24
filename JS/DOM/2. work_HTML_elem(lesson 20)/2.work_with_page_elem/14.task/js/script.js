/*1.9. Задача. Дан абзац с class="purple-text". Класс задает филетовый цвет. 
Дано две кнопики, первая выводит класс абзаца, вторая удаляет класс у параграфа*/

const p = document.querySelector(".purple-text");
const buttons = document.querySelectorAll("button");
const showClassBtn = document.getElementById("btn-show-class");
const deleteBtn = document.getElementById("btn-delete-class");

p.style.color = "hotpink";

/*как ты учила, но работает не правильно*/
buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (showClassBtn.clicked) {
            alert(p.getAttribute("class"));

        }

        if (deleteBtn.clicked == true) {
            p.removeAttribute("class");
            alert("Класс удален! Нажмите на первую кнопку чтобы проверить это!");
        }
    })
})


/*код, который работает как надо*/
showClassBtn.addEventListener("click", () => {
    alert(p.getAttribute("class"));
})

deleteBtn.addEventListener("click", () => {
    p.removeAttribute("class");
    alert("Класс удален! Нажмите на первую кнопку чтобы проверить это!")
})
