/*1.4. ЗАДАЧА. Повторите страницу по данному по образцу:
Есть два поля, между ними знак плюс, при нажатии на кнопку после равно
показывает результат*/

const firstValue = document.getElementById("firstValue");
const secondValue = document.getElementById("secondValue");
const result = document.getElementById("result");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    if (Number.isNaN(firstValue) || Number.isNaN(secondValue)) {
        return result.innerHTML = " Please, enter numbers!";
    }
    return result.innerHTML = +firstValue.value + +secondValue.value;
})

