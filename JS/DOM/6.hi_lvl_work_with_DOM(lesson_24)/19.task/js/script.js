/*19. Дан элемент #elem. Найдите первого потомка этого элемента и 
сделайте его текст красного цвета. */

const div = document.getElementById("elem").firstElementChild;

div.style.color = "red";

