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
const DEL_VALUE = "DEL";
const MULTIPLIER = 10000000000000000;
const OPERATOR = [PLUS_OPERATOR, MINUS_OPERATOR, MULTIPLY_OPERATOR, DIVISION_OPERATOR];//массив для хранения наших операторов, чтобы мы могли вести поиск

/*Когда мы нажимаем на кнопки buttonValue = button.getAttribute("value"), мы получаем значение этих кпопок в виде чисел.
Для того, чтобы все наши нажатые числа выводились на гланый и верхний экраны мы прописываем следующие строки ниже (1, 2).
Они нам говорят, что когда ты нажмешь на числовую кнопку, а затем еще на одну и т.д., что значения будут суммироваться
посредством конкатенации строк и будут выводиться на экран.
Т.к. записи (1, 2) встречались в коде часто, а, возможно встретяться еще, то мы выводим их в функцию addTextToScreen с параметром (text).
В (text) мы будем передавать переменную или значение, которое нам необходимо будет выводить таким же образом как и приведено выше.*/
function addTextToScreen(text) {
    screen.textContent += text;//      1. screen.textContent += buttonValue 
    subScreen.textContent += text;//   2. subScreen.textContent += buttonValue
}

function deleteLastFromScreens() {
    subScreen.textContent = subScreen.textContent.slice(0, subScreen.textContent.length - 1);
    screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
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
            return;//останавливыем выполнение нашей ф-ции, присваивается значение undefined
        }

        const buttonValue = button.getAttribute("value");//т.к. мы постоянно обращаемся к кнопке для возврата её значения, выводим данный метод в переменную
        const isLastOperator = OPERATOR.includes(subScreen.textContent.slice(-1));//является ли последний сивол в строке оператором из массива

        if (buttonValue) {//проверка кнопки, если мы нажимаем на кнопку с атрибутом value

            if (buttonValue === CLEAR_VALUE) {//проверка, если нажата кнопка очистки экранов
                screen.textContent = "";//очищаем главный экран
                subScreen.textContent = "";//очищаем второстепенный экран
                left = undefined;// очищаем переменную чисел, котрые были введены
                right = undefined;// очищаем переменную введенного последнего числа
                lastOperator = undefined;//очищаем переменную последнего введенного оператора(математического знака)
                return;
            }

            if (buttonValue === DEL_VALUE) {

                if (!isLastOperator && lastOperator !== EQUALS_OPERATOR) {
                    deleteLastFromScreens();
                }

                return;
            }

            if (lastOperator === EQUALS_OPERATOR) {//проверка последнего нажатого оператора, идентичен ли он "=", возращает boolean
                screen.textContent = buttonValue;// выводим на гл. экран значение нажатой кнопки(наши цифры)
                subScreen.textContent += buttonValue;//выводим на верхний экран цифры(значени value)
                lastOperator = undefined;// далее присваиваем оператору EQUALS_OPERATOR значение undefined, чтобы "=" не выводилось на экран
                return;
            }

            if (left !== undefined && isLastOperator) {//если переменной уже введенных цифр левой стороны (left) было присвоено значение и если есть оператор isLastOperator
                screen.textContent = buttonValue;// выводим на гл. экран значение нажатой кнопки(наши цифры)
                subScreen.textContent += buttonValue;// выводим на верхний экран и цифры(значени value) и оператор
                return;
            }

            if (screen.textContent.length > MAX_SCREEN_LENGTH) {//проверка экрана на количество вводимых символов, если оно больше 16, то вернуть введенные символы
                return;//останавливыем выполнение нашей ф-ции, присваивается значение undefined
            }

            addTextToScreen(buttonValue);//вызываем нашу функцию, которая добавляет всё на экран(мояснения см. выше)
        }

        const buttonOperator = button.getAttribute("operator");//т.к. мы постоянно обращаемся к значению атрибута operator, выводим данный метод в переменную

        if (buttonOperator) {//проверка кнопки, если мы нажимаем на кнопку с атрибутом "operator"
            if (buttonOperator === DOT_OPERATOR) {//проверка, если нажата кнопка с атрибутом (operator), со значением  "."

                if (!screen.textContent.includes(DOT_OPERATOR) &&// если главный экран не содержит строку со значением DOT_OPERATOR = "."
                    screen.textContent.length !== 0) {// и если длина строки экрана не равна 0,
                    addTextToScreen(buttonOperator);//то мы суммируем числовое значение с нашим DOT_OPERATOR, вызвав функцию addTextToScreen 
                }
                return;
            }
            if (subScreen.textContent.slice(-1) === DOT_OPERATOR) {
                deleteLastFromScreens();
            }

            /*Если нажата кнопка арифметич. оператора (isLastOperator) || длина введенных символов на верхнем экране равно 0 ||
            (значение для переменной уже введенных цифр не было присвоено && нажатая кнопка оператора идентична "=")*/
            if (isLastOperator || subScreen.textContent.length === 0 || (left === undefined && buttonOperator === EQUALS_OPERATOR)) {
                return; //останавливыем выполнение нашей ф-ции, присваивается значение undefined
            }

            if (left !== undefined) {// если переменной уже введенных цифр было присвоено значение
                right = (+screen.textContent) * MULTIPLIER;//переменной последнего введенного числа присваиваем значение, преобразованное к числу посредством унарного плюса
                left *= MULTIPLIER;
                let result;

                switch (lastOperator) {//указываем переменную арифметических знаков(последний оператор), сейчас его значение undefined
                    case PLUS_OPERATOR://сравниваем lastOperator, если он равен PLUS_OPERATOR выполняем операцию сложения
                        result = left + right;
                        break;
                    case MINUS_OPERATOR://сравниваем lastOperator, если он равен MINUS_OPERATOR выполняем операцию вычитания
                        result = left - right;
                        break;
                    case MULTIPLY_OPERATOR://сравниваем lastOperator, если он равен MULTIPLY_OPERATOR выполняем операцию умножения
                        result = (left * right) / MULTIPLIER;
                        break;
                    case DIVISION_OPERATOR://сравниваем lastOperator, если он равен DIVISION_OPERATOR выполняем операцию деления
                        result = (left / right) * MULTIPLIER;
                        break;
                    default:
                        return;
                }
                screen.textContent = result / MULTIPLIER;

                if (buttonOperator === EQUALS_OPERATOR) {//если buttonOperator идентична EQUALS_OPERATOR производим чистку
                    const liElement = document.createElement("li");
                    const orderList = document.querySelector("ol");

                    orderList.appendChild(liElement);
                    liElement.textContent = `${subScreen.textContent} = ${screen.textContent}`;

                    subScreen.textContent = "";

                    left = undefined;// очищаем переменные
                    right = undefined;// очищаем переменные
                    lastOperator = buttonOperator;// последний оператор является EQUALS_OPERATOR

                    return;
                }
            }
            left = +screen.textContent;// переменной уже введенных чисел присваиваем значение, преобразованное к числу посредством унарного плюса
            lastOperator = buttonOperator;//последнему оператору присваиваем значение нажатого оператора
            subScreen.textContent += buttonOperator;// выводим на верхний экран значение нашего нажатого оператора
        }
    });
});

