import VmModel from "../vm/vmModel.js";
import VmView from "../vm/vmView.js";

const productUl = document.querySelector('.vm-product-menu > ul');
const target = {
    productUl: productUl
}

const vmModel = new VmModel();
const vmView = new VmView(vmModel, target);