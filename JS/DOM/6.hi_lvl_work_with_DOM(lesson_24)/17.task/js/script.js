/*17.  Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'. */
const div = document.querySelector("#elem");

div.insertAdjacentHTML("afterbegin", "!!!");