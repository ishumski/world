
// /*#1 вывести все числа от 4 до 400
// (не забудь спросить, почему ты пёс)
// почему в проверке условия нельзя записать i>4&&i<=400)*/
// for (let i = 4; i <= 400; i++) {
//     console.log(i);
// }

// // #2 вывести чесла в последовательности: 4 7 10 13 с помощью цикла
// for (let x = 4; x < 14; x = x + 3) {
//     console.log(x);
// }

// // 3# вывести числа 654 653 652 до нуля
// for (let i = 654; i >= 0; i--) {
//     console.log(i);
// }

// // #4 вывести все года с 1983 по 2017
// for (let i = 1983; i <= 2020; i++) {
//     console.log(i + " год!")
// }

// // #5 вывести числа от -4 -2 0 ... 100
// способ 1
// for (let i = -4; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// // способ 2

// for (let i = -4; i <= 100; i = i + 2) {
//     console.log(i);
// }

// // #6 напечать таблицу умножения на 7 от 1 до 9

// for (let i = 1; i <= 9; i++) {
//     console.log("7" + " * " + i + " = " + 7 * i);
// }

// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// let x = +prompt("Ведите число");
// let y = +prompt("Ведите второе число");
// let sum = x + y;
// if (isFinite(x)==true && isFinite(y) == true){
//     alert (sum);
// } 
// else if (isNaN(x)==true || isNaN(y)==true) {
//     alert ("введите число");
// }else if (x == null || y == null) {
//     alert ("Ошибка ввода! Введите число!");
// }

// const name = "Alice and Bob\n";
// console.log (name.substr(2, 7));

// var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// var last = products.length - 1;
// var recent = products[last];
// console.log (recent);


// const numbers = [1, 3, 34, 52, 98];
// const numCopy = [100, ...numbers];
// console.log(numCopy);
// // console.log(numbers.slice(0,numbers.length-1));
// console.log(numbers[0]);

// function arrNum(array, n) {
//     return array.slice(array.length - n);
// }
// console.log (arrNum(numbers, 2));

// ***************************************
// console.log (numbers.join(', '));
// function arr(array) {
//     let sum = "";
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0 && array[i + 1] % 2 == 0) {
//             sum += array[i] + " - ";
//         }
//         else {
//             sum += array[i] + " ";
//         }
//     }
//     console.log(sum);
// }
// arr(numbers);


// ***************************************************
// function name (array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
// return sum;
// }
// console.log(name(numbers));


// ***********************************************
// let arr1 = [1,2,2,3,4];
//     arr2 = [2,1,2,4,3];
//     arr3 = [1,2,3,4];
//     arr4 = [1,2,3,"4"];
// function arraysSimilar(arr1,arr2) {
//     return arr1.sort().toString()===arr2.sort().toString();
// }
// console.log(arraysSimilar(arr1,arr2));


// ********************************************
// написать функцию, которая всегда возвращает имя с большой буквы
// function firstLetterToUpperCase(string) {
//     if (string == "") {
//         string = "World!";
//     }
//     return string[0].toUpperCase() + string.substring(1).toLowerCase();
// }
// console.log("Hello, " + firstLetterToUpperCase("johN" + "!"));


// ********************************************
// написать массив, в котором первый и последний э-ты будут =1,  а остальные знач = 0
// let array = [];
// for (let i = 0; i < 15; i++) {
//     if (i == 0 ||i == 14) {
//         array[i] = 1;
//     } else {
//         array[i] = 0;
//     }
// }
// console.log(array);

// ******************************************
// числа в массиве чередуются 0,1..
// let array = [];
// for (let i = 0; i<10; i++){
//     if (i%2==0){
//         array[i]=0;
//     } else {
//         array[i]=1;
//     }
// }
// console.log(array);

// ******************************************
// заполнить массив нечетными числами !!!!!!!спросить почему не работает 
// let array = [];
// for (let i = 1; i < 22; i++) {
//     if (i % 2 !== 0) {
//         array.push(i); /* array [i]; */
//     }
// }
// console.log(array);


// let array = [1,2,3,4,5,6,7,8,9,10];
// array.forEach((item, index) =>{
//     if (item %2==0)
//     console.log(`${item} с индексом ${index}`)
// });


// ******************************************делал от сюда!!!!!!!!!!!!!!!!!!
// посчитать чет нечет цифры числа

// function bigNumber(num) {
//     let evenNumbers = 0;
//     let oddNumbers = 0;
//     for (i = 0; i < num.length; i++) { (num[i] % 2 == 0) ? evenNumbers++ : oddNumbers++; }
//     return [evenNumbers, oddNumbers];
// }
// console.log(bigNumber('5488')); /*не забывай помещать число в кавычки "5488", а то не будет работать*/


// ******************************************
// посчитать сумму внутри любого массива
function arraySum(arr) {
    const b = arr.toString().split(',');
    let amount = 0;
    for (i = 0; i < b.length; i++) {
        amount += Number(b[i]);
    }
    return amount;
}
console.log(arraySum([1, 2]));
console.log(arraySum([1, 2, 3]));
console.log(arraySum([1, 2, [1, 4]]));



// ******************************************
// есть числа фибоначчи, и надо вывести на экран столько чисел, 
// сколько узаказал пользователь должно быть так: 
// я ввожу в конце 12 и мне в массиве выдыёются числа фибоначчи: [1, 2, 3, 5, 8, 13, 21...]
function febonacchi(num) {
    let sum = [0, 1];
    for (let i = 2; i < num; i++) {
        sum[i] = sum[i - 2] + sum[i - 1];
    }
    return sum;
}
console.log(febonacchi(10));

// ******************************************
// удалить дубликаты из списка

function duplicate(arr) {
    return [...new Set(arr)];
}
console.log(duplicate([1]));
console.log(duplicate([1, 2]));
console.log(duplicate([1, 1, 2]));


// *********************************************
// является ли число палиндромом
function isPalindrom(num) {
    for (let i = 0; i < num; i++) {
        if (num != num.length - 1) {
            return false;
        }
    }
}
console.log(isPalindrom(121212121));

// является ли строка палиндромом
function isPalindrom(str) {
    let isString = str.toString();
    for (let i = 0; i < isString.length; i++) {
        if (isString[i] != isString[i - 1])
            return false;
    }
    return true;
}
console.log(isPalindrom('конок'));

// более короткая запись(проверят строку)
function isPalindromOneLine(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindromOneLine('dodod'));


// ****************************************************************
// вывести числа, если оно кратно 3 (вместо 3 поставить fizz),
// если 5 (вместо 5 поставить buzz),
// если и 3 и 5(вместо 3 и 5 поставить fizzbuzz),
function fizzBazz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbazz");
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBazz(100);


// ****************************************************************
// узнать количество гласных в строке
function findVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let sum = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            sum += 1;
        }
    }
    return sum;
}
console.log(findVowels('Africa'));
// болеее короткий способ
function findVowels(str) {
    const matched = str.match(/[aeiou]/gi);
    return matched ? matched.length : 0;
}

// ****************************************************************
// анаграмма
function anagram(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}
console.log(anagram('friend', 'Finder'));
console.log(anagram('Ангара', 'наГара'));
console.log(anagram('13215646', '66451123'));
console.log(anagram('end', 'bye'));


// JSON знакомство********************************
let student = {
    name: "Ilia",
    age: 16,
    isCute: true,
    courses: ["html", "css", "base javascript"],
    girlfriend: null,
    sayHi() {
        alert('Hello darkness, my old friend');
    }
}
// student.car = false;
// student["color"] = "white";
// let pet = "pet";
// student[pet]= "Hose";

// console.log(student);

// let tojson = JSON.stringify(student);
// console.log(tojson);

// let reverseToJson = JSON.parse(tojson);
// console.log(reverseToJson);

function retObj(str) {
    let newObj = {};
    str = str.replaceAll(" ", "");
    for (i = 0; i < str.length; i++) {
        if (!newObj[str[i]]) {
            newObj[str[i]] = 1;
        } else {
            newObj[str[i]] += 1;
        }
    }
    return newObj;
}
console.log(retObj("Edu v Magadan"));