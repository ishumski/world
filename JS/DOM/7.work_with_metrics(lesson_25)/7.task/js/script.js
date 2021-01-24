/*7.  Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding. */

const p = document.querySelector("#elem");
const button = document.querySelector("button");

button.addEventListener("click", () => {

    //getComputedStyle(elem).property - если хотим получить какое-либо св-во элемента, а не все
    const metrics = `${getComputedStyle(p).width} ${getComputedStyle(p).height}`;
    console.log(metrics);
})