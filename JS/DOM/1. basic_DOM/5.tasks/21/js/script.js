function swapText() {
    let firstInp = document.getElementById("firstInp");
    let secondInp = document.getElementById("secondInp");
    let fiv = firstInp.value;
    let siv = secondInp.value;
    firstInp.value = siv;
    secondInp.value = fiv;
}