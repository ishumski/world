/*2. Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст. */

/*1. способ */
const arrOfLinks = document.getElementsByTagName("a");
console.log(arrOfLinks);

for (let element = 0; element < arrOfLinks.length; element++) {

    arrOfLinks[element].addEventListener("click", () => {
        let {title} = arrOfLinks[element];
        console.log(title);
    });
}; 

/*2. способ */
const arrOfLinks = document.querySelectorAll("a");

arrOfLinks.forEach(element => {
    element.addEventListener("click", () => {
        let { title } = element;
        console.log(title);
    });
});