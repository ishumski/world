/*1. Написать функцию которая возвращает true, если в переданной строке есть хотя бы одна цифра. */

function isNumberInString(str) {

    return str.match(/\d/gi) ? true : false;
}

console.log(isNumberInString("zdfefAf 9 dsdfs"));