/*2. Нарисуйте на канвасе  фигуру (вертикальная линия) */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 250);
ctx.stroke();