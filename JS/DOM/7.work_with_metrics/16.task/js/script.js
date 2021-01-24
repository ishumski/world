/*16. Дана страница с горизонтальной полосой прокрутки. 
По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали. */

const body = document.body;
const div = document.querySelector("div");
const button = document.querySelector("button");

body.style.overflow = "scroll";
body.style.maxWidth = "100%";

div.style.width = "3000px";

button.addEventListener("click", () => {
    const scrollWidth = window.pageXOffset.toFixed(2);
    console.log(scrollWidth);
})