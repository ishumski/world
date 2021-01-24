/*14. Дан элемент #elem с вертикальной полосой прокрутки. 
По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента.*/

const p = document.querySelector("#elem");
const button = document.querySelector("button");

/*1. способ*/
button.addEventListener("click", () => {

    const scrollHeight = p.scrollHeight;
    const bottomScroll = p.scrollTo(0, `${scrollHeight - 100}`);
})

/*2. способ*/
button.addEventListener("click", () => {

    const scrollHeight = p.scrollHeight;
    const bottomScroll = scrollHeight - 100;
    p.scrollTop = bottomScroll;
})