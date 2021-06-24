/*********************************************************
                Глава 1 ЗАКРЕПЛЕНИЕ ОСНОВ
*********************************************************/



/*1.Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.*/
// const num = 3;
// alert(num);

/*2. Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).*/
// const a = 10;
// const b = 2;
// let sum = a + b;
// let difference = a - b;
// let multiplication = a * b;
// let divide = a / b;
// console.log(sum);
// console.log(difference);
// console.log(multiplication);
// console.log(divide);

/*3. Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.*/
// const c = 15;
// const d = 2;
// let result = c+d;
// console.log(result);

/*4. Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.*/
// const a = 10;
// const b = 2;
// const c = 5;
// let result = a + b + c;
// console.log(result);

/*5. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c.
Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result.
Выведите на экран значение переменной result.*/
// const a = 17;
// const b = 10;
// const c = a - b;
// const d = 7;
// let result = d + c;
// console.log(result);

/*6. Создайте переменную str и присвойте ей значение 'Привет, Мир!'.
Выведите значение этой переменной на экран.*/
// const str = "Hello World!";
// console.log(str);

/*7. Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных
и операции сложения строк выведите на экран фразу 'Привет, Мир!'.*/
// const str1 = "Hello ";
// const str2 = "World!";
// const result = str1 + str2;
// console.log(result);

/*8. Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.*/
// const name = "Ilia";
// console.log(`Hello ${name}!`);

/*9. Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.*/
// const age = 16;
// console.log(`I\'m ${age} years old!`);

/*10. Спросите имя пользователя с помощью методa prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.*/
// let name = prompt("Введите Ваше имя");
// alert(`Yours'\ name is ${name}!`);

/*11. Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.*/
// let number = prompt ("Add your number, lucky!");
// let result = number**2;
// alert (`Your lucky number is ${result}, boy!`);

/*12. Создайте переменную str и присвойте ей значение 'abcde'.
Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.*/

// const str = "abcde";
// console.log (str[0], str[2], str[4]);

/*13. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.*/
// let num = '12345';
// let result = num[0] * num[1] * num[2] * num[3] * num[4];
// console.log(result);
/*************************************************/
// let multi = 1;
// for (i=0; i<num.length; i++){
//     multi *= num[i];
// }
// console.log(multi);

/*14. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.*/
// const secInMinute = 60;
// const minInHour = 60;
// const secInHour = secInMinute*minInHour;
// console.log(secInHour);
// const hourInDay = 24;
// const secInDay = secInHour * hourInDay;
// console.log(secInDay);
// const daysInMonth=30;
// const secInMonth = secInDay*daysInMonth;
// console.log(secInMonth);

/*15. Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.*/
// const sec = 56;
// const min = 13;
// const hour = 14;
// let time = `${hour}:${min}:${sec}`;
// console.log(time);

/*16. Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.*/
// const number = 15;
// let degree = number**2;
// console.log(degree);

/*17. Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.*/
// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// console.log(num);

/*18. Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.*/
// let num = 10;
// num ++;
// num ++;
// num --;
// console.log(num);






/********************************************************
Глава 2 ЗАДАЧИ НА ОСНОВЫ РАБОТЫ С МАССИВАМИ И ОБЪЕКТАМИ
*********************************************************/




/*1.  Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.*/
// const arr = ['a', 'b', 'c'];
// console.log(arr);

/*2. С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.*/
// for (let value of arr){
//     console.log(value);

/*3. Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.*/
// const arr = ['a', 'b', 'c', 'd'];
// let arrToString = arr.join('');
// console.log(arrToString[0] + "+" + arrToString[1] + ", " + arrToString[2] + "+" + arrToString[3]);

/*4. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.*/
// const arr = [2, 5, 3, 9];
// const firstPairMulti = arr[0]*arr[1];
// const secondtPairMulti = arr[2]*arr[3];
// const result = firstPairMulti + secondtPairMulti;
// console.log(result);

/*5.  Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:*/
// const obj = { a: 1, b: 2, c: 3 };
// console.log(obj["c"]);
// console.log(obj.c);

/*6.  Создайте объект заработных плат obj. Выведите на экран зарплату Пети и Коли.*/
/*****************************************************************************/
// let obj = {};
// obj['Коля'] = 100;
// obj['Вася'] = 200;
// obj['Петя'] = 300;
// console.log(obj);
/*********************************************************************/
// const obj = { Коля: '1000', Вася: '500', Петя: '200' };
// let name = 'Коля';
// let salary = obj["Коля"];
// console.log(`${name}: ${salary}`);
// console.log(obj.Коля);
// console.log(obj["Коля"]);
// console.log(obj.Петя);
// console.log(obj["Петя"]);
// console.log(obj.Вася);
// console.log(obj["Вася"]);
/**************************************************** */
// const key = Object.keys(obj);
// const value = Object.values(obj);
// const nick = key[0] +": " + value[0];
// const pitie = key[2] +": " + value[2];
// console.log(nick);
// console.log(pitie);
/**********************************************/
// console.log(Object.entries(obj)[2]);
// console.log(Object.entries(obj)[0]);

/*7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
(понедельник - первый и т.д.). Выведите на экран текущий день недели.*/
// const week = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday"
// }

/*8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
Выведите день недели, соответствующий значению переменной day.*/
// let day = 3;
// console.log(week[day]);

/*9. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.*/
// const numArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let num = numArr[1][0];
// console.log(num);

/*10. Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.*/
// const obj = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' };
// let library = obj["js"][0];
// console.log(library);

/*11. Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент,
являющийся массивом названий дней недели по-русски, а второй - по-английски.
Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).*/
// const daysList = {
//     'ru': ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],
//     'en': ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// }
// console.log(daysList.ru[0], daysList['en'][2]);

/*12. Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то),
а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day.
То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.*/
// let lang = 'ru';
// let day = 5;
// console.log(daysList[lang][day]);

/*13 Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. ПОЧЕМУ НЕ РАБОТАЕТ С IF?????????*/
// let schedule = {foo: 'bar'};
// function isEmpty(obj) {
//     if (!Object.keys(obj).length) {
//         return true;
//     } 
//     return false;
// }
// console.log(isEmpty(schedule));
/***************************************************************************/
// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }

/*14. Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.*/
// const obj = { a: 1, b: 2, c: 3 };
// let sum = obj["a"] + obj["b"] + obj["c"];
// console.log(sum);
/***************************************************************************/
// let obj = { a: 1, b: 2, c: 3 };
// let sum = 0;
// for (let i in obj) {
//   sum += obj[i];
// }
// console.log(sum);

/*15. Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.*/
// const obj = {"1a":23, "2b":18, "c-c":4 };
// let sum = 0;
// for(let key in obj){
//   sum += obj[key];
// }
// console.log (sum);

/*16. Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.*/
// const salaries = { "John": 100, "Pete": 300, "Mary": 250 };
// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let i of Object.values(salaries)) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumSalaries(salaries));


/*17. Создайте объект user с ключами name (имя), surname (фамилия), patronymic (отчество) и какими-то произвольными значениями.
Выведите на экран фамилию, имя и отчество через пробел.*/
// let user = {
//   name: "Ilia",
//   surname: "White",
//   patronymic: "Tequilovich",
// };
/*************************************************************************************/
// let properties = Object.values(user).join(' ');
// console.log(properties);
/*************************************************************************************/
// let properties = user["name"] + " " + user["surname"] + " " + user["patronymic"];
// console.log(properties);

/*18. Создайте объект date (дата) с ключами year (год), month (месяц) и day (день) и значениями, соответствующими текущему дню.
Выведите созданную дату на экран в формате 'год-месяц-день'.*/
// const date = {
//   year: 2020,
//   month: 10,
//   day: 12
// };
// let dateLine = date["year"] + "-" + date["month"] + "-" + date["day"];
// console.log(dateLine);

/*19. Создайте объект с ключами a, b и c и элементами 1, 2 и 3.*/
// let obj = {};
// obj.a = 1;
// obj.b = 2;
// obj.c = 3;
/************************************************************/
// obj['a'] = 1;
// obj['b'] = 2;
// obj['c'] = 3;
// console.log(obj);

/*20.Дан следующий массив:
let arr = {'a', 'b', 'c'};
Дана также переменная key со значением 2.
Выведите на экран элемент, ключ которого хранится в переменной key.*/
// let arr = ['a', 'b', 'c'];
// let key = 2;
// console.log(arr[key]);

/*21. Дан следующий массив:
let arr = [1, 2, 3, 4, 5];
Дана также переменная key1 со значением 1 и переменная key2 со значением 2.
Найдите сумму элементов, ключи которых хранятся в наших переменных.*/
// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// let result = arr[key1] + arr[key2];
// console.log(result);

/*22. Дан следующий объект:
let obj = {'a': 1, 'b': 2, 'c': 3};
Дана переменная key, в которой хранится один из ключей нашего объекта.
Выведите с помощью переменной key соответствующий элемент массива.*/
// let obj = {'a': 1, 'b': 2, 'c': 3};
// let key = 'c';
// console.log(obj[key]);
// console.log(typeof obj);


/*************************************************************************************************/
// let arr = [0, 1, 2, 2, 8, 9];
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (i === 0 || arr.length - 1 === i) {
//     arr1[i] = 1;
//   } else {
//     arr1[i] = 0;
//   }
// }
// console.log(arr1);

/*23. Заполнение объекта в цикле*/

// const keys = ['a', 'b', 'c', 'd', 'e'];
// const values = [1, 2, 3, 4, 5];
// let obj = {};
// for (let i = 0; i < 4; i++) {
//      let key = keys[i];
//      let value = values[i];
//      obj[key] = value;
// }
// console.log(obj);








/*********************************************************
  ЗАДАЧИ НА КОНСТРУКЦИИ if-else, switch-case В JAVASCRIPT
*********************************************************/







/*1. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
// let a = -3;
// (a == 0) ? console.log(true) : console.log(false);

/*2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
// let a = 1;
// (a > 0) ? console.log(true) : console.log(false);

/*3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
// let a = -3;
// (a < 0) ? console.log(true) : console.log(false);

/*4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
/*5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
/*6. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
/*7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.*/
/*8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.*/
// let a = "1";
// (a === "1") ? console.log(true) : console.log(false);

/*9. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test,
равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.*/
// const test = false;
// (test == true) ? console.log(true) : console.log(false);

/*10. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test,
равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.*/
// const test = false;
// (test != true) ? console.log(true) : console.log(false);

/*11.Если переменная a больше нуля и меньше 5 - ти, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 5, 0, -3, 2.*/
// const a = 2;
// (a > 0 && a < 5) ? console.log(true) : console.log(false);

/*12.Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
Выведите новое значение переменной на экран.Проверьте работу скрипта при a, равном 5, 0, -3, 2.*/
// let b = 15;
// if (b == 0 || b == 2) {
//     b += 7;
// } else {
//     b /= 10;
// }
// console.log(b);

/*13.Если переменная c равна или меньше 1, а переменная d больше или равна 3, то выведите сумму этих переменных,
иначе выведите их разность(результат вычитания).Проверьте работу скрипта при c и d, равном 1 и 3, 0 и 6, 3 и 5.*/
// let c = 0;
// let d = 6;
// if (c <= 1 || d >= 3) {
//     a = c - d;
// } else {
//     a = c + d;
// }
// console.log(a);

/*14.Если переменная a больше 2 - х и меньше 11 - ти, или переменная b больше или равна 6 - ти и меньше 14 - ти,
то выведите 'Верно', в противном случае выведите 'Неверно'.*/
// const a = 5;
// const b = 6;
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log("Right");
// } else{
//   console.log("Wrong");
// }

/*15 Переменная num может принимать 4 значения: 1, 2, 3 или 4.
Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.
Решите задачу через switch-case.*/
// let num = prompt("Enter your number");
// switch (num) {
//   case '1': console.log("winter")
//   break;
//   case '2': console.log("spring")
//   break;
//   case '3': console.log("summer")
//   break;
//   case '4': console.log("autumn")
//   break;
// }

/*16.В переменной day лежит какое-то число из интервала от 1 до 31.
Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/
// let day = prompt("Enter the number");
// if (day >= 1 && day <= 10) {
//   console.log("This is first dacade");
// } else if (day >= 11 && day <= 20) {
//   console.log("This is second dacade");
// } else {
//   console.log("This is third dacade");
// }

/*17. В переменной month лежит какое-то число из интервала от 1 до 12.
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).*/
// let month = prompt("Enter the number");
// if (month >= 1 && month <= 3) {
//   console.log("This is winter month");
// } else if (month >= 4 && month <= 6) {
//   console.log("This is spring month");
// } else if (month >= 7 && month <= 9) {
//   console.log("This is summer month");
// } else {
//   console.log("This is autumn month");
// }

/*18. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'.
Если это так - выведите 'да', в противном случае выведите 'нет'.*/
// const str = "abcde";
// (str[0]=="a")? console.log("yes") : console.log("no");

/*19. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3.
Если это так - выведите 'да', в противном случае выведите 'нет'.*/
// const str = "12345";
// (str[0] == "1" || str[0] == "2" || str[0] == 3) ? console.log("yes") : console.log("no");

/*20. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.*/
// let num = "935";
// let sum = parseInt(num[0]) + parseInt(num[1]) + parseInt(num[2]);
// console.log(sum);
/**************************************************************************************************************************************/
// let num = "935";
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += parseInt(num[i]);
// }
// console.log(sum);

/*21. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
Если это так - выведите 'да', в противном случае выведите 'нет'.*/
// let num = "935178";
// let sum1 = parseInt(num[0]) + parseInt(num[1]) + parseInt(num[2]);
// let sum2 = parseInt(num[3]) + parseInt(num[4]) + parseInt(num[5]);
// if (sum1==sum2){
//   console.log("yes");
// }
// console.log("no");
// /***********************************************************************************************************************************************/
// let num = "935178";
// let sum1 = 0;
// let sum2 = 0;
// for (let i = 0; i < num.length / 2; i++) {
//   sum1 += parseInt(num[i]);
//   sum2 += parseInt(num[num.length - i - 1]);
// }
// console.log(sum1);
// // for (let i = 3; i < num.length; i++) {
// //   sum2 += parseInt(num[i]);
// // }
// console.log(sum2);
// (sum1===sum2)? console.log("yes") : console.log("no");






/********************************************************
     ГЛАВА 5 ЗАДАЧИ НА ЦИКЛЫ WHILE, FOR В JAVASCRIPT
*********************************************************/



/*4/1. Возвести все элементы массива в квадрат*/
// let arr = [23, 56];
// for (let i = 0; i<arr.length; i++){
//   arr1 = (arr[i]**2);
//   console.log([arr1]);
// }
/***********************************************************************/
// let arr = [23, 56];
// for (let value of arr) {
//   arr1 = value**2;
//   console.log([arr1]);
// }
/***********************************************************************/
// let arr = [23, 56].map(item => item**2);
// console.log(arr);
/***********************************************************************/
// let arr = [23, 56];
// let multi = arr.map(item =>{
//   return (item**2);
// });
// console.log(multi);

/*5.Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.*/
// const arr = [1, 2, 3, 4, 5];
// for (let i in arr){
//   console.log(arr[i]);
// }
/*************************************************************************/
// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i<arr.length; i++){
//   console.log(arr[i]);
// }

/*6. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива.
Запишите ее в переменную result.*/
// const arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }
// console.log(result);

/*7. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.*/
// const obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
// for( let key in obj){
//   let result = `${key[0].toUpperCase() + key.slice(1).toLowerCase()}: ${obj[key]}!`;
//   console.log(result);
// }

/*8. Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.*/
// const obj = { Коля: '200', Вася: '300', Петя: '400' };
// for (let key in obj){
//   console.log(`${key} - зарплата ${obj[key]} долларов.`);
// }

/*9. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if
выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.*/
// const arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

/*10. Дан массив с числами. Числа могут быть положительными и отрицательными.
Найдите сумму положительных элементов массива.*/
// const arr = [10, -100, 23, 15, 0,- 1, -1, 1, 1];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

/*11. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10.
С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.*/
// const arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log("Есть"); 
//     break;
//   }
// }

/*12. Дан массив с числами, например: [10, 20, 30, 50, 235, 3000].
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
ДАННАЯ ЗАДАЧЧА НЕ СОВСЕМ КОРРЕКТНА: ПЕРВОЕ РЕШЕНИЕ БУДЕТ РАБОТАТЬ ТОЛЬКО В ТОМ СЛУЧАЕ,
ЕСЛИ В МАССИВЕ БУДУТ СТРОКОВЫЕ ЗНАЧЕНИЯ ЭЛЕМЕНТОВ*/
// const arr = ['10', '20','30', '50', '235', '3000'];
// for (var i = 0; i < arr.length; i++) {
// if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
// console.log(arr[i]);
// }
// }
/*ДАННОЕ РЕШЕНИЕ, ЕСЛИ В МАССИВЕ ЧИСЛА*/
// const arr = [10, 20, 30, 50, 235, 3000];
// arr1 = arr.filter(item => ["1", "2", "5"].includes(item.toString()[0]));
// console.log(arr1);

/*13. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.*/
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`-${arr.join("-")}-`);
// }

/*14. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.*/
// const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// for(let i = 0; i<week.length; i++){
//   if(week[i] == "Суббота"||week[i] == "Воскресенье"){
//     console.log(week[i].bold());
//   } else {
//     console.log(week[i]);
//   }
// }
/************************************************************************************************************* */
// const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// for (let value in week) {
//   if (week[value] == "Суббота" || week[value] == "Воскресенье") {
//     console.log(week[value].bold());
//   } else {
//     console.log(week[value]);
//   }
// }

/*15. Составьте массив дней недели. С помощью цикла for выведите все дни недели,
а текущий день выведите курсивом. Текущий день должен храниться в переменной day.*/
// const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// const day = "Понедельник";
// for (let day in week) {
//   if (week[day] == "Понедельник") {
//     console.log(week[day].italics());
//   } else {
//     console.log(week[day]);
//   }
// }

/*16.Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
Какое число получится? Посчитайте количество итераций, необходимых для этого
(итерация - это проход цикла), и запишите его в переменную num.*/
// for (n = 1000, num = 0; n > 50; n = n / 2, num++);
// console.log(n, num);
/******************************************************************************* */
// for (n = 1000; n > 50; num++) {
//   num = 0
//   n = n / 2;
// }
// console.log(n, num);




/********************************************************
     ГЛАВА 6 ЗАДАЧИ НА МАТЕМАТИЧЕСКИЕ ФУНКЦИИ JAVASCRIPT
*********************************************************/






/*1.  Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.*/
// const a = 10;
// const b = 3;
// const division = a % b;
// console.log(division);

/*2. Даны переменные a и b. Проверьте, что a делится без остатка на b.
Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.*/
// const a = 27;
// const b = 3;
// let division = a % b;
// if (division != 0) {
//   console.log(`Делится с остатком ${division}`);
// } else {
//   console.log ('Делится');
// }
/********************************************************************** */
// const a = prompt("Enter number 1");
// const b = prompt("Enter number 2");
// let division = a % b;
// if (division != 0) {
//   alert(`Делится с остатком ${division}`);
// } else {
//   alert ('Делится');
// }

/*3. Возведите 2 в 10 степень. Результат запишите в переменную st.*/
// const st = 2**10;
// console.log (st);

/*4. Найдите квадратный корень из 245.*/
// const r = 245;
// console.log(Math.sqrt(r));

/*5. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10.
Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/
// let arr = [4, 2, 5, 19, 13, 0, 10].map(item => Math.pow(item, 3));
// let sum = (accumulator, currentValue) => accumulator + currentValue;
// let result = (Math.sqrt(arr.reduce(sum))).toFixed(2);
// console.log(result);
// /***************************************************************************************** */
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// let result = 0;
// for (let value in arr) {
//   arr1 = Math.pow(arr[value], 3);
//   sum += arr1;
// }
// result = Math.sqrt(sum);
// console.log(result);

/*6. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.*/
// let x = Math.sqrt(379).toFixed();
// console.log(x);
// let y = Math.sqrt(379).toFixed(1);
// console.log(y);
// let z = Math.sqrt(379).toFixed(2);
// console.log(z);

/*7. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
запишите результаты округления в объект с ключами 'floor' и 'ceil'.*/
// const num = 587;
// let square = Math.sqrt(587);
// let floor = Math.floor(square);
// let ceil = Math.ceil(square);
// let result = {"floor": floor, "ceil": ceil}
// console.log(result);

/*8. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. */
// let x = Math.max(4, -2, 5, 19, -130, 0, 10);
// let y = Math.min(4, -2, 5, 19, -130, 0, 10);
// console.log(x, y);

/*9. Выведите на экран случайное целое число от 1 до 100.*/
// let x = Math.round(Math.random()*100);
// console.log(x);

/*10. Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while).*/
// let arr = [];
// for (let i = 0; i < 11; i++) {
//   arr[i] = Math.round(Math.random(arr[i]) * 100);
// }
// console.log(arr);
/***********************************************************************************/
// let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(item => (Math.round(Math.random(item) * 100)));
// console.log (arr);

/*11. Даны переменные a и b. Найдите найдите модуль разности a и b.
Проверьте работу скрипта самостоятельно для различных a и b.*/
// const a = -100;
// const b = 23;
// let result = Math.abs(a-b);
// console.log(result);

/*12. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/
// const a = 3;
// const b = 5;
// let c = a-b;
// c = Math.abs(c);
// console.log(c);

/*13. Дан массив arr. Найдите среднее арифметическое его элементов.
Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.*/
// const arr = [12, 15, 20, 25, 59, 79];
// let average = (arr.reduce((accumulator, currentValue) => accumulator + currentValue)) / arr.length;
// console.log(average);

/*14. Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение
(умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4. */
// const arr = [1, 2, 3, 4];
// let factorial = arr.reduce((accumulator, currentValue) => accumulator * currentValue);
// console.log(factorial);
/***************************************************************************************************************************/
// const arr = [1, 2, 3, 4];
// for (i = 0, sum = 1; i < arr.length; sum *= arr[i], i++){ 
// }
// console.log(sum);
/****************************************************************************************************************************/
// let number = prompt("Enter your number:");
// for (i = 0, factorial = 1; i < number; i++) {
//      factorial *= (number-i);
// }
// alert(factorial);
/****************************************************************************************************************************/
// function factorial (num) {
//      return (num!=1)? num* factorial(num-1): 1;
// }
// console.log(factorial(5));






/********************************************************
ГЛАВА 7 ЗАДАЧИ НА ФУНКЦИИ РАБОТЫ СО СТРОКАМИ В JAVASCRIPT
*********************************************************/



/*0.Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены. */
// let str = 'aaa@bbb@ccc';
// str = str.replaceAll("@", "!");
// console.log(str);
/*0. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).*/
// let str = 'aaa bbb ccc';
// let x = str.substr(4,4);
// console.log(x);
/***************************************************************** */
// let x = str.substring(4,7);
// console.log(x);
/***************************************************************** */
// let x = str.slice(4,7);
// console.log(x);
/*0. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'*/
// let date = '2025-12-31';
// newDate = date.split("-").reverse().join("/");
// console.log(newDate);

/*1. Дана строка 'js'. Сделайте из нее строку 'JS'.*/
// let str = "js";
// str = str.toUpperCase();
// console.log(str);

/*2. Дана строка 'JS'. Сделайте из нее строку 'js'.*/
// let str = "JS";
// str = str.toLowerCase();
// console.log(str);

/*3. Дана строка 'я учу javascript!'.Найдите количество символов в этой строке.*/
// const str = 'я учу javascript!';
// console.log (str.length);

/*4. Дана строка 'я учу javascript!'.Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами(через substr, substring, slice).*/
// const str = 'я учу javascript!';
// console.log (str.substr(2,4));
// console.log (str.substring(2,16));
// console.log (str.slice(2,16));

/*5. Дана строка 'я учу javascript!'.Найдите позицию подстроки 'учу'.*/
// let str = 'я учу javascript!';
// str = str.indexOf("учу");
// console.log(str);

/*6. Дана переменная str, в которой хранится какой - либо текст.Реализуйте обрезание длинного текста по следующему принципу:
если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов
строки str и добавим в конец троеточие '...'.В противном случае в переменную result запишем содержимое переменной str.*/
// const str = "I didn\'t think that I had a debt to pay\nTil they came to take all I had left away\nYou said you wouldn\'t put me to the test today\nBut I remember you saying that yesterday";
// let n = str.length;
// let result = " ";
// if (n >= 20) {
//      result = `${str.slice(0, 39)}...`;
// } else {
//      result = str;
// }
// console.log(result);

/*7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.*/
// let str = 'Я-учу-javascript!';
// str = str.replaceAll(/-/g, "!");
// console.log(str);

/*8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.*/
// let str = 'Я-учу-javascript!';
// str = str.split("-");
// console.log(str);

/*9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.*/
// let str = 'Я-учу-javascript!';
// newStr = str.split("");
// console.log(newStr);

/*10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.*/
// let date = '2025-12-31';
// NewDate = date.split("-").reverse().join(".");
// console.log(NewDate);

/*11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.*/
// const str  = ['я', 'учу', 'javascript', '!'];
// let newStr = str.join("+");
// console.log(newStr);

/*12. Преобразуйте первую букву строки в верхний регистр.*/
// const str = 'я учу javascript!';
// let newStr = str[0].toUpperCase() + str.slice(1);
// console.log(newStr);

/*13. Преобразуйте первую букву каждого слова строки в верхний регистр.*/
// const str = 'я учу javascript!';
// let newStr = str.split(" ").map(item => (item[0].toUpperCase()+item.slice(1))).join(" ");
// console.log(newStr);

/*14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.*/
// const str = 'var_test_text';
// let newStr = str.replaceAll("_"," ").split(" ").map(item => (item[0].toUpperCase()+item.slice(1))).join("");
// console.log(newStr);




/********************************************************
   ГЛАВА 8 РАБОТА С ФУНКЦИЯМИ ДЛЯ МАССИВОВ В JAVASCRIPT
*********************************************************/




/*1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.*/
// const firstArr = [1, 2, 3];
// const secondArr = [4, 5, 6];
// let simbiot = firstArr.concat(secondArr);
// console.log(simbiot);

/*2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].*/
// const firstArr = [1, 2, 3];
// let newArr = firstArr.reverse();
// console.log(newArr);

/*3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.*/
// const firstArr = [1, 2, 3];
// let newArr = firstArr.push(4,5,6);
// console.log(firstArr);
// console.log(newArr);

/*4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.*/
// const firstArr = [1, 2, 3];
// let newArr = firstArr.unshift(4,5,6);
// console.log(firstArr);
// console.log(newArr);

/*5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.*/
// const firstArr = ['js', 'css', 'jq'];
// let newArr = firstArr.shift();
// console.log(firstArr);
// console.log(newArr);

/*6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.*/
// const firstArr = ['js', 'css', 'jq'];
// let newArr = firstArr.pop();
// console.log(firstArr);
// console.log(newArr);

/*7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].*/
// const firstArr = [1, 2, 3, 4, 5];
// let newArr = firstArr.slice(0,3);
// console.log(newArr);

/*8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].*/
// const firstArr = [1, 2, 3, 4, 5];
// let newArr = firstArr.slice(3);
// console.log(newArr);

/*9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].*/
// const firstArr = [1, 2, 3, 4, 5];
// let newArr = firstArr.splice(1,2);
// console.log(firstArr);
// console.log(newArr);

/*10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].*/
// const firstArr = [1, 2, 3, 4, 5];
// let newArr = firstArr.splice(1,3);
// console.log(firstArr);
// console.log(newArr);

/*11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].*/
// const firstArr = [1, 2, 3, 4, 5];
// let newArr = firstArr.splice(3, 0, 'a', 'b', 'c');
// console.log(firstArr);
// console.log(newArr);

/*12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/
// const firstArr = [1, 2, 3, 4, 5];
// let newArr = firstArr.splice(1, 5, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
// console.log(firstArr);
// console.log(newArr);

/*13.  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.*/
// let arr = [3, 4, 1, 2, 7];
// arr = arr.sort();
// console.log(arr);

/*14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.*/
// const obj = {js:'test', jq: 'hello', css: 'world'};
// let arr = Object.keys(obj);
// console.log(arr);





/************************************************************
ГЛАВА 9 ПРАКТИКА НА КОМБИНАЦИИ СТАНДАРТНЫХ ФУНКЦИЙ JAVASCRIPT
*************************************************************/


/*1. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.*/
// const str = "i will be your deadman!";
// str1 = str[0].toUpperCase()+ str.slice(1);
// console.log(str1);
/**********************************************************************/
// let str = "i will be your deadman!";
// str = str.split("");
// str[0] = str[0].toUpperCase();
// str = str.join("");
// console.log(str);

/*2. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл*/
// const str = '123456';
// let newStr = str.split("").reverse().join("");
// console.log(newStr);
// console.log(typeof newStr);

/*3. Проверьте, что строка начинается на http://. Показать решение.*/
// let str = " ";
// if (str.slice(0, 7) == "http://") {
//      console.log("yes");
// } else {
//      console.log("false");
// }

/*4. Проверьте, что строка заканчивается на .html*/
// let str = "http://127.0.0.1:5500/JS/trepachev/index.html";
// if (str.substr(-5) == ".html") {
//      console.log("yes");
// } else {
//      console.log("false");
// }




/************************************************************
ГЛАВА 10 ОСНОВЫ РАБОТЫ С ПОЛЬЗОВАТЕЛЬСКИМИ ФУНКЦИЯМИ
*************************************************************/






/*1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.*/
// function double(num) {
//      return (num*num);
// }
// console.log(double(23));

/*2. Сделайте функцию, которая возвращает сумму двух чисел.*/
// function sum(a, b) {
//      return a + b;
// }
// console.log(sum(2, 5));

/*3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.*/
// function mathAction (a,b,c){
//      return (a-b)/c;
// }
// console.log(mathAction(99,9,10));

/*4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.*/
// function dayOfWeek(key) {
//      let obj = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вс" };
//      if (key > 0 || key < 8) {
//           return console.log(obj[key])
//      }
// }
// dayOfWeek(7);





/************************************************************
     ГЛАВА 12 ПРИМЕРЫ РАБОТЫ С ЛОГИЧЕСКИМИ ЗНАЧЕНИЯМИ
*************************************************************/





/*1. Сделайте функцию, которая параметрами принимает 2 числа.
Если эти числа равны - пусть функция вернет true, а если не равны - false.*/
// function numEquality (a,b){
//      if(a==b){
//           return true;
//      } else{
//           return false;
//      }
// }
// console.log(numEquality(3,3));

/*2. Сделайте функцию, которая параметрами принимает 2 числа.
Если их сумма больше 10 - пусть функция вернет true, а если нет - false.*/
// function sumOfNum (a,b){
//      if (a+b > 10){
//           return true;
//      } else {
//           return false
//      }
// }
// console.log(sumOfNum(5,1));

/*3. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
Если отрицательное - пусть функция вернет true, а если нет - false.*/
// function negativeNum (a){
//      if (a<0){
//           return true;
//      } else {
//           return false;
//      }
// }
// console.log(negativeNum(5));




/************************************************************
     ГЛАВА 13 ЗАДАЧИ НА ПРИЕМЫ РАБОТЫ С ЦИКЛАМИ НА JS
*************************************************************/




/*1. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.*/
// let str = " ";
// for (let i = 1; i < 10; i++) {
//      str += i;
// } 
// console.log(str);

/*2. С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.*/
// let str = " ";
// for (let i = 9; i > 0; i--) {
//      str += i;
// } 
// console.log(str);

/*3. С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.*/
// let str = "-";
// for (let i = 1; i < 10; i++) {
//      str =`${str + i}-`;
// }
// console.log(str);

/*4.  Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов.*/
// let str = " ";
// for (let i = 0; i < 21; i++) {
//      str += "x";
//      console.log(str);
// }

/*5. С помощью двух вложенных циклов нарисуйте следующую пирамидку*/
// for (let i = 1; i < 10; i++) {
//      let str = " ";
//      for (let j = 0; j < i; j++) {
//           str += i;
//      }

//      console.log(str);
// }

/*6. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:*/
// let str = " "; 
// for (let i = 1; i <6; i++) {
//      str += "xx";
//      console.log(str);
// }






/************************************************************
     ГЛАВА 14 ЗАДАЧИ НА ПРИЕМЫ РАБОТЫ С МАССИВАМИ НА JS
*************************************************************/






/*1.Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.*/
// let arr = [];
// let str = "x";
// for (let i = 0; i < 5; i++) {
//      arr.push(str);
//      str += "x";
// }
// console.log(arr);

/*2. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.*/
// let arr = [];
// for (i = 1; i < 5; i++) {
//      let str = "";
//      for (j = 0; j < i; j++) {
//           str += i;
//      }
//      arr.push(str);
// }
// console.log(arr);
/* 3. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение,
которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. */
// function arrayFill(a, b) {
// function arrayFill(a, b) {
//      let arr = [];
//      let elem = " ";
//      for (let i = 0; i < b; i++) {
//           elem = a;
//           arr.push(elem);
//      }
//      console.log(arr);
// }
// arrayFill("y", 8);

/*4. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.*/
// let arr = [1,1,1,7,1,1,1,1,1,1,1,1,1,1];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//      sum += arr[i];
//      if (sum > 10) {
//           console.log(i + 1);
//           break;
//      }
// }
/*************************************************************/
// let arr = [5, 6, 1, 2].reduce((s, v, i) => ({ summ: s.summ + v, pos: s.summ + v > 10 ? s.pos : i + 2 }), { summ: 0, pos: 0 }).pos;
// console.log(arr);

/*5.  Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.*/
// let arr = [1, 2, 3, 4];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//      newArr.push(arr[i]);
// }
// console.log(newArr);

/*6. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.*/
// const arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//      for (j = 0; j < arr[i].length; j++)
//           sum += arr[i][j];
// }
// console.log(sum);





/************************************************************
  ГЛАВА 15 ПРАВИЛЬНОЕ ИСПОЛЬЗОВАНИЕ ПОЛЬЗОВАТЕЛЬСКИХ ФУНКЦИЙ
*************************************************************/




/*1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.*/
// function isNumberInRange (num){
//      if (num >0 && num <10){
//           return true;
//      } return false;
// }
// console.log(isNumberInRange(25));

/*2. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.*/
// let arr = [5, 13, 5, 1, 2, 15, 23, 1, 2];
// newArr = [];
// function isNumberInRange(arr) {
//      for (let item in arr) {
//           if (arr[item] > 0 && arr[item] < 10) {
//               newArr.push(arr[item]); 
//           } 
//      }
// }
// isNumberInRange(arr);
// console.log(newArr);
/********************************************************************/
// let arr = [5, 13, 5, 1, 2, 15, 23, 1, 2];
// newArr = [];
// for (let item in arr){
//      if(arr[item] > 0 && arr[item]<10){
//           newArr.push(arr[item]);
//      }
// }
// console.log(newArr);
/********************************************************************/
// let newArr = [];
// let arr = [5, 3, 6, 1, 2, 15, 23, 1, 2].map(item => (item > 0 && item < 10) ? newArr.push(item) : null);
// console.log(newArr);
/********************************************************************/
// let arr = [5, 3, 6, 1, 2, 15, 23, 1, 2];
// arr = arr.filter(item => (item > 0 && item < 10));
// console.log(arr);

/*3.  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.*/
// let sum = 0;
// function getDigitsSum(num) {
//      for (let i = 0; i <= num; i++) {
//           sum += i;
//      }
// }
// getDigitsSum(2);
// console.log(sum);

/*4. Найдите все года от 1 до 2020, сумма цифр которых равна 13.
Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.*/
// for (let i = 1; i <= 2020; i++) {
//      let sumOfYearNum = i.toString().split("").map(item => parseInt(item)).reduce((accumulator, currentValue) => (accumulator + currentValue));
//      (sumOfYearNum == 13) ? console.log(i) : null;
// }

/*5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет:
четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. */
// function isEven(num) {
//      if (num % 2 == 0) {
//           return true;
//      } return false;
// }
// console.log(isEven(22));

/*6. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей задачи.*/
// let newArr = [];
// let arr = [5, 3, 6, 1, 2, 15, 23, 1, 2].map(item => (item % 2 == 0) ? newArr.push(item) : null);
// console.log(newArr);
/***************************************************/
// let arr = [5, 3, 6, 1, 2, 15, 23, 1, 2].filter(item => (item % 2 == 0));
// console.log(arr);
/***************************************************/
// const arr = [5, 3, 6, 1, 2, 15, 23, 1, 2];
// newArr = [];
// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] % 2 == 0) {
//           newArr.push(arr[i]);
//      }
// } console.log(newArr);

/*7. Сделайте функцию getDivisors, которая параметром принимает число и
возвращает массив его делителей (чисел, на которое делится данное число).*/
// function getDivisors(num) {
//      arr = [];
//      for (i = 1; i <= num; i++) {
//           if (num % i == 0) {
//                arr.push(i);
//           }
//      }
//      console.log(arr);
// }
// getDivisors(525);



/************************************************************
  ГЛАВА 16 ПРАКТИКА НА ПОЛЬЗОВАТЕЛЬСКИЕ ФУНКЦИИ
*************************************************************/
/*1. Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst,
которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.*/
// function ucFirst(str) {
//      return str.split(" ").map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(" ");
// }
// console.log(ucFirst("i love hentai"));

/*2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.*/
// const str = 'var_text_hello';
// let newStr = str.split("_").map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join("");
// newStr = newStr[0].toLowerCase() + newStr.slice(1);
// console.log(newStr);

/*3.Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
Функция должна возвращать true или false.*/
// function inArray(str, arr) {
//      arr = arr.split(" ");
//      if (arr.find(item => item == str)) {
//           return true;
//      } return false;
// }
// console.log(inArray("am", "i love tasty food"));

/*4. Дана строка, например, '123456'. Сделайте из нее '214365'.ВОООООООООООООООООООООООПРОООООООСССССССС!!!!!!!!!!!!!!!!!!!!!!!!*/
// let str = '123456';
// arr = str.split("");
// let [a, b, c, d, e, f] = arr;
// arr = [b, a, d, c, f, e].join("");
// console.log(arr);
/****************************************************************/






/************************************************************
ГЛАВА 17 ПРОДВИНУТАЯ РАБОТА С ПОЛЬЗОВАТЕЛЬСКИМИ ФУНКЦИЯМИЯМИ В JS
*************************************************************/





/*1. Дан массив с числами. Выведите последовательно его элементы используя
рекурсию и не используя цикл.*/
// const arr = [5, 3, 6, 1, 2, 15, 23, 1, 2];
// const numbers = arr.map(item => console.log(item));
/********************************************************** */
// const arr = [5, 3, 6, 1, 2, 15, 23, 1, 2];
// function dataOutput(arr) {
//      return function (num) {
//           return parseInt(arr);
//      }
// }
// const numArr = dataOutput([5, 3, 6, 1, 2, 15, 23, 1, 2]);
// console.log(numArr());



/*2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры.
И так, пока сумма не станет однозначным числом (9 и менее).*/
// function sumOfNum(num) {
//      for (let i = 0; i < num; i++) {
//           if (num > 10) {
//            num = num.toString().split("").map(item => parseInt(item)).reduce((accumulator, currentValue) => (accumulator + currentValue));
//           }  
//      } console.log(num);
// }
// sumOfNum(1455415864984564135);




/************************************************************
   ГЛАВА 18 ЗАДАЧИ НА ОТРАБОТКУ ЦИКЛОВ И ФУНКЦИЙ JAVASCRIPT
*************************************************************/




/*1. Выведите с помощью цикла столбец чисел от 1 до 100.*/
// for (let i = 1; i <= 100; i++) {
//      console.log(i);
// }

/*2. Выведите с помощью цикла столбец чисел от 100 до 1.*/
// for (let i = 100; i > 0; i--) {
//      console.log(i);
// }

/*3. Выведите с помощью цикла столбец четных чисел от 1 до 100.*/
// for (let i = 1; i <= 100; i++) {
//      if (i % 2 == 0) {
//           console.log(i);
//      }
// }

/*4. Заполните массив 10-ю иксами с помощью цикла.*/
// let arr = [];
// for (let i = 0; i < 9; i++) {
//      arr[i] = "x"
//      arr.push(arr[i]);
// }
// console.log(arr);

/*5. Заполните массив числами от 1 до 10 с помощью цикла.*/
// let arr = [];
// for (let i = 1; i < 11; i++) {
//      arr.push(i);
// }
// console.log(arr);

/*6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.*/
// let arr = [];
// for (let i = 0; i < 11; i++) {
//      arr.push((Math.random(i).toFixed(2)));
// }
// console.log(arr);

/*7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.*/
// let arr = [];
// for (let i = 1; i < 11; i++) {
//      arr.push(Math.round((Math.random(i)) * 10));
// }
// console.log(arr);

/*8. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.*/
// const arr = [81, 3, 17, 27, 8, 4, 5, 43, 10, 4];
// const arr1 = [];
// for (i = 0; i < arr.length; i++) {
//      if (arr[i] > 0 && arr[i] < 10) {
//           arr1.push(arr[i]);
//      }
// }
// console.log(arr1);

/*9. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.*/
// const arr = [81, 3, 17, 27, 8, 4, 5, 43, 10, 4];
// for (let i in arr) {
//      if (arr[i] == 5) {
//           console.log("profit");
//           break;
//      }
// }

/*10. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.*/
// const arr = [81, 3, 17, 27, 8, 4, 5, 43, 10, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//      sum += arr[i];
// }
// console.log(sum);
/*************************************************************** */
// const arr = [81, 3, 17, 27, 8, 4, 5, 43, 10, 4];
// const newArr = arr.reduce((a, b) => a + b);
// console.log(newArr);


/*11. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.*/
// const arr = [81, 3, 17, 27, 8, 4, 5, 43, 10, 4];
// const newArr = [];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//      newArr.push(Math.pow(arr[i], 2));
//      sum = newArr.reduce((a, b) => a + b);
// }
// console.log(newArr);
// console.log(sum);
// /******************************************************************************/
// let arr = [81, 3, 17, 27, 8, 4, 5, 43, 10, 4].map(item => item * item).reduce((a, b) => a + b);
// console.log(arr);

/*12. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).*/
// let arr = [81, 3, 17, 27, 8, 4, 5, 43, 10, 4];
// let arr1 = arr.reduce((a, b) => a + b) / arr.length;
// console.log(arr1);



/*******************************************************
С ЭТОГО МЕСТА НАЧИНАЮТСЯ ЗАДАЧИ НА РАЗЛИЧНЫЕ ТЕМЫ ПО JS
********************************************************/
/*1. Задача на определение дружественных чисел. Числа являются дружественными, если сумма собственных делителей
(с числом 1, но без самого числа) первого числа равна второму числу и, наоборот, сумма делителей второго числа равна первому.
Примером таких чисел может служить пара 220 и 284. Собственными делителями числа 220 являются следующие числа: 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110.
Сумма этих чисел 284. Собственными делителями числа 284, являются числа 1, 2, 4, 71, 142 и сумма этих чисел равна 220.
Если у нас есть два числа и сумма одного числа равна делителям другого и наоборот, то такая пара чисел называется дружественными.*/
// function isFriendly(num1, num2) {
//      let arr1 = [];
//      let arr2 = [];
//      let sum1 = sumOfDivisors1(num1);
//      let sum2 = sumOfDivisors2(num2);

//      if (sum1 == num2 && sum2 == num1) {
//           console.log(true);
//      } else {
//           console.log(false);
//      }


// }
// isFriendly(220, 284);

// function sumOfDivisors1(num1) {
//      for (let i = 1; i < num1; i++) {
//           if (num1 % i == 0) {
//                arr1.push(i);
//           }
//      }
//      return firstArr = arr1.reduce((a, b) => a + b);
// }
// console.log(sumOfDivisors1(num1));

// function sumOfDivisors2(num2) {
//      for (let j = 1; j < num2; j++) {
//           if (num2 % j == 0) {
//                arr2.push(j);
//           }
//      }
//      return secondArr = arr2.reduce((x, y) => x + y);
// }
// console.log(sumOfDivisors2(num2));

/*2. Пересечение массивов на JavaScript
Пусть у нас даны два массива:
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];
Можно заметить, что числа 2 и 3 присутствуют и в одном, и во втором массиве. Такие общие элементы называются пересечением массивов.
Давайте напишем функцию getInt, которая будет находить пересечение массивов и возвращать пересечение этих массивов.*/
// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4, 5];

/********************************************************************************************************/
/*3.Запоните массив в цикле*/
// const arr = [];
// for (let i = 0; i < 10; i++) {
//      arr[i] = i + 1;
// }
// console.log(arr);
/**************************************************************************************/
// const arr = [];
// for (let i = 0; i < 10; i++) {
//      arr.push(i + 1);
// }
// console.log(arr);

