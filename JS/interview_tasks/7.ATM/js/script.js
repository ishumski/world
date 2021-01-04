/*7. Валюта. Получить объект ключи - валюты, по которым производились операции
значение - массив из двух элементов:  первый элемент сумма всех операций по buy,
второй элемент - сумма всех операций sell

const output = {
    usd: [10000, 30000],
    gbp: [9000, 0],
    eur: [0, 7000],
    uah: [10000, 0]
}*/

const input = [
    ["usd", "buy", 10000],
    ["usd", "sell", 5000],
    ["gbp", "buy", 9000],
    ["eur", "sell", 7000],
    ["uah", "buy", 10000],
    ["usd", "sell", 25000]
];

/*1. способ с помощью input.forEach и деструктурирующего присваивания*/

//т.к. нам надо сконпоновать валюты и операции по ним, то мы
//создаём пустой объект, в который потом будем помещать валюту:[покупкаб продажа]
let result = {};

input.forEach((item) => {//проходим по всему массиву с помощью метода .forEach()

    let [currency, type, amount] = item;//для каждого элемента применяем деструктурирующее присваивание - каждое значение записываем в переменную
    if (!result[currency]) {//далее проверяем нащ объект - если в нём еще нет ключа, то добавляем его
        result[currency] = [0, 0];// например uah: [0,0];
    }

    //с помощью тернарного оператора проверяем - если type === "buy"(type = input[item][1]), то
    //записываем amount в 0 элемент, иначе в 1
    result[currency][type === "buy" ? 0 : 1] += amount;
})
console.log(result);


/*2. способ с помощью reduce */

const input1 = [
    ["usd", "buy", 10000],
    ["usd", "sell", 5000],
    ["gbp", "buy", 9000],
    ["eur", "sell", 7000],
    ["uah", "buy", 10000],
    ["usd", "sell", 25000]
];


//Привет, пишет тебе Илья из проглого. Решение этой задачи проще некуда. Суть вот в чём:
//acc - это наш пустой массив в строке 60, куда мы будем всё складывать, а curr - это элементы массива input1 (проще говоря item, как в forEach)
//Я ЖДУ С НЕТЕРПЕНИЕМ, КОГДА У ТЕБЯ ВСЁ ПОЛУЧИТСЯ!))

let result1 = input1.reduce((acc, curr) => {
    acc[curr[0]] = acc[curr[0]] || [0, 0];
    acc[curr[0]][curr[1] === "buy" ? 0 : 1] += curr[2];
    return acc;

}, {});

console.log(result1);













// const output = {};

// for (let i = 0; i < input.length; i++) {
//     const outputValue = [0, 0];
//     let inputElem = input[i];

//     if (!output[inputElem[0]]) {
//         output[inputElem[0]] = outputValue;
//     }

//     inputElem[1] === "buy" ? outputValue[0] += inputElem[2] : outputValue[1] += inputElem[2];
// }
// console.log(output);