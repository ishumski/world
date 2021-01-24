/*6. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту без учета границы, но с padding*/

const p = document.querySelector("#elem");
const button = document.querySelector("button");

p.style.border = "solid";
p.style.height = "200px"
p.style.padding = "55px";
button.addEventListener("click", () => {
    const fullHeight = p.clientHeight;
    console.log(fullHeight);
})