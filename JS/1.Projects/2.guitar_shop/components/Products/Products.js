class Products {
    render() {
        let htmlCatalog = "";
        CATALOG.forEach(({ id, name, price, img }) => {
            htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img src="${img}" class="products-element__img" alt="guitar picture">
                <span class="products-element__price">
                    <img src="/images/price_light.png" alt="light_emodji">
                    ${price.toLocaleString()} USD 
                </span>
                <button type="submit" class="products-element__btn">Добавить элемент в корзину</button>
            </li>
            `;
        });
        const html = `
        <ul class="products-container">${htmlCatalog}</ul>
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }

}
const productsPage = new Products();
productsPage.render();

