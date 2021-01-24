/*13. Дан элемент #elem с горизонтальной полосой прокрутки. 
По нажатию на кнопку выведите реальную ширину элемента с учетом прокрутки. */

const div = document.querySelector("#elem");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const realWidth = div.scrollWidth;
    console.log(realWidth);
})