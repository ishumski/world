/*11.  Дан ol. Вставьте ему в конец li с текстом 'пункт'. */

const ol = document.querySelector("ol");

const li = document.createElement("li");
li.innerHTML = 'пункт';

ol.appendChild(li);