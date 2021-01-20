/*8. Дан элемент #elem. По клику на него выведите название его тега.*/

const div = document.getElementById("elem");

div.addEventListener("click", () => {
    const tagName = div.tagName;
    alert(tagName);
});


