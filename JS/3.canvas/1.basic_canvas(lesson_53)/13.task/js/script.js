/*13. Используя метод rect, нарисуйте на канвасе закрашенный квадрат: */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.rect(0, 0, 150, 150);
ctx.fill();