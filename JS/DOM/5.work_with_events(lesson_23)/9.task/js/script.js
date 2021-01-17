/*9. Даны дивы. По первому нажатию на каждый див он красится красным фоном,
по второму красится обратно и так далее каждый клик происходит чередование фона. 
Сделайте так, чтобы было две функции: одна красит в красный цвет, 
другая в зеленый и они сменяли друг друга через removeEventListener. */

const div = document.querySelectorAll("div");

div.forEach((elem) => {
    elem.addEventListener("click", addRed);
});

function addRed() {
    this.style.backgroundColor = "red";
    this.removeEventListener("click", addRed);
    this.addEventListener("click", deleteRed);
}

function deleteRed() {
    this.style.backgroundColor = "green";
    this.removeEventListener("click", deleteRed);
    this.addEventListener("click", addRed);
    
}


