/*3. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding*/

const p = document.querySelector("#elem");
const button = document.querySelector("button");

p.style.border = "3px solid black";

button.addEventListener("click", () => {
    const width = p.offsetWidth;
    console.log(width);
})