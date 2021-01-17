/*3. Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках. */

const arrOfLinks = document.querySelectorAll("a");

arrOfLinks.forEach((elem) => {

    elem.addEventListener("click", () => {
        elem.innerHTML = `${elem.innerHTML} (${elem.href})`;
    })
})
