/*2. Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его левой границы.*/

const p = document.querySelector("#elem");
const button = document.querySelector("button");

p.style.border = "3px solid black";

button.addEventListener("click", () => {
    const borderLeftThickness = p.clientLeft;
    console.log(borderLeftThickness);
})