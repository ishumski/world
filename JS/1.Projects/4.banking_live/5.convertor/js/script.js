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


/*
<div class="BYN">
            <input type="text" id="BYN" type="number" min="0" max="10000">
            <span>BYN</span>
        </div>
*/

container.innerHTML = `
        

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

/*
1. получить все инпут
2. на каждый инпут навесить обработчик "input", при изменении значения что-то желать
3. должен фильровать значение, на которых не сработал обработчик, но BYN и остальные валюты работают по разному
4. если валюта не BYN то elem.value = 
сумму в активном и*(baseRate(значение валюты активного инпута event.target.Cur_OfficialRate)/quotedRate(котируемая валюта в которую хотим перевести baseRate))
*/

/*
const amount = input.value;
const baseRate = Cur_OfficialRate;//курс инпута на котором сработал обработчик событий;
const quotedRate = Cur_OfficialRate;//получить курс валют остальных инпутов;
*/

let inputs = Array.from(document.querySelectorAll("input"));

inputs.forEach((input) => {

    input.addEventListener("input", (event) => {
        event.preventDefault();

        //фильтруем и получаетм все нипуты, кроме того, который выбран
        const filtered = inputs.filter((elem) => (elem.id !== event.target.id));

        filtered.forEach((elem) => {

            let currency = currencies.find((curr) => curr.Cur_Abbreviation === elem.id);
            let baseCurrencyRate = currencies.find((curr) => curr.Cur_Abbreviation !== elem.id);//ошибка
            console.log(baseCurrencyRate);

            let { Cur_Abbreviation, Cur_ID, Cur_Name, Cur_OfficialRate, Cur_Scale, Date } = currency;


           
                elem.value = event.target.value * (baseCurrencyRate.Cur_OfficialRate / Cur_OfficialRate) * Cur_Scale;
         

          

            // if (elem.id === Cur_Abbreviation) {
            //     elem.value = parseFloat(((event.target.value / Cur_OfficialRate) * Cur_Scale).toFixed(2));
            // }
            // if (elem.id === "RUB" && Cur_Abbreviation === "RUB") {
            //     elem.value = parseFloat(((event.target.value / Cur_OfficialRate) * Cur_Scale).toFixed(2));
            // }
            // if (elem.id === "PLN" && Cur_Abbreviation === "PLN") {
            //     elem.value = parseFloat(((event.target.value / Cur_OfficialRate) * Cur_Scale).toFixed(2));
            // }

        })
    });
})

/*идеи filter*/
// ? elem.value = event.currentTarget.value*currencies[elem].Cur_OfficialRate: elem.value = event.currentTarget.value