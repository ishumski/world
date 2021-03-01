const MAX_VISIBLE_PAGES = 5;

const tableState = {
    page: 1,
    rowPerPage: 10
}

export default function renderTable(data) {
    document.body.innerHTML = "";

    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    thead.innerHTML = `
        <tr>
            <th>Название города</th>
            <th>Область</th>
        </tr>
    `;

    const normalized = data[0].regions.reduce((result, current) => {
        const row = current.cities.map((city) => {
            return { name: city.name, region: current.name }
        })

        return [...result, ...row];
    }, []);

    const startIndex = tableState.rowPerPage * (tableState.page - 1);
    const endIndex = startIndex + tableState.rowPerPage;

    const rows = normalized.slice(startIndex, endIndex).map((city) => {
        return ` <tr>
    <td>${city.name}</td>
    <td>${city.region}</td>
    </tr>
    `
    });

    tbody.innerHTML = rows.join("");

    table.appendChild(thead);
    table.appendChild(tbody);

    document.body.appendChild(table);

    const pagination = document.createElement("div");
    pagination.setAttribute("class", "pagination");

    const pagesCount = Math.ceil(normalized.length / tableState.rowPerPage);

    let startPage;
    let endPage;

    const maxPages = pagesCount < MAX_VISIBLE_PAGES ? pagesCount : MAX_VISIBLE_PAGES;

    const maxPagesBeforeCurrent = Math.floor(maxPages / 2);
    const maxPagesAfterCurrent = Math.ceil(maxPages / 2) - 1;

    if (tableState.page <= maxPagesBeforeCurrent) {
        startPage = 1;
        endPage = maxPages;
    } else if (tableState.page + maxPagesAfterCurrent >= pagesCount) {
        startPage = pagesCount - maxPages + 1;
        endPage = pagesCount;
    } else {
        startPage = tableState.page - maxPagesBeforeCurrent;
        endPage = tableState.page + maxPagesAfterCurrent;
    }

    pagination.innerHTML = Array.apply(null, Array(maxPages)).map((page, index) => {

        return `<a href="#">${startPage + index}</a>`;

    }).join("");


    document.body.appendChild(pagination);

    const pages = pagination.querySelectorAll("a")

    pages.forEach((page) => {
        page.addEventListener("click", (event) => {
            event.preventDefault();

            tableState.page = parseInt(event.target.textContent, 10);

            renderTable(data);
        });
        if (parseInt(page.textContent, 10) === tableState.page) {
            page.setAttribute("class", "active");
        }
    });

    const rowsPerPageSelect = document.createElement("select");

    rowsPerPageSelect.innerHTML = `
        <option></option>
        <option ${tableState.rowPerPage === 10 && "selected"}>10</option>
        <option ${tableState.rowPerPage === 25 && "selected"}>25</option>
        <option ${tableState.rowPerPage === 50 && "selected"}>50</option>
    `
    document.body.appendChild(rowsPerPageSelect);

    rowsPerPageSelect.addEventListener("change", (event) => {
        tableState.rowPerPage = parseInt(event.target.value, 10);
        tableState.page = 1;
        renderTable(data);
    })
}