import { compareAverage, compareGrades, compareNumbers } from "./sort.js"
import { compareStrings } from "./sort.js"

//сортировка
const tableState = {
    sorting: "asc",
    sortingField: null
}

export default function renderTable(data) {
    document.body.innerHTML = "";

    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    thead.innerHTML = `
<tr>
    <th colspan="1" rowspan="2" id="firstName">Frst name</th>
    <th colspan="1" rowspan="2" id="lastName">Last name</th>
    <th colspan="1" rowspan="2" id="class">Class</th>
    <th colspan="3" rowspan="1"  id="">Grades</th>
    <th colspan="1" rowspan="2" id="average">Average</th>

    <tr>
        <th id="Math">Math</th>
        <th id="Chemistry">Chemistry</th>
        <th id="Literature">Literature</th>
    </tr>

</tr>

`
    const rows = data.map((pupil) => {
        const totalGrades = pupil.grades.reduce((total, current) => {
            return (total + current.grade);

        }, 0);

        const average = totalGrades / pupil.grades.length;

        return ` 
    <tr>
        <td>${pupil.firstName}</td>
        <td>${pupil.lastName}</td>
        <td>${pupil.class}</td>


       ${pupil.grades.map((subjectGrade) => {

            return `<td>${subjectGrade.grade}</td>`;
        }).join("")}

    <td>${average.toFixed(2)}</td>
    </tr>
    `
    });

    tbody.innerHTML = rows.join("");

    table.appendChild(thead);
    table.appendChild(tbody);

    document.body.appendChild(table);


    //сортировка
    thead.addEventListener("click", (event) => {
        const header = event.target.id;

        if (tableState.sortingField === header) {
            tableState.sorting = tableState.sorting === "asc" ? "desc" : "asc"
        } else {
            tableState.sorting = "asc";
        }

        tableState.sortingField = header;

        const copy = [...data];


        switch (header) {
            case "class":
                copy.sort(compareNumbers(tableState.sorting, header));
                break;
            case "firstName":
            case "lastName":
                copy.sort(compareStrings(tableState.sorting, header));
                break;
            case "average":
                copy.sort(compareAverage(tableState.sorting));
                break;
            case "Math":
            case "Chemistry":
            case "Literature":
                copy.sort(compareGrades(tableState.sorting, header));
        }
        renderTable(copy);
    })
}
