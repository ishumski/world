/*Работа с элементами страницы в JavaScript*/

/*Работа с innerHTML, outerHTML*/
//функция срабатывает при клике на кнопку
function func() {
    const elem = document.getElementById("test");//получаем абзац по ID
    elem.innerHTML = "<b>New text</b>";// записываем новое значение в наш тег <p>
}

function func1() {
    let elem1 = document.getElementById("test1");
    elem1.outerHTML = '<b>!</b>';// перезаписывает сам тег и текст в нём
}
/*Работа с getElementsByTagName*/


