/*Дана страница с вертикальной полосой прокрутки. 
По нажатию на кнопку прокрутите на 300px вниз от текущего положения. */

const button = document.querySelector("button");

button.addEventListener("click", () => {
    window.scrollBy(0, 300);
})