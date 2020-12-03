function numberPower() {

    let firstInp = document.getElementById("firstInp");
    let secondInp = document.getElementById("secondInp");
    if (isNaN(firstInp.value)) {
        alert("Wrong data! Please enter the number");
    }
    secondInp.value = Math.pow(firstInp.value, 2);
}
