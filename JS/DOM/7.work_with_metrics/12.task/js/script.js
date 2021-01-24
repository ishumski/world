/*12. Дан элемент #elem с вертикальной полосой прокрутки. 
По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки. */

const p = document.querySelector("#elem");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const realHeight = p.scrollHeight;
    console.log(realHeight);
})