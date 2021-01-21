/*29. Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся. */

const p = document.querySelector("p");

p.addEventListener("click", () => {
    p.remove();
});