/*6. Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, 
но только по первому нажатию. Повторное нажатие на инпут не должно вызывать реакции. */

const input = document.querySelectorAll("input");

function showAlertOfValue(event) {
    const { value } = event.target;
    alert(value);
    this.removeEventListener("click", showAlertOfValue);
}

input.forEach((elem) => {
    elem.addEventListener("click", showAlertOfValue);

})
