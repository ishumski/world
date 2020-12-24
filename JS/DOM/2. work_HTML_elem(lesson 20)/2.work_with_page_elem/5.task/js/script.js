/*5. Задача. Дан HTML код (см. под задачей). 
Поменяйте содержимое абзацев с классом zzz на их порядковый номер в коде.

<h2 class="zzz">Заголовок с классом zzz, не поменяется.</h2>
<p class="zzz">Абзац с классом zzz.</p>
<p class="zzz">Абзац с классом zzz.</p>
<p>Просто абзац, не поменяется.</p>*/

const zzzClassElements = document.querySelectorAll(".zzz");
const button = document.getElementById("btn");

button.addEventListener("click", () => {

    zzzClassElements.forEach((elem, index) => {

        elem.innerHTML = index;
    })
})