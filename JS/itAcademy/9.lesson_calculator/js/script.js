const buttons = document.querySelectorAll("button");//объявляем переменную, чтобы получить доступ ко всем кнопкам
const screen = document.querySelector(".calculator__screen");//объявляем переменную, чтобы получить доступ к главному нижнему экрану
const subScreen = document.querySelector(".calculator__subscreen");//объявляем переменную, чтобы получить доступ к верхнему маленькому экрану
const MAX_SCREEN_LENGTH = 16;//объявляем переменную для максимально вводимого числа (количество символов на экранах)
const CLEAR_VALUE = "C";//переменная очистки экрвнов
const DOT_OPERATOR = ".";//переменная точки
const PLUS_OPERATOR = "+";//объявляем переменную оператора +
const MINUS_OPERATOR = "-";//объявляем переменную оператора -
const MULTIPLY_OPERATOR = "*";// объявляем переменную оператора *
const DIVISION_OPERATOR = "/";// объявляем переменную оператора /
const EQUALS_OPERATOR = "=";//объявляем переменную оператора =
const OPERATOR = [PLUS_OPERATOR, MINUS_OPERATOR, MULTIPLY_OPERATOR, DIVISION_OPERATOR];//массив херпойми зачем!




function addTextToScreen(text) {
    screen.textContent += text;
    subScreen.textContent += text;
}

let left;// объявляем переменную уже введенных цифр
let right;// объявляем переменную последнего введенного числа
let lastOperator;//объявляем перемнную для арифметических знаков(последний оператор)



buttons.forEach(button => {//запускаем метод для каждой нашей кнопоки (button == element, так что не пугайся). как обычный arr.forEach(elem=>{})

    //для каждой нашей кнопки (button == element), запускаем событие: при нажатии определенной кнопки что-то будет происходить
    button.addEventListener("click", () => {
        //у нас будет 3 проверки высшего уровня: 
        //1) проверка экрана на количество вводимых символов
        //2) проверка нажата ли кнопка с атрибутом значения(value)
        //3) проверка нажата ли кнопка с атрибутом оператор(operator)

        if (screen.textContent.length > MAX_SCREEN_LENGTH) {//проверка экрана на количество вводимых символов, если оно больше 16, то вернуть введенные символы
            return;
        }

        const buttonValue = button.getAttribute("value");//т.к. мы постоянно обращаемся к кнопке для возврата её значения, выводим данный метод в переменную
        const isLastOperator = OPERATOR.includes(subScreen.textContent.slice(-1));

        if (buttonValue) {//проверка кнопки, если мы нажимаем на кнопку с атрибутом value

            if (buttonValue === CLEAR_VALUE) {//проверка, если нажата кнопка очистки экранов
                screen.textContent = "";//очищаем главный экран
                subScreen.textContent = "";//очищаем второстепенный экран
                left = undefined;// очищаем переменную чисел, котрые были введены
                right = undefined;// очищаем переменную введенного последнего числа
                lastOperator = undefined;//очищаем переменную последнего введенного оператора(математического знака)
                return;
            }
            if (lastOperator === EQUALS_OPERATOR) {//проверка последнего нажатого оператора, идентичен ли он "="
                screen.textContent = buttonValue;// если да, то выводим итоговое значение на экран
                subScreen.textContent += buttonValue;
                lastOperator = undefined;
                return;
            }

            if (left !== undefined && isLastOperator) {
                screen.textContent = buttonValue;
                subScreen.textContent += buttonValue;
                return;
            }

            addTextToScreen(buttonValue);

        }

        const buttonOperator = button.getAttribute("operator");//т.к. мы постоянно обращаемся к значению кнопки, выводим данный метод в переменную

        if (buttonOperator) {//проверка кнопки, если мы нажимаем на кнопку с атрибутом operator
            if (buttonOperator === DOT_OPERATOR) {//проверка, если нажата кнопка с атрибутом (operator), со значением  "."

                if (!screen.textContent.includes(DOT_OPERATOR) &&// если главный экран не содержит строку со значением DOT_OPERATOR = "."
                    screen.textContent.length !== 0) {// и если длина строки экрана не равна 0,
                    addTextToScreen(buttonOperator);//то мы суммируем числовое значение с нашим DOT_OPERATOR, вызвав функцию addTextToScreen 

                }
                return;

            }

            if (isLastOperator || subScreen.textContent.length === 0 || (left === undefined && buttonOperator === EQUALS_OPERATOR)) {

                return;
            }

            if (left !== undefined) {
                right = +screen.textContent;
                switch (lastOperator) {
                    case PLUS_OPERATOR:
                        screen.textContent = left + right;
                        break;
                    case MINUS_OPERATOR:
                        screen.textContent = left - right;
                        break;
                    case MULTIPLY_OPERATOR:
                        screen.textContent = left * right;
                        break;
                    case DIVISION_OPERATOR:
                        screen.textContent = left / right;
                        break;

                    default:
                        return;
                }


                if (buttonOperator === EQUALS_OPERATOR || (buttonOperator === MULTIPLY_OPERATOR || isLastOperator === DIVISION_OPERATOR)) {
                    subScreen.textContent = "";
                    DOT_OPERATOR = "";
                    left = undefined;
                    right = undefined;
                    lastOperator = buttonOperator;
                    return
                }
            }
            left = +screen.textContent;
            lastOperator = buttonOperator;
            subScreen.textContent += buttonOperator;
        }
    });
});

