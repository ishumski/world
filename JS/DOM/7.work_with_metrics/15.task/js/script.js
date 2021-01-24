/*15. Дана страница с вертикальной полосой прокрутки. 
По нажатию на кнопку узнайте на сколько страница прокручена по вертикали. */

const p = document.querySelector("#elem");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const heightScroll = window.pageYOffset.toFixed(2);
    console.log(heightScroll);
})