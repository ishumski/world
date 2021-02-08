/*3. Нарисуйте на канвасе фигуру крестик */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 150);
ctx.moveTo(150, 50);
ctx.lineTo(50, 150)
ctx.stroke();

