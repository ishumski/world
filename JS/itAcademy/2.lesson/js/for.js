for (let i = 0; i < 5; i++) {
    console.log(i);
}

const numbers = [1, 2, 3, 4];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

function SumBetweenNumbers(a, b) {
    let sum = 0;
    if (a > b) {
        return console.log("U enter wrong numbers!");
    }
    if (a == b) {
        return console.log("Equality is unacceptable!");
    }
    if (typeof a != "number" ||typeof  b != "number") {
        return console.log("Please, enter the number!");
    }
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}
SumBetweenNumbers("e", 2);


let sum = 0;
for (let i = 0; i <= 5; i++) {
    sum += i;
}
console.log(sum);


let numbers = [10, 8, 9, 3, 15, 6];
function findMax(arr) {
    if (!Array.isArray(arr)) {
        return console.log("It is not array!");
    }
    if (arr.length < 0) {
        return console.log("Push full array!");
    }
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        max = max < arr[i] ? arr[i] : max;
    }
    return max;
}
console.log(findMax(numbers));

let numbers = [10, 8, 9, 3, 15, 6];

function findIndex(arr, value) {

    for (i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            return i;
        }
    } return (-1);
}
console.log(findIndex(numbers, 15));


let numbers = [10, 8, 9, 3, 15, 6];
function findIndex(arr, value) {
    let i = 0;
    while (value != arr[i]) {
        i++;
    }
    return console.log(i);
}
findIndex(numbers, 9);