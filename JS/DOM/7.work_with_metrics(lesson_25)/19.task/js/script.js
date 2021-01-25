/*19. По нажатию на кнопку прокрутите страницу до самого низа. */

const button = document.querySelector("button");

button.addEventListener("click", () => {

    window.scrollTo(0, document.body.clientHeight);

})

