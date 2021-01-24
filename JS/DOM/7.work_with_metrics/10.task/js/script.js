/*10. Дан элемент #elem с вертикальной полосой прокрутки. 
По нажатию на кнопку прокрутите его до позиции 100px сверху */

const p = document.querySelector("#elem");
const button = document.querySelector("button");

button.addEventListener("click", () => {

    p.scrollTop = 100;
})