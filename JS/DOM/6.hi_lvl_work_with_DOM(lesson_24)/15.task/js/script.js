/*15. Дан элемент #elem. Вставьте перед ним span 
с текстом '!!!' через insertAdjacentHTML */

const div = document.querySelector("#elem");

div.insertAdjacentHTML("beforebegin", "<span>!!!</span>");