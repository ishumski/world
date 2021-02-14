class Products {
    constructor() {
        this.classNameActive = " products-element__btn_active";
        this.labelAdd = "Добавить в корзину";
        this.labelRemove = "Удалить из карзины";
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = "";

        CATALOG.forEach(({ id, name, price, img }) => {

            let activeClass = "";
            let activeText = "";

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;

            } else {
                activeClass = ` ${this.classNameActive}`;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img src="${img}" class="products-element__img" alt="guitar picture">
                <span class="products-element__price">
                    <img src="/images/price_light.png" alt="light_emodji">
                    ${price.toLocaleString()} USD 
                </span>
                <button type="submit" class="products-element__btn ${activeClass}">${activeText}</button>
            </li>
            `;

        });
        const html = `
        <ul class="products-container">${htmlCatalog}</ul>
        `;
        ROOT_PRODUCTS.innerHTML = html;

        const productsElementBtn = document.querySelectorAll(".products-element__btn");

        productsElementBtn.forEach((elem) => {
            elem.addEventListener("click", (event) => {
                let x = event.currentTarget.id;
                console.log(event.currentTarget, x);

            })

        })
    }

}
const productsPage = new Products();
productsPage.render();

