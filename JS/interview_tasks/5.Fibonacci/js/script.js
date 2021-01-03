/*5. Числа Фибоначчи - каждое последующее число равно сумме двух предыдущих*/

/*1 способ через цикл */
function fibonacci(num) {
    const result = [0, 1];//задаём первоначальные цифры
    for (let i = 2; i <= num; i++) {// итерацию цикла начинаем с индекса 2
        const prevNum1 = result[i - 1];//инициализируем первое предыдущее число
        const prevNum2 = result[i - 2];//инициализируем второе предыдущее число
        result.push(prevNum1 + prevNum2);//добавляем сумму двух предыдущих чисел в массив
    }
    return result;// вызываем массив
}
console.log(fibonacci(10));//пишем позицию 10 - это позиция

/*2 способ */
function fibonacci1(num) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fibonacci1(10));

/*3 Рекурсия */
function fibonacci2(num) {
    if (num < 2) {
        return num;
    }    
    return fibonacci2(num - 1) + fibonacci2(num - 2);
}

