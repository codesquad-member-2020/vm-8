import Observable from "./observable.js";

// let Aproducts = [];

class VMProductModel extends Observable {
    constructor() {
        super();
        this.selectorMoney = this.getSelectorMoney();
        this.products = this.getProducts();
    }
    getSelectorMoney() {
        const selectorMoney = document.querySelector('.vm-selector-money').innerText.replace(/[^0-9]/g, "");
        return selectorMoney;
    }
    getProducts() {
        const getData = async () => {
            const response = await fetch('vm_product.json');
            const data = await response.json();
            return data;
        }
        getData().then(data => {
            console.log(data.product);
            this.notify(data.product);
        });
    }
}

export default VMProductModel;

// export default VMProductModel;

const pmodel = new VMProductModel();
console.log(pmodel.selectorMoney);
console.log(pmodel.products)
