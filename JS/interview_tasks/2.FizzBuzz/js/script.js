/*FizzBuzz - написать ф-цию FizzBuzz(num), которая принимает число в качестве параметра
выводим в консоль значения этих чисел; 
если число делится на 3 - выводим Fizz
если на 5 - выводим Buzz
если и на 3 и на 5 - выводим FizzBuzz 
 */

function FizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else { 
            console.log(i); 
        }
    }
}

FizzBuzz(100);