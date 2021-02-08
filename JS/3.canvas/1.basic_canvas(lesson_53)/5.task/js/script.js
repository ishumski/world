/*5. Нарисовать треугольник*/
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(50, 150);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.stroke();