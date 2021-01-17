/*7.  Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит. */

const p = document.querySelectorAll("p");

p.forEach(element => {
    element.addEventListener("click", () => {
        element.innerHTML = Math.pow(parseInt(element.innerHTML), 2);
    })
});