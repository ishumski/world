const rootDiv = document.getElementsByClassName("root")[0];
const divs = document.getElementsByTagName("div");
const child = document.getElementById("child");
const divInRoot = document.querySelector(".root > div");
const divs2 = document.querySelectorAll("div");
console.log(rootDiv);
console.log(divs2);
console.log(divs);
console.log(child);
console.log(divInRoot);

let button = document.getElementById("btn");
button.addEventListener("click", () => {
    alert("clicked");
});

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "blue";
})

const paragraph = document.createElement("p");
rootDiv.appendChild(paragraph);

const h1 = document.createElement("h1");
rootDiv.insertBefore(h1, paragraph);

h1.textContent = "Heder 1";


/****************Cоздание элементов************************/


const div = document.createElement("div");//формально создаём див в html
div.className = "msg";//присваиваем класс нашему div
div.innerHTML = "Важная информация";//присваиваем текстовое значение
document.body.append(div);//добавляем div class="msg" "Важная информация" в наш body

const list = document.querySelector("ul");
list.before("before");
list.after("after");

const li_1 = document.createElement("li");
li_1.innerHTML = "first element";
list.prepend(li_1);

const li_2 = document.createElement("li");
li_2.innerHTML = "last element";
list.append(li_2);