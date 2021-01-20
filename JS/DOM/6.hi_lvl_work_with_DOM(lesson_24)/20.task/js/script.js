/*20. Дан элемент #elem. Найдите последнего потомка этого элемента 
и сделайте его текст красного цвета.*/

const div = document.querySelector("#elem").lastElementChild;
div.style.color = "red";