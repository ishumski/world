/*12. Используя метод rect, нарисуйте на канвасе границы квадрата: */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


ctx.rect(0, 0, 150, 150);
ctx.stroke();