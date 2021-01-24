/*4. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding. */

const p = document.querySelector("#elem");
const button = document.querySelector("button");

p.style.border = "5px solid black";
p.style.padding = "55px 0px";

button.addEventListener("click", () => {
    const height = p.clientHeight;
    console.log(height);
})