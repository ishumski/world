/*10.  Даны элементы с классом www. Добавьте каждому элементу 
в конец название его тега в нижнем регистре.*/

const div = document.querySelectorAll(".www");
console.log(div);

div.forEach((elem) => {
    const { tagName } = elem;
    elem.innerHTML = `${elem.innerHTML} ${tagName.toLowerCase()}`
});