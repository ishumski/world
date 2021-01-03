/*6. Есть массив, получить массив уникальных класснэймов, вначале идут самые частоиспользуекмые, в конце - малоиспользуемые 
["link", "menu", "menu-item", "header", "footer"]
*/

let className = ["header", "menu", "menu-item", "menu-item", "footer", "menu", "link", "link", "link", "link"];

function namesOfClass(arr) {
    let classNameCount = {};
    for (let i = 0; i < arr.length; i++) {
        if (classNameCount[arr[i]]) {//если в объекте classNameCount есть элемент массива className ([arr[i]])
            classNameCount[arr[i]] += 1;//то мы запускаем счетчик количества этого элемента
        } else {
            classNameCount[arr[i]] = 1;// если нет, то мы создаем новоес свойство и присваиваем значение 1;
        }
    }
    let result = Object.keys(classNameCount).sort((a, b) => classNameCount[b] - classNameCount[a]);
    return result;
}
console.log(namesOfClass(className));