const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".calculator__screen");
const subScreen = document.querySelector(".calculator__subscreen");
const MAX_SCREEN_LENGTH = 16;
const EMPTY_VALUE = "";
const POINT_ELEMENT = ".";
//
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (screen.textContent.length <= MAX_SCREEN_LENGTH) {
            screen.textContent += button.getAttribute("value");
            subScreen.textContent += button.getAttribute("value");
        }

    })
})

//кнопка очистки экранов
const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("click", () => {
    screen.textContent = EMPTY_VALUE;
    subScreen.textContent = EMPTY_VALUE;
})

//реализация кнопки "." 
const pointBtn = document.getElementById("point-btn");

pointBtn.addEventListener("click", () => {

    if (screen.textContent == POINT_ELEMENT) {
        screen.textContent += pointBtn.value;
        subScreen.textContent += pointBtn.value;
    }
    pointBtn.value = EMPTY_VALUE;


})


const percentBtn = document.getElementById("percent-btn");
percentBtn.addEventListener("click", () => {


})
