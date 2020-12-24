/*3. Задача. Дан HTML код (см. под задачей). 
Поменяйте содержимое абзацев на их порядковый номер в коде.

<h2>Заголовок, не поменяется.</h2>
<p>Абзац, поменяется.</p>
<p>Абзац, поменяется.</p>
<p>Абзац, поменяется.</p>*/
const button = document.getElementById("btn");
const p = document.querySelectorAll("p");

button.addEventListener("click", () => {
    p.forEach((elem, index) => {
        elem.innerHTML = index + 1;
    })
})
