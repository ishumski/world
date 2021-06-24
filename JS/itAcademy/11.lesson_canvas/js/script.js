// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.fillRect(0, 0, 100, 100);

// ctx.strokeRect(100, 0, 100, 100);

// ctx.clearRect(25, 25, 50, 50);

// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(100, 100);
// ctx.stroke();

// //треугольник
// ctx.moveTo(100, 150);
// ctx.lineTo(0, 250);
// ctx.lineTo(200, 250);
// ctx.fill();


//равнобедренная трапеция
// ctx.beginPath();
// ctx.moveTo(250, 250);
// ctx.lineTo(150, 400);
// ctx.lineTo(450, 400);
// ctx.lineTo(350, 250);
// ctx.fill();

// //квадрат
// ctx.beginPath();
// ctx.moveTo(200, 0);
// ctx.lineTo(200, 150);
// ctx.lineTo(400, 150);
// ctx.lineTo(400, 0);
// ctx.fill()


//кривая безье
// ctx.beginPath();
// ctx.moveTo(10, 90);
// ctx.quadraticCurveTo(60, 10, 90, 90);
// ctx.lineTo(60,10);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(10, 90);
// ctx.bezierCurveTo(10, 10, 90, 10, 50, 90);
// ctx.lineTo(90, 10);
// ctx.lineTo(10, 10);
// ctx.closePath();
// ctx.stroke();
// ctx.arc(100, 100, 75, 0, 8);

//сердце
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.bezierCurveTo(200, 50, 200, 150, 100, 200);
// ctx.moveTo(100, 100);
// ctx.bezierCurveTo(0, 50, 0, 150, 100, 200);
// ctx.stroke();

//круговая диаграмма
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");

// const data = [
//     { name: "food", value: 1000, color: "lightblue" },
//     { name: "Clothes", value: 600, color: "lightgreen" },
//     { name: "Rent", value: 2000, color: "pink" },
//     { name: "Medicine", value: 3000, color: "silver" }
// ]
// const total = data.reduce((result, current) => result + current.value, 0);

// let currentAngle = -0.5 * Math.PI;

// data.forEach((item) => {
//     const angle = (item.value / total) * 2 * Math.PI;
//     ctx.beginPath();
//     ctx.arc(100, 100, 100, currentAngle, currentAngle + angle);
//     ctx.lineTo(100, 100);
//     ctx.fillStyle = item.color;
//     ctx.fill();
//     currentAngle += angle;
// })



//текст
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// ctx.font = "14px Times New Roman";
// ctx.fillStyle = "blue";
// ctx.fillText("Hello World!", 10,50);

// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// const img = new Image();
// img.src = "https://picsum.photos/seed/picsum/200/300";
// img.addEventListener("load", () => {
//     ctx.drawImage(img, 10, 10, 200, 300, 0, 0, 200, 300);
// })

//бегущая девочка
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// const img = new Image();
// img.src = "1_WhDjw8GiV5o0flBXM4LXEw.png";
// const spriteWidth = 256;
// const spriteHeight = 256;

// img.addEventListener("load", () => {
//     let cycle = 0;
//     setInterval(() => {
//         ctx.clearRect(0, 0, spriteWidth, spriteHeight);
//         ctx.drawImage(img, cycle * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)

//         //возврат к нулевому значению;
//         cycle = (cycle + 1) % 6;
//     }, 120)
// })


// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");

// ctx.scale(3, 3);
// ctx.fillRect(100, 100, 100, 100);
// ctx.save();
// ctx.scale(1 / 3, 1 / 3);
// ctx.fillRect(50, 50, 50, 50);
// ctx.restore();
// ctx.fillRect(50, 50, 50, 50);

// ромб
//1способ
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(0, 100);
// ctx.lineTo(50, 150);
// ctx.lineTo(100,100);
// ctx.fill();

//2 способ
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// ctx.rotate(Math.PI/4);
// ctx.fillRect(150, 50, 100, 100);



// //зигзаг
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");

// ctx.moveTo(50, 50);//задаем координаты

// const startX = 50;
// const startY = 50;

// const lineLength = 50;//линия длины
// const deltaY = 10;

// ctx.moveTo(startX, startY);


// //определяем куда ставим наши линии
// for (let i = 0; i < 10; i++) {
//     // ctx.beginPath();
//     const x = i % 2 === 0 ? lineLength + startX : startX;
//     const y = startY + (deltaY * (i + 1));
//     ctx.lineTo(x, y);
// }
// ctx.stroke()


/*******/
//спираль
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");

// const startX = canvas.width / 2;
// const startY = canvas.height / 2;

// function drawSpiral() {

//     ctx.moveTo(startX, startY);

//     let radius = 0;
//     let angle = 0;

//     const deltaRadius = 0.75;

//     for (let i = 0; i < 150; i++) {

//         radius += deltaRadius;
//         angle += (Math.PI * 2) / 50;

//         const x = radius * Math.cos(angle) + startX;
//         const y = radius * Math.sin(angle) + startY;

//         ctx.lineTo(x, y);
//     }
//     ctx.stroke();
// }

// let angle = 0;
// ctx.translate(0, 0);

// setInterval(() => {
//     ctx.clearRect(0, 0, -canvas.width, -canvas.height);
//     // angle += Math.PI/360;
//     /*красивая прикодюха
//     angle = -(Math.PI/360);
//      ctx.rotate(angle); */
//     angle = -(Math.PI / 360);
//     ctx.rotate(angle);

//     drawSpiral();
// }, 500);