const amount = document.querySelector("#amount");
const months = document.querySelector("#months");
const button = document.querySelector("button[type='submit']");
const p = document.querySelector("p");

const MIN_AMOUNT_VALUE = 100;
const MAX_AMOUNT_VALUE = 100000;

function depositCounter(sum, term) {

    const INTEREST_RATE = 20;
    const MONTH_IN_YEAR = 12;
    let currentRate = (INTEREST_RATE / MONTH_IN_YEAR) * term;
    let income = (currentRate * sum) / 100;
    let incomeRounded = Math.round(income * 100) / 100;
    return incomeRounded;

}

button.addEventListener("click", (event) => {
    event.preventDefault();
    if (!amount.value) {
        return;
    }
    if (amount.value < MIN_AMOUNT_VALUE || amount.value > MAX_AMOUNT_VALUE) {
        return;
    }

    p.innerHTML = `${p.innerHTML}: ${depositCounter(amount.value, months.value)}`;
});




// Math.round(num * 100) / 100 округление