/*20. По нажатию на кнопку прокрутите страницу на 400px от текущего положения. */
const button = document.querySelector("button");

button.addEventListener("click", () => {
    window.scrollBy(0, 400);
    console.log(window.pageYOffset);
})