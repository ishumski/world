/*30. Дан ol, а внутри него li. Сделайте так,
 чтобы по нажатию на любую li эта li удалялась. */

const ol = document.querySelector("ol");
const li = document.querySelectorAll("li");

li.forEach((elem) => {
    elem.addEventListener("click", (event) => {
        const { currentTarget } = event;
        currentTarget.remove();
        console.log(currentTarget);
    })
})