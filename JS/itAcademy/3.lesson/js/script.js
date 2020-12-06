/***********************************************************
*****************Задачи из первой лекции********************
***********************************************************/
/*1. Напишите функцию, которая принимает в себя в качестве параметров массив и число. 
Функция должна вернуть новый массив, который состоит из N первых элементов переданного массива, где N - то самое число.
Пропишите все необходимые проверки. Удостоверьтесь что N меньше либо равно количеству элементов в массиве.*/
// const arr1 = [2, 5, 9, 1];
// function getFirstElements(arr1, n) {
//     if (!Array.isArray(arr1)) {
//         console.error("Give array");
//         return;
//     }

//     if (typeof n != "number") {
//         console.error("Give number");
//         return;
//     }

//     if (n > arr1.length) {
//         console.error("Give n <= array length!");
//         return;
//     }

//     let arr2 = [];

//     for (let i = 0; i < n; i++) {
//         arr2.push(arr1[i]);
//     }

//     return arr2;
// }
// console.log(getFirstElements(arr1, 2));



/*2. Напишите функцию с именем filter, которая принимает в себя массив и любое значение. 
Функция должна вернуть новый массив, в котором нет элементов с переданным значением.
// const arr = [1, 6, 4, 8, 6];
// function filter(arr, num) {
//     if (!Array.isArray(arr)) {
//         console.error("Give array");
//         return;
//     }

//     if (typeof num != "number") {
//         console.error("Give number");
//         return;
//     }

//     return arr.filter(item => item != num);
// }
// console.log(filter(arr, 6));
/***************************************************** */
// const arr = [1, 6, 4, 8, 6];
// function filter(arr, num) {
//     if (!Array.isArray(arr)) {
//         console.error("Give array");
//         return;
//     }

//     if (typeof num != "number") {
//         console.error("Give number");
//         return;
//     }

//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== num) {
//             newArr.push(arr[i]);
//         }
//     } return newArr;
// }
// console.log(filter(arr, 6));


/*3. Напишите функцию сортировки числового массива.*/
// const arr = [2, 5, 1, 0, 9];
// function sort(arr) {
//     let min;
//     for (let i = 0; i < arr.length; i++) {
//         min = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[min] > arr[j]) {
//                 min = j;
//             }
//         }
//         if (min != i) {
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }
// console.log(sort(arr));
/**********************************************/
// let arr = [2, 5, 1, 0, 9];
// let newArr = arr.sort((a, b) => a - b)
// console.log(newArr);



let employees = [];
employees[0] = { name: "George", age: 32, retiredate: "March 12, 2014" };
employees[1] = { name: "Edward", age: 17, retiredate: "June 2, 2023" };
employees[2] = { name: "Christine", age: 58, retiredate: "December 20, 2036" };
employees[3] = { name: "Sarah", age: 62, retiredate: "April 30, 2020" };
employees = employees.sort((a,b) => a.age - b.age);
console.log(employees);



/**4.*********************************** */

// const products = {
//     apple: 30,
//     banana: 20,
//     melon: 50
// }

// function calculateSum(products) {
//     let sum = 0;

//     for (let key in products) {
//         if (typeof products[key] == "number") {
//             sum += products[key];
//         }
//     }

//     return sum;
// }
// console.log(calculateSum(products));



// const products = {
//     apple: 30,
//     banana: 20,
//     melon: 50
// }
// function maxCost(products) {
//     let arr = Object.entries(products);
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         max = max < arr[i] ? arr[i] : max;
//     }
//     maxNum = max.pop();
//     max = max.join(" ");
//     return max;
// }
// console.log(maxCost(products));

// const products = {
//     apple: 30,
//     banana: 20,
//     melon: 50
// }
// function maxCost(products) {
//     let maxName;
//     for (let key in products) {
//         if (maxName === undefined) {
//             maxName = key;
//         }
//         if (products[key] > products[maxName]) {
//             maxName = key;
//         }
//     } return maxName;
// }
// console.log(maxCost(products));


/*4.****************************************************/
// const products = {
//     apple: 30,
//     banana: 20,
//     melon: 50
// }

// function addProduct(obj, key, value) {
//     obj[key] = value;
// }

// addProduct(products, "orange", 15);
// console.log(products);


/*5.****************************************************/

// const products = {
//     apple: 30,
//     banana: 20,
//     melon: 50
// }
// function checkProduct(obj, productName) {
//     for (let key in obj) {
//         if (key === productName) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(checkProduct(products, "banana"));
// console.log(products.hasOwnProperty("banana"));


// const newSet = new Set();
// newSet.add(2);
// newSet.add(8);
// newSet.add(2);
// console.log(newSet);

// let arrayWithDuplickates = [1, 3, 7, 2, 3, 7];
// let set = new Set();
// for (let i = 0; i < arrayWithDuplickates.length; i++) {
//     set.add(arrayWithDuplickates[i]);
// }
// let newArr = [];

// for (let value of set) {
//     newArr.push(value);
// }
// console.log(newArr);


// let array = [1, 3, 7, 2, 3, 7];
// let set = new Set(array);
// let n = Array.from(set);
// console.log(n);

// let map = new Map();
// map.set ("key", "value");
// console.log (map);