/*27. Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. 
По нажатию на эту кнопку удалите элемент #child.  removeChild.*/

const parent = document.getElementById("parent");
const child = document.getElementById("child");

const button = document.querySelector("button");

button.addEventListener("click", () => {
    parent.removeChild(child);
});
