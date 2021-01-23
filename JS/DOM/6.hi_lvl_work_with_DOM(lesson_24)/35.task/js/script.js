/*35. Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки. */

const div = document.querySelector(".parent");
const button = document.querySelector("button");

div.style.backgroundColor = "red";
div.style.height = "50px";

button.addEventListener("click", () => {
    const closestParent = button.closest(".parent");
    closestParent.remove();
})

console.log(button.closest(".parent"));