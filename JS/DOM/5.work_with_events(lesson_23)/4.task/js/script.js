/*4. Дополните предыдущую задачу: после первого наведению на ссылку 
следует отвязать от нее событие, которое добавляет href в конец текста. */

/*1. для нескольких ссылок*/
const arrOfLinks = document.querySelectorAll("a");

function addedLinks() {
    this.innerHTML = `${this.innerHTML + this.href}`;
    this.removeEventListener("click", addedLinks);
}

arrOfLinks.forEach(element => {

    element.addEventListener("click", addedLinks);
});

/*2. для одной ссылки*/
const link = document.querySelector("a");

function addedLinks(){
    link.innerHTML = `${link.innerHTML + link.href}`;
    link.removeEventListener("click", addedLinks);
}

link.addEventListener("click", addedLinks);
