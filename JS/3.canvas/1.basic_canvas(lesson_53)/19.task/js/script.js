/*19. Используя метод arc, нарисуйте на канвасе залитую часть круга */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.arc(150, 150, 100, Math.PI / 180, Math.PI / 2);
// ctx.arc(150, 150, 100, 0.1, 3); если ы радианах
ctx.fill();