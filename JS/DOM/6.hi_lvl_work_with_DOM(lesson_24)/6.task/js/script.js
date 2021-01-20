/*6.  Дан элемент #elem. Выведите последовательно алертом его классы.*/

const div = document.querySelector("#elem");

div.classList.forEach(element => {
    console.log(element);
});
