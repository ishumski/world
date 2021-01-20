/*13. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, 
чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к вставляемым li 
было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.*/

const ul = document.querySelector("ul");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((elem) => {
    const li = document.createElement("li");
    li.innerHTML = elem;
    ul.appendChild(li);
    li.addEventListener("click", (event) => {
        const { innerHTML } = event.target;
        alert(innerHTML);
    })
});