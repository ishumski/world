/*14.  Дан элемент ul, а в нем li #elem. 
Вставьте перед элементом #elem новую li с текстом '!!!'. */

const ul = document.querySelector("ul");
const li = document.querySelector("#elem");

const beforLi = document.createElement("li");
beforLi.innerHTML = "!!!";

li.before(beforLi);