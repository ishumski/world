/*4. Задача. Дан HTML код (см. под задачей). 
Поменяйте содержимое элементов с классом zzz на их порядковый номер в коде.

<h2 class="zzz">Заголовок с классом zzz.</h2>
<p class="zzz">Абзац с классом zzz.</p>
<p class="zzz">Абзац с классом zzz.</p>
<p>Просто абзац, не поменяется.</p>*/

const button = document.getElementById("btn");
const sameClass = document.getElementsByClassName("zzz");
console.log(sameClass);

// так как при вызове document.getElementsByClassName нам возвращает массив
// то пройтись по нему forEach мы не сможем, поэтому используем цикл for
// getElementsByClassName - возвращает HTML коллекцию (DOM элементы);
// querySelector - возвращает Node List(список элементов, а не сами элементы)
button.addEventListener("click", () => {
    for (let elem = 0; elem < sameClass.length; elem++) {
        sameClass[elem].innerHTML = elem + 1;
    };
})


