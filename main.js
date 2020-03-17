import WalletView from "./walletView.js";
import WalletModel from "./walletModel.js";
import VMView from "./vmProductView.js";
import VMModel from "./vmModel.js";


const wallet = document.querySelector(".wallet");
const walletTotalView = document.querySelector(".wallet-total");
const VMMoneyView = document.querySelector(".vm-selector-money");
const walletList = document.querySelector(".wallet-list");
const walletMoneyQtyView = document.querySelectorAll(".wallet-money-qty");

//test용

const vmMessage = document.querySelector(".vm-selector-message");

const views = {
  walletTotalView: walletTotalView,
  walletMoneyQtyView: walletMoneyQtyView,
  VMMoneyView: VMMoneyView
};

const walletModel = new WalletModel("http://localhost:5500/json/walletMoney.json");
const vmModel = new VMModel();
const walletView = new WalletView(walletModel, views);

const vmView = new VMView(walletModel,vmModel,vmMessage);

walletList.addEventListener("click", function(event) {
  if (event.target.tagName !== "BUTTON") return;
  console.log(event.target.value);
  walletModel.pay(Number(event.target.value));
});

// decreaseButton.addEventListener("click", model.decrease.bind(model));
// increaseButton.addEventListener("click", model.increase.bind(model));

