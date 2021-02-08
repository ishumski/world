/*1. Нарисуйте на канвасе  фигуру (горизонтальная линия) */

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 50);
ctx.stroke();