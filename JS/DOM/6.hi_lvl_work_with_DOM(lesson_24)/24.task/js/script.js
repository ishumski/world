/*24. Дан элемент #elem. Найдите его соседа снизу его соседа снизу 
(следующий элемент за соседним) и добавьте ему в конец текст '!'.*/

const p = document.querySelector("#elem");

const { nextSibling } = p.nextSibling.nextSibling.nextSibling;
nextSibling.innerHTML = `${nextSibling.innerHTML}!`