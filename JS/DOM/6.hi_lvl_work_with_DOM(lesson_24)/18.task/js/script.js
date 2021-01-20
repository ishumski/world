/*18. Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'. */

const div = document.querySelector("#elem");

div.insertAdjacentHTML("beforeend", "!!!");