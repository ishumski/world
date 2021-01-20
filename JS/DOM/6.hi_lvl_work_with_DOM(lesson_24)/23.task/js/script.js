/*23.  Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'. */

const p = document.querySelector("#elem");
const {nextSibling} = p.nextSibling;
nextSibling.innerHTML = `${nextSibling.innerHTML}!`