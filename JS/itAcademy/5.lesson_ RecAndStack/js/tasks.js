// function printNumbers(n) {
//     console.log(n);
//     if (n < 6) {
//         printNumbers(n + 1);
//     }
// }
// printNumbers(0);


// function factorial(n) {
//     if (n < 0) {
//         return;
//     }
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(3));


// function sumOfDigits(n) {
//     if (n === 0) {
//         return 0;
//     }
//     return n % 10 + sumOfDigits(Math.floor(n / 10));
// }
// console.log(sumOfDigits(472));


// const arr = [1, 6, 4, 8, 6, 7, 6];
// function filterEvenNumbers(item) {
//     const newArr = arr.filter(item => item % 2 == 0);
//     return newArr;
// }

// console.log(filterEvenNumbers(arr));


// const array = [0, 8, 9, 2, 0, 4, 0, 8, 9, 2, 0, 5];
// function withOutNull(item) {
//     return item !== 0;
// }
// const newArr = array.filter(withOutNull);
// console.log(newArr);


// const array = [1, 6, 4, 8, 6, 7, 6];
// function numbersSqwr(item) {
//     return Math.pow(item, 2);
// }
// const newArr = array.map(numbersSqwr);
// console.log(newArr);


// const array = ["1", "6", "4", "8", "6", "7", "6"];
// function stringIsNumber(item) {
//     return parseInt(item, 10);
// }
// const newArr = array.map(stringIsNumber);
// console.log(newArr);

// const array = [1, 4, 8];
// function sumOfNumbers(accumulator, currentValue) {
//     return accumulator + currentValue;
// }
// const newArr = array.reduce(sumOfNumbers, 0);
// console.log(newArr);

// const vector1 = [1, 5, 8];
// const vector2 = [6, 8, 3];

// function dot(vec1, vec2) {
//     function getSum(result, currentValue, index) {
//         return result + (currentValue * vec2[index]);
//     }
//     return vec1.reduce(getSum, 0);
// }
// console.log(dot(vector1, vector2));



// const vector1 = [1, 5, 8];
// const vector2 = [6, 8, 3];

// function dot2(vec1) {
//     return function (vec2) {
//         function getSum(result, currentValue, index) {
//             return result + (currentValue * vec2[index]);
//         }
//         return vec1.reduce(getSum, 0);
//     }
// }
// //каррирование
// const sum = dot2(vector1);
// console.log(sum(vector2));
// const vector3 = [3,6,7];
// console.log(sum(vector3));

