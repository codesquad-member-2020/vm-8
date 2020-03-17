import Observable from "./observable.js";

class VMModel extends Observable {
    constructor() {
        super();
        //this.selectorMoney = this.getSelectorMoney();
        this.selectorMoney = 2000;
        this.getProducts();
    }
    getSelectorMoney() {
        const money = document.querySelector('.vm-selector-money').innerText.replace(/[^0-9]/g, "");
        return money;
    }
    async getProducts() {
        const response = await fetch('vmProduct.json');
        const data = await response.json();
        this.checkPrice(data);
    }
    checkPrice(jsonData) {
        // jsonData.product.array.forEach(element => {
        //     console.log(element);
        // });
        jsonData.product.forEach(product => {
            if (product.price <= this.selectorMoney) {
                product.focus = "true";
            }
        });
        // console.log(jsonData.product[0].name);
    }
}

export default VMModel;

const pmodel = new VMModel();
console.log(pmodel.selectorMoney);