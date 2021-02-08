/*11. Используя методы fillRect и clearRect, нарисуйте квадрат в квадрате */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.fillRect(0, 0, 150, 150)
ctx.clearRect(25, 25, 75, 75);

