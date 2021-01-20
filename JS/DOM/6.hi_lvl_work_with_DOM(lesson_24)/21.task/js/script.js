/*21.  Дан элемент #elem. Найдите всех потомков этого элемента 
и добавьте им в конец текст '!'.children.*/

const div = document.querySelector("#elem").children;

for (let elem of div) {
    elem.innerHTML += `!`;
};


