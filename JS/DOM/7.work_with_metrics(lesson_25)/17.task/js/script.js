/*17. Дана страница с горизонтальной и вертикальной полосами прокрутки. 
По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху */

const body = document.body;
const div = document.querySelector("div");
const button = document.querySelector("button");

body.style.maxWidth = "100%";
body.style.overflow = "scroll";
div.style.width = "3000px";

button.addEventListener("click", () => {
    const point = window.scrollTo(300, 500);
})