/*12. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, 
чтобы каждый элемент стоял в своем li. */

const ul = document.querySelector("ul");

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((elem) => {
    const li = document.createElement("li");
    li.innerHTML = elem;
    ul.appendChild(li);
});
