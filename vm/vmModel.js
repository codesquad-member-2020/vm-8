import Observable from "../module/observable.js";

class VmModel extends Observable {
    constructor() {
        super();
        this.product;
        this.init();
    }
    async init() {
       const response = await fetch("../json/vmProduct.json");
       const data = await response.json();
       this.product = data.product;
       this.notify(this.product);
    }

    
    //     // this.selectorMoney = this.getSelectorMoney();
    //     this.selectorMoney
    //     this.getProducts();
    // }
    // getSelectorMoney() {
    //     const money = document.querySelector('.vm-selector-money').innerText.replace(/[^0-9]/g, "");
    //     return money;
    // }
    // async getProducts() {
    //     const response = await fetch("../json/vmProduct.json");
    //     const data = await response.json();
    //     this.checkPrice(data);
    // }
    // checkPrice(jsonData) {
    //     jsonData.product.forEach(product => {
    //         if (product.price <= this.selectorMoney) {
    //             product.focus = "true";
    //         } 
    //     });
    //     console.log(jsonData);
    // }

}

export default VmModel;