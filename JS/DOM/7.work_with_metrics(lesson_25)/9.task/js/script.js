/*9. Дан элемент #elem с горизонтальной полосой прокрутки. 
По нажатию на кнопку выведите на сколько элемент прокручен слева */

const div = document.querySelector("#elem");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const leftScroll = div.scrollLeft.toFixed(2);
    console.log(leftScroll);
})