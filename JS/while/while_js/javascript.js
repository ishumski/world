// var price = 20;
// var discount = 25;
// var total = price - (discount/100);
// document.write(total);

// var shekel = 108;
// while (shekel > 35){
//     document.write ('Даю ниггам больше шекелей, мазафакеры<br>');
//     shekel = shekel - 50;
// }
// document.write ('Шекелей усё еще мало, но ты продолжай');

// var shekel = 15;
// while (shekel < 35){
//     document.write ('Дайте мне больше шекелей, мазафакеры<br>');
//     shekel = shekel + 1;
// }
// document.write ('Шекелей усё еще мало, но ты продолжай');

// let admin;
// let name = "john";
// admin = name ;
// alert(admin);


// let age = prompt('ваш возраст, мадмуазель и скажите молодому человеку, чтобы он не подглядывал');

// if (age <= 12){
//     document.write('ты ребенок-жеребенок');
// }
// else if (age >= 13 && age <=17){
//     document.write('пора за собой пылесосом песок убирать');
// }
// else if (age >= 18 && age <=30){
//     document.write('иди работай');
// }
// else if (age >=31 && age <=45){
//     document.write ('вы ведьма в полном расцвете сил, берите вашу метлу и на дело');
// }
// else{
//     document.write ('пора тусить на Мальдивах');
// }

function checkIsOdd(number) {
    if (number % 2 === 0) {
        return true;
    }

    return false;
}

const number = 2;
const result = checkIsOdd(number);

document.write(result);

