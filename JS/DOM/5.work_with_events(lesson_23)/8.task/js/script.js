/*8. Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое 
на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.*/

const input = document.querySelectorAll("input");

function isTrueLenght() {
    const correctLength = this.dataset.length;
    const inputDataLength = this.value.length;

    if (correctLength >= inputDataLength) {
        this.style.border = "3px solid green";
    } else {
        this.style.border = "3px solid red";
    }
}

input.forEach((elem) => {
    elem.addEventListener("blur", isTrueLenght)
})