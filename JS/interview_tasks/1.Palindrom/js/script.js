/*Палиндром - слово или фраза, которая с каждой стороны читается одинаково*/
/*1. способ подходит только для одного слова*/
function isPalindriom(str) {
    return str === str.split("").reverse().join("");
}
console.log(isPalindriom("racecar"));
console.log(isPalindriom("obA"));
console.log(isPalindriom("А роза упала на лапу Азора"));

/*2. способ подходит для любых идов строк*/
function isPalindriom1(str1) {
    const firstStr = str1.trim().toLowerCase().replaceAll(" ", "");
    const secondStr = firstStr.split("").reverse().join("");
    return firstStr === secondStr;
}
console.log(isPalindriom("racecar"));
console.log(isPalindriom("obA"));
console.log(isPalindriom1("А роза упала на лапу Азора"));