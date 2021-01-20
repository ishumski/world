/*9.  Дан элемент #elem. По клику на него 
выведите название его тега в нижнем регистре. */

const div = document.getElementById("elem");

div.addEventListener("click", () => {
    const tagToLowerCase = div.tagName.toLowerCase();

    alert(tagToLowerCase);
});