// sum(a,b)==sum(a)(b)==5

// function sum(a, b) {
//     if (b) {
//         return a + b;
//     }
//     return function (b) {
//       return  a + b;
//     }
// }

// console.log(sum(2, 3));
// console.log(sum(2)(3));

/********* */
// function palindrom(str) {
//     return str === str.split("").reverse().join("");
// }
// console.log(palindrom("abba"));
// console.log(palindrom("hello"));
// console.log(palindrom("anna"));


/******* */


// function fizzBuzz(num) {
//     for (let i = 0; i <= num; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("fizzBuzz");
//         } else if (i % 5 == 0) {
//             console.log("fizz");
//         } else if (i % 3 == 0) {
//             console.log("buzz");
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz(100);



// function findVowels(str) {

//     const vowels = ["a", "e", "i", "o", "u"];
//     const count = str.toLowerCase().split("").filter(elem => vowels.includes(elem)).length;
//     return count;
// }

// console.log(findVowels("Abracadabr"));


// function findVowels1(str1) {
//     let count = 0;
//     const vowels = ["a", "e", "i", "o", "u"];
//     let str2 = str1.toLowerCase().split("");

//     for (let i = 0; i < str2.length; i++) {
//         if (vowels.includes(str2[i])) {
//             count++;
//         }
//     }
// }

// console.log(findVowels("Abracafsdfffbgrqwertyuiodabr"));


// function anagramm(str1, str2) {

//     return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");

// }

// console.log(anagramm("Friend", "fInDER"));



// function fibonacci2(num) {
//     if (num < 2) {
//         return num;
//     }
//     return fibonacci2(num - 1) + fibonacci2(num - 2);
// }

// console.log(fibonacci2(2));



// function x (){
//     return 13- +undefined;
// }

// console.log(x())

// const user = {
//     name: "Ilia",
//     age: 16,
//     sayHi() {
//         console.log(this.name);
//     }
// }

// user.sayHi()


// function factorial(num) {
//     return (num != 1) ? num * factorial(num - 1) : 1;
// }
// console.log(factorial(5));


// function factorial(num) {
//     return (num != 1) ? num * factorial(num - 1) : 1;
// }

// console.log(factorial(5)) ;


function factorial1(){
    const arr = [1,2,3,4,5];

    return arr.reduce((acc,currVal)=>acc*currVal);
}

console.log(factorial1()) ;