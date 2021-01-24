/*8. Дан элемент #elem с вертикальной полосой прокрутки. 
По нажатию на кнопку выведите на сколько элемент прокручен сверху.*/

const p = document.querySelector("#elem");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const topScroll = p.scrollTop.toFixed(2);
    console.log(topScroll);
})