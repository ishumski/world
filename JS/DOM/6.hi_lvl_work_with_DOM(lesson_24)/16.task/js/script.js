/*16. Дан элемент #elem. Вставьте после него span с текстом '!!!'. */

const div = document.querySelector("#elem");

div.insertAdjacentHTML("afterend", "!!!");