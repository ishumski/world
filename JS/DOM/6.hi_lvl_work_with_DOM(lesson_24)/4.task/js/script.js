/*4. Дан элемент #elem. Добавьте ему класс www, 
если его нет и удалите - если есть. */

const div = document.getElementById("elem");

div.classList.toggle("www");
div.classList.toggle("www");
console.log(div);