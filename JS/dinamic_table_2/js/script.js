import renderTable from "./render-table.js"

async function init() {
    const response = await fetch("/js/by-cities.json");

    const byCities = await response.json();

    renderTable(byCities);
}

init();