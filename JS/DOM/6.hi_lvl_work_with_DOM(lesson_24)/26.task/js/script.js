/*26. Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.*/

const p = document.getElementById("elem");

const { parentNode } = p.parentNode;
parentNode.style.backgroundColor = "red";