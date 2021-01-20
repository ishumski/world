/*22.  Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'. */

const p = document.querySelector("#elem");
const { previousSibling } = p.previousSibling;
previousSibling.innerHTML = `${previousSibling.innerHTML} !`