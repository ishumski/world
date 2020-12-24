/*1.12. Задача. Даны три ссылки, при нажатии на кнопку, возле этих ссылок 
появляются новые ссылки на сайты*/
const a1 = document.querySelector("a:nth-child(1)");
const a2 = document.querySelector("a:nth-child(3)");
const a3 = document.querySelector("a:nth-child(5)");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    a1.innerHTML += "(http://google.ru)";
    a2.innerHTML += "(http://tut.by)";
    a3.innerHTML += "(http://yandex.ru)";
})
