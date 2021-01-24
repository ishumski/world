/*1. Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы.*/

const div = document.querySelector("#elem");
const button = document.querySelector("button");
div.style.border = "5px solid black";
div.style.display = "inline-block";

button.addEventListener("click", () => {
    const borderTopThickness = div.clientTop;
    console.log(borderTopThickness);
})

