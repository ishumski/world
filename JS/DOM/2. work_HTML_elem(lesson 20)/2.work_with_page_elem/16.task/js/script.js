/*1.11 Задача. Дан input, привводе данных в него, данные дублируются рядом */

const input = document.querySelector("input");
const span = document.querySelector("span");
function inputText() {
    let inputVal = input.value;
    span.innerHTML = inputVal;
}


