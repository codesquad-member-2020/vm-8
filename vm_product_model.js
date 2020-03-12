import Observable from "./observable.js";

class VMProductModel extends Observable {
    constructor() {
        super();
        this.selectorMoney = this.getSelectorMoney();
    }
    getSelectorMoney() {
        return document.querySelector('.vm-selector-money').innerText.replace(/[^0-9]/g, "");
    }
}

// export default VMProductModel;

const pmodel = new VMProductModel();
console.log(pmodel.selectorMoney);