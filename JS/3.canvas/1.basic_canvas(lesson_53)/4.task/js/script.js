/*4. Нарисовать квадрат с помощью линий */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.closePath()

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(50,150);
ctx.lineTo(150,150);
ctx.lineTo(150,50);
ctx.closePath()
ctx.stroke();