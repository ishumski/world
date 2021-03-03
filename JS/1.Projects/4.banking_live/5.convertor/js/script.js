const container = document.querySelector(".container");

const currencies = [
    {
        Cur_Abbreviation: "USD",
        Cur_ID: 145,
        Cur_Name: "Доллар США",
        Cur_OfficialRate: 2.6019,
        Cur_Scale: 1,
        Date: "2021-03-02T00:00:00",
    },
    {
        Cur_Abbreviation: "EUR",
        Cur_ID: 292,
        Cur_Name: "Евро",
        Cur_OfficialRate: 3.1407,
        Cur_Scale: 1,
        Date: "2021-03-02T00:00:00",
    },
    {
        Cur_Abbreviation: "PLN",
        Cur_ID: 293,
        Cur_Name: "Злотых",
        Cur_OfficialRate: 6.9255,
        Cur_Scale: 10,
        Date: "2021-03-02T00:00:00",
    },
    {
        Cur_Abbreviation: "RUB",
        Cur_ID: 298,
        Cur_Name: "Российских рублей",
        Cur_OfficialRate: 3.5146,
        Cur_Scale: 100,
        Date: "2021-03-02T00:00:00",
    },
    {
        Cur_Abbreviation: "GBP",
        Cur_ID: 143,
        Cur_Name: "Фунт стерлингов",
        Cur_OfficialRate: 3.6289,
        Cur_Scale: 1,
        Date: "2021-03-02T00:00:00",
    },
]

container.innerHTML = `
        <div class="BYN">
            <input type="text" id="BYN" type="number" min="0" max="10000">
            <span>BYN</span>
        </div>

        <div class="USD">
            <input type="text" id="USD" type="number" min="0" max="10000">
            <span>USD</span>
        </div>

        <div class="EUR">
            <input type="text" id="EUR" type="number" min="0" max="10000">
            <span>EUR</span>
        </div>

        <div class="PLN">
            <input type="text" id="PLN" type="number" min="0" max="10000">
            <span>PLN</span>
        </div>

        <div class="RUB">
            <input type="text" id="RUB" type="number" min="0" max="10000">
            <span>RUB</span>
        </div>

        <div class="GBP">
            <input type="text" id="GBP" type="number" min="0" max="10000">
            <span>GBP</span>
        </div>
        
    `;


let inputs = Array.from(document.querySelectorAll("input"));

const BYN = document.querySelector("#BYN");

const USD = document.querySelector("#USD");


// function exchangedAmount() {

//     currencies.map(elem => {
//        return this.value * elem.Cur_OfficialRate;
//     }
//     )



// }

/*возвращает знчения из массива с курсами */
// function currenciesValues(arr) {
//     arr.map((currency) => {
//         let { Cur_Abbreviation, Cur_ID, Cur_Name, Cur_OfficialRate, Cur_Scale, Date } = currency;
//         return Cur_OfficialRate;
//     })
// }
// currenciesValues(currencies);
/*
1. получить все инпут
2. на каждый инпут навесить обработчик "input", при изменении значения что-то желать
3. должен фильровать значение, на которых не сработал обработчик, но BYN и остальные валюты работают по разному
4. если валюта не BYN то elem.value = 
сумму в активном и*(baseRate(значение валюты активного инпута event.target.Cur_OfficialRate)/quotedRate(котируемая валюта в которую хотим перевести baseRate))
*/

inputs.forEach((input) => {

    input.addEventListener("input", (event) => {
        event.preventDefault();
        let filtered = inputs.filter((elem) => (elem.id !== event.target.id));
        console.log(filtered);

        filtered.map((elem) => {

            currencies.forEach((currency) => {

                let { Cur_Abbreviation, Cur_ID, Cur_Name, Cur_OfficialRate, Cur_Scale, Date } = currency;

                if (elem.id === Cur_Abbreviation) {
                    elem.value = parseFloat(((event.target.value / Cur_OfficialRate) * Cur_Scale).toFixed(2));
                }
                if (elem.id === "RUB" && Cur_Abbreviation === "RUB") {
                    elem.value = parseFloat(((event.target.value / Cur_OfficialRate) * Cur_Scale).toFixed(2));
                }
                if (elem.id === "PLN" && Cur_Abbreviation === "PLN") {
                    elem.value = parseFloat(((event.target.value / Cur_OfficialRate) * Cur_Scale).toFixed(2));
                }
                // if (elem.id === "EUR" && Cur_Abbreviation === "USD") {
                //     elem.value = event.target.value * (event.target.Cur_OfficialRate/ Cur_Abbreviation);
                // }

            })
            console.log(elem.value)
        })


        // currencies.map((currency) => {

        // let { Cur_Abbreviation, Cur_ID, Cur_Name, Cur_OfficialRate, Cur_Scale, Date } = currency;




        //     if (event.currentTarget.id) {

        //         let result = parseFloat((event.target.value * Cur_OfficialRate).toFixed(2));
        //        return input.value = result;
        //         // console.log(result);
        //         }
        // })
    });
})

/*идеи filter*/
// ? elem.value = event.currentTarget.value*currencies[elem].Cur_OfficialRate: elem.value = event.currentTarget.value