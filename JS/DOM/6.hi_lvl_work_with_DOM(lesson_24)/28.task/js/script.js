/*28.  Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его. */

const ol = document.querySelector("ol");
const li = document.querySelectorAll("li");

const button = document.querySelector("button");

button.addEventListener("click", () => {

    const lastChild = ol.removeChild(ol.lastElementChild);
    console.log(lastChild);
});

