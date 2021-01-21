/*31. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут. */

const input = document.querySelector("input");
const div = document.querySelector("div");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    
    const cloneInput = input.cloneNode(true);
    div.append(cloneInput);
});