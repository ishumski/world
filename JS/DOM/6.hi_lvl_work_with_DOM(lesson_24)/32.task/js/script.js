/*32.Дан массив. Создайте ul через createElement, 
затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, 
затем вставьте эту ul в конец body. */
const body = document.body;
const ul = document.createElement("ul");

const arr = [1, 2, 3, 4, 5];

arr.forEach((elem) => {
    const li = document.createElement("li");
    li.innerHTML = elem;
    ul.appendChild(li);
});
body.appendChild(ul);
