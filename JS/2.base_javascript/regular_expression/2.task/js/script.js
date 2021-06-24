/*2. Написать функцию, которая находит в переданной строке время и возвращает его. 
Формат времени это два числа разделенных двоеточием. 
Например, строка “Breakfast at 09:00 in the room 123:456” должна вернуть только 09:00, но не 123:456.
 */

function timeInStr(str) {
    const matched = str.match(/ [0-2{1}][0-9{1}]:[0-5{1}][0-9{1}]/g).join(" ");
    return matched;
}
console.log(timeInStr("Breakfast at 09:00 in the room 123:456"));