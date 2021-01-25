/*22. Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза. */

const p = document.getElementById("elem");

p.addEventListener("click", () => {

    p.style.width = p.clientWidth * 2 + "px";
    p.style.height = p.clientHeight * 2 + "px";
})