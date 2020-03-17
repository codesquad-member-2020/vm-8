import VmModel from "../vm/vmModel.js";
import VmView from "../vm/vmView.js";
import WalletModel from "../wallet/walletModel.js";
import WalletView from "../wallet/walletView.js";

const productUl = document.querySelector('.vm-product-menu > ul');
const target = {
    productUl: productUl
}

const walletTotalView = document.querySelector(".wallet-total");
const walletMoneyQtyView = document.querySelectorAll(".wallet-money-qty");
const VMMoneyView = document.querySelector(".vm-select-money");
const views = {
    walletTotalView: walletTotalView,
    walletMoneyQtyView: walletMoneyQtyView,
    VMMoneyView: VMMoneyView
};

const vmModel = new VmModel();
const vmView = new VmView(vmModel, target);
const walletModel = new WalletModel("http://localhost:5500/json/walletMoney.json");
const walletView = new WalletView(walletModel, views);

const walletList = document.querySelector(".wallet-list");

walletList.addEventListener("click", function(event) {
    if (event.target.tagName !== "BUTTON") return;
    walletModel.pay(Number(event.target.value));
  });