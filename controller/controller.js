import VmModel from "../vm/vmModel.js";
import VmView from "../vm/vmView.js";
import WalletModel from "../wallet/walletModel.js";
import WalletView from "../wallet/walletView.js";


const walletTotalView = document.querySelector(".wallet-total");
const walletMoneyQtyView = document.querySelectorAll(".wallet-money-qty");
const VMMoneyView = document.querySelector(".vm-select-money");
const vmMessageView = document.querySelector(".vm-select-message");
const vmSelectNumber = document.querySelector(".vm-select-number");
const walletList = document.querySelector(".wallet-list");

const views = {
    walletTotalView: walletTotalView,
    walletMoneyQtyView: walletMoneyQtyView,
    VMMoneyView: VMMoneyView
};

const productUl = document.querySelector('.vm-product-menu > ul');
const target = {
    productUl: productUl,
    vmMessageView: vmMessageView,
    walletMoneyQtyView: walletMoneyQtyView,

}

const vmModel = new VmModel();
const walletModel = new WalletModel("http://localhost:5500/json/walletMoney.json");
const vmView = new VmView(vmModel, walletModel, target);
const walletView = new WalletView(walletModel, views);


walletList.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") return;
    walletModel.pay(Number(event.target.value));
    vmModel.checkPrice(walletModel.walletData.VMCash);
});

vmSelectNumber.addEventListener("click",function(event){
    if(event.target.tagName !== "LI") return;
    let isSelected = false;
    if(event.target.value=="10") isSelected = true;
    vmModel.selectNumber(event.target.value,isSelected);
    
});