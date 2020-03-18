import Observable from "../module/observable.js";

class VmModel extends Observable {
    constructor() {
        super();
        this.products;
        this.init();
        this.selectMoney;
    }
    async init() {
        const response = await fetch("../json/vmProduct.json");
        const data = await response.json();
        this.products = data.product;
        this.notify(this.products);
    }
    checkPrice(selectMoney) {
        this.selectMoney = selectMoney;
        this.products.forEach(product => {
            if (product.price <= this.selectMoney) {
                product.focus = "true";
            }
        });
        this.notify(this.products);
    }
}

export default VmModel;