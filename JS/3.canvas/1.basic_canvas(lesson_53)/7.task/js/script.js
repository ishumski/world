/*7. Используя методы moveTo и lineTo для рисования контура и метод fill для его заливки, 
нарисуйте на канвасе квадрат*/
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 150);
ctx.lineTo(150, 150);
ctx.lineTo(150, 50);
//можно не прописывать 4 сторону, метод ctx.fill() соединяет точки недостающе стороны и закрашивает
ctx.fill();
