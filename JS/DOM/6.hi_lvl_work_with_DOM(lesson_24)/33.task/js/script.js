/*33.Дан инпут. Рядом с ним находится кнопочка "+". 
По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут. */
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const newInput = document.createElement("input");
    newInput.style.display = "block";
    input.parentElement.appendChild(newInput);
})