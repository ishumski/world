class LocalStorageUtil {
    constructor() {//в конструкторе задаются отдельные св-ва, необходимые нам для работы
        //keyName - ключ нашего св-ва ключ:значение
        this.keyName = "products";//т.к у наших elem из products есть ключ products, то вынесем его в отдельное св-во
    }

    getProducts() {//получаем все продукты в локальном хранилище
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }
    putProducts(id) {//позволяет добавить элемент в локальное хранилище
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products = [...products, id]//копируем наши id такаим образом, т.к. создается новый массив(и не затрагивает старый) и в него мы помещаем необходимые нам elem
            // products.push(id); - id в массив так не добавляем, т.к push - метод мутирующий(он меняет уже сформировавшийся массив)
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));
        return { pushProduct, products };
    }

}

//для использования класса делаем экземпляр класса 
const localStorageUtil = new LocalStorageUtil();


