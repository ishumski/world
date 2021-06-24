// let name = prompt ('What is your name?');
// if (name == 'Ilia'){
//     alert ('Hello my litle bitch');
// }
// else{
// alert (`fuck u, ${name}`);
// }



// let officialName = prompt('Какое «официальное» название JavaScript?');
// if (officialName =='ECMAScript') {
//     alert ('Верно!');
// }
// else {
//     alert ('Ты не знаешь? ECMAScript!');
// }

// let money = prompt('Давай узнаем, что ты будешь есть по количеству твоих денях:', '');
// let eat = (money <= 5) ? 'Сухарики':
// (money >= 6 && money <= 10) ? 'Чипсеки и пивасик':
// (money >= 11 && money <= 20) ? 'Бутики с икрой и плодово-ягодное':
// (money <= 50) ? 'Пицца зажиточная':
// 'Неплохой банкет на одну персону';
// alert (eat);

// let password = prompt("Кто там?", "");
// if (password == "Админ") {
//     let pass = prompt("Пароль", "");
//     if (pass == "Я главный") {
//         alert("Здравтствуйте!");
//     } else if (pass == " " || pass == null) {
//         alert("Отменено");
//     } else {
//         alert("Неверный пароль!");
//     }
// } else if (password == " " || password == null) {
//     alert("Отменено");
// } else {
//     alert("Я вас не знаю");
// }

// let name = prompt ('Как твое имя?', '');
// if (name == 'Ilia'){
//     alert ('Hello, Ilia! That is my boy!!!!!!!!!!')
// } else {
//     alert (`Hello, ${name}, I dont know who u r`);
// }



// let x = prompt('Укажите число:', '');
// switch (x) {
//     case '1': alert('this is one');
//         break;
//     case '2': alert('this is two');
//         break;
//     case '3': alert('this is three');
//         break;
//     case '4': alert('this is four');
//         break;
//     case '5': alert('this is five');
//         break;
//     default: alert('I dont know this number')
// }

// *****************морской бой*****************
let location1 = Math.floor(Math.random() * 5); //переменные локации корабля
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess; //переменная выстрела undefined
let hits = 0;
let guesses = 0;
let isSunk = false; //пока корабль не пототоплен faulse иначе true
while (isSunk == false) {
    guess = prompt('Вы готовы выстрелить? (введи координаты 0-6):', '');
    if (guess < 0 || guess > 6) {
        alert('Введи нормальную координату!');
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert('Молодец ты победил!')
            }
        } else {
            alert('Мимо!');
        }
    }
} 
let status = 'Ты выстрелил ' + guesses + ' раз, ' + 'твоя точность: ' + (3 / guesses)+ '!';
alert(status);
