// const drinks = ['виски', 'водка', 'текила', 'ром','вино','шампанское','ягер','кофе','скотч','коньяк'];
// for (let i = 0; i < drinks.length; i++){
//     console.log ('В нашем баре есть ' + drinks[i] + '!!!');
// }

// for (let x = 3; x < 10000; x *= 3) {
//     console.log(x);
// }


// let x = 3;
// while (x < 10000){
// console.log (x)
// x *= 3;
// }

// const car = '10';
// const boy = '5';
// console.log (+car * +boy);

let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );