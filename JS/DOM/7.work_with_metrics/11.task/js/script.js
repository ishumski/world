/*11. Дан элемент #elem с вертикальной полосой прокрутки. 
По нажатию на кнопку прокрутите его на 100px вниз от текущего положения. */

const div = document.querySelector("#elem");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    div.scrollLeft = 100;
})