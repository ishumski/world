/*5. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину без учета границы, но с padding*/

const p = document.querySelector("#elem");
const button = document.querySelector("button");

p.style.border = "solid";
p.style.width = "200px"
p.style.padding = "55px";
button.addEventListener("click", () => {
    const fullWidth = p.clientWidth;
    console.log(fullWidth);//310px
})