import Observable from "../common/observable.js";

class VmProductModel extends Observable {
    constructor() {
        super();
        this.products;
        this.init();
        this.selectMoney;
    }
    async init() {
        const response = await fetch("../mockdata/vmProducts.json");
        const data = await response.json();
        this.products = data.products;
        this.notify(this.products);
    }
    checkPrice(selectMoney) {
        console.log('checkprice', selectMoney);
        this.selectMoney = selectMoney;
        this.products.forEach(product => {
            if (product.price <= this.selectMoney) {
                product.focus = "true";
            } else {
                product.focus = "false";
            }
        });
        this.notify(this.products);
    }
}

export default VmProductModel;