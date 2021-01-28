/*3. Написать функцию, которая принимает в себя массив содержащий несколько различных слов. 
Функция должна убрать из массива все слова начинающиеся на букву “С” (в верхнем регистре) и вернуть новый массив. */

const arrOfWords = ["Column", "coconut", "Salem", "Cox", "wild"];

function arrFilter(arr) {

    return newArr = arr.filter((elem) => !(/C/).test(elem[0]));
}
console.log(arrFilter(arrOfWords));