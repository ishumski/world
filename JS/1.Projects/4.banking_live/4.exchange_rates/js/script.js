const span = document.querySelector("span");
fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0")
    .then(response => response.json())
    .then(result => {
        result.forEach(elem => {
            let { Cur_ID, Cur_Abbreviation, Cur_Scale, Cur_Name, Cur_OfficialRate } = elem;

            if (Cur_ID == 145 || Cur_ID == 292 || Cur_ID == 143 || Cur_ID == 293 || Cur_ID == 298) {

                let data = `${Cur_Scale} ${Cur_Abbreviation}  ${Cur_Name}  ${Cur_OfficialRate}`
                return console.log(data);
            }
        });
    })