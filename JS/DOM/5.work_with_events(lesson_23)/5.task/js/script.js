/*5.  Привяжите всем инпутам следующее событие - по потери фокуса 
каждый инпут выводит свое value в абзац с id="test" */

/*1. способ */
const input = document.querySelectorAll("input");
const p = document.getElementById("test");

function showInputValue(){
    p.innerHTML += `${this.value}, `;
}

input.forEach((elem) => {
    elem.addEventListener("blur", showInputValue);
})

/*2. способ */
const input = document.querySelectorAll("input");
const p = document.getElementById("test");

input.forEach((elem) => {
    elem.addEventListener("blur", (event) => {
        const {value} = event.target;
        p.innerHTML += `<p>${value}</p>`;
    });
})
