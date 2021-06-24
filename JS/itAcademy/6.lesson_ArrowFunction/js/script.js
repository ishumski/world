// const matrixA = [
//     [1, 2],
//     [3, 4]
// ];

// const matrixB = [
//     [5, 6],
//     [7, 8]
// ];

// //считаем скалярное произведение массивов
// function dotProduct(arr1, arr2) {
//     return arr1[0] * arr2[0] + arr1[1] * arr[1];
// }

// //меняем строки и столбцы матрицы
// function rotate(arr) {
//     return arr[0].map(function (_, i) {
//         return arr.map(function (row) {
//             return row[i];
//         });
//     });
// }

// //идём по каждой строке первой матрицы
// function matrixMultiply(m1, m2) {
//     //идём по каждой строке первой матрицы
//     return m1.map(function (row) {
//         // преоьразовываем 2-ю матрицу и идё по каждой строке, которые в изначальной матрице были столбцамию Ище скалярное произведение
//         return rotate(m2).map(function (col) {
//             //ищем скалярное произведение
//             return dotProduct(row, col);
//         });
//     });
// }


/*2 */
// const numbers = [0, 1, 4, 7, 3, 2];

// function sum(arr) {
//     return arr.reduce(function (result, curr) {
//         return result + curr;
//     }, 0);
// }

// function divide(arr, maxSum) {
//     return arr.reduce(function (result, curr) {

//         const lastResult = result[result.length - 1];
//         const sumOfLastResult = sum(lastResult);

//         if (sumOfLastResult + curr > maxSum) {
//             //spread оператор
//             return [...result, [curr]];
//         }
//         return [...result.slice(0, result.length - 1), //берем весь result до последнего жлемента
//         [...result[result.length - 1], curr],];// берем последний элемент
//     }, 
//     [[]]);
// }
// console.log(divide((numbers, 5))); // [[0,1,4], [7], [3,2]];


// class Calculator {
//     add(a, b) { return a + b }
//     sub(a, b) { return a - b }
//     multiply(a, b) { return a * b }
//     divide(a, b) { return a / b }
// }

// const calculator = new Calculator();
// console.log(calculator.add(1, 2));


// class Circle extends Shape {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     getPerimetr(){
//         return this.radius * 2 *Math.PI;
//     }

//     getSquare(){
//         return this.radius ** 2 * Math.PI;
//     }
// }

// const circle = new Circle(2);
// console.log(circle.getPerimetr());

// //абстрактный класс
// class Shape {
//     getPerimetr(){}

// }

// class Smoothie {
//     constructor(ingredients) {
//         this.ingredients = ingredients;
//         this.ingredientsMap = {
//             "Banana": 0.5,
//             "Strawberry": 1.5,
//             "Blueberry": 1
//         }
//     }
//     getCost() {
//         const cost = this.ingredients.reduce((result, curr) => {
//             const ingredientCost = this.ingredientsMap[curr];
//             if (ingredientCost !== undefined) {
//                 return result + ingredientCost;
//             }
//             return result;
//         }, 0)
//         return `${cost.toFixed(2)}`
//     }
//     getName() {
//         if (!this.ingredients.length) {
//             return "Empty";
//         }
//         const sortedIngredients = [...this.ingredients].sort((a, b) => a.localeCompare(b));
//         const stringIngrediens = sortedIngredients.join(" ");
//         if (this.ingredients.length > 1) {
//             return `${stringIngrediens} Fusion`;
//         }
//         return `${stringIngrediens} Smoothie`;
//     }
// }
// const smothie = new Smoothie(["Banana", "Apple"]);
// console.log(smothie.getCost());
// console.log(smothie.getName());


// class Console {
//     constructor() {
//         this.historyLog = [];
//     }
//     log(value) {
//         // console.log(arguments);
//         const stringArguments = Array.from(arguments).map(value => {
//             if (typeof value === "object") {
//                 return JSON.stringify(value);
//             }
//             return `${value}`;
//         }).join();

//         this.histirylog = [...this.historyLog, stringArguments];
//         return stringArguments;
//     }
//     history(from, to) {
//         return this.historyLog.slice(from, to).join("\n");
//     }
//     clearHistory() {
//         this.histirylog = [];
//     }

// }
// const myConsole = new Console();
// console.log(myConsole.log([1, 2, 3, 4]));
// console.log(myConsole.log({ name: "Aska" }));
// console.log(myConsole.log(123, "string"));

// const shceme = ["A1", "D1", "E1", "B3", "E3", "B4", "D5"];

// class Battleship {
//     constructor(boardScheme) {
//         this.boardScheme = boardScheme;
//         this.board = this.getBoard();
//     }
//     getBoard() {
//         return Array(5).fill(0).map((_, i) => {
//             return Array(5).fill(0).map((_, j) => {
//                 const letter = String.fromCharCode(j + 65);
//                 const coordinate = `${letter}${i + 1}`;
//                 if (shceme.includes(coordinate)) {
//                     return 1;
//                 }
//                 return 0;
//             });
//         });
//     }
//     getNeighbourShip(letter, index){

//     }
//     turn(coordinate) {
//         if (this.boardScheme.includes(coordinate)) {
//             this.boardScheme = this.boardScheme.filter(item => item !== coordinate);
//             const letter = coordinate[0].charCodeAt(0) - 65;
//             const index = parseInt(coordinate[1], 10) - 1;
//             this.board[index][letter + 1] = -1
//             if (this.board[index][letter + 1]) {
//                 if (this.board[index][letter + 1] === -1) {
//                     return "killed";
//                 }
//                 return "injured";
//             }
//             if (this.board[index][letter - 1]) {
//                 if (this.board[index][letter - 1] === -1) {
//                     return "killed";
//                 }
//                 return "injured";
//             }
//             if (this.board[index + 1][letter]) {
//                 if (this.board[index + 1][letter] === -1) {
//                     return "killed";
//                 }
//                 return "injured";
//             }
//             if (index && this.board[index - 1][letter]) {
//                 if (this.board[index - 1][letter] === -1) {
//                     return "killed";
//                 }
//                 return "injured";
//             }
//             return "hit!";

//         }
//         return "miss!";
//     }
// }
// const battleship = new Battleship(shceme);
// console.log(battleship.getBoard());
// console.log(battleship.turn("A1"));





/*ВСПЛЫТИЕ hoisting*/

// func();// можно вызвать
// function func() {
//     console.log("Hello World");
// }


// c();// нельзя вызвать
// const c = () => {
//     console.log("arrow function");
// }
/******************************************************/

// /*ЗАМЫКАНИЕ closure*/
// const variable1 = 123;
// function func2() {
//     // можем вызвать т.к. явл. внутренним лексич значением
//     console.log(variable1);
// }

// function outerFunction() {
//     const innerVariable = 42;
//     return function () {
//         console.log(innerVariable);
//     }
// }
// const innerFunction = outerFunction();
// innerFunction();
/****************************************************/