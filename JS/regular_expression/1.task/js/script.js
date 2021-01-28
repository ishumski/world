/*1. Написать функцию которая возвращает true, если в переданной строке есть хотя бы одна цифра. */

function isNumberInString(str) {

    return (/\d/gi).test(str);
}

console.log(isNumberInString("zdfefAf ds1dfs"));