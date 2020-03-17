import VmModel from "../vm/vmModel.js";
import VmView from "../vm/vmView.js";

const productUl = document.querySelector('.vm-product-menu > ul');
const target = {
    productUl: productUl
}

// selector-money 이름이 이상하니까 바꾸기
const selectMoney = document.querySelector('.vm-selector-money');

const vmModel = new VmModel();
const vmView = new VmView(vmModel, target);

selectMoney.addEventListener("onchange", function (event) {
    console.log('change test');
});