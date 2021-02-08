/*14. Используя метод arc, нарисуйте на канвасе границу круга */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.arc(150, 150, 100, 0, 8);
ctx.stroke();