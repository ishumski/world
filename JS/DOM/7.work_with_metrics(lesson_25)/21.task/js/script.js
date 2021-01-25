/*21. По нажатию на кнопку проверьте, прокручена ли страница до самого низа. 
Если это так - прокрутите ее в положение 100px от верхнего края */

const button = document.querySelector("button");

button.addEventListener("click", () => {

    if (document.body.scrollHeight == document.body.clientHeight) {
        window.scrollTo(0, 100);
    }
})
console.log(document.body.scrollHeight)
console.log(document.body.clientHeight)