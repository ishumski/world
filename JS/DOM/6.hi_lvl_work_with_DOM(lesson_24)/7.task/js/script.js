/*7. Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. 
Решите задачу с помощью свойства cssText.*/

const div = document.getElementById("elem");
div.style.cssText = `
color: red;
font-size: 30px;
border: 2px solid purple;
`