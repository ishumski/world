class LocalStorageUtil {
    constructor() {
        this.keyName = "products";
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }
    putProducts(id) {
let products = this.getProducts;
    }

}

const localStorageUtil = new LocalStorageUtil();
