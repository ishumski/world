/*4. Написать функцию, которая проверяет что переданная строка содержит в себе 
буквы “a” и “c” (в этом порядке) и любое количество символом между ними, включая 0. */
const loremStr = "La orem software like Aldus PageMaker inluding c versions of Lorem Ipsum."

function isCurrentLettersInString(str) {

    return (/a.*c/g).test(str);
}

console.log(isCurrentLettersInString(loremStr));
