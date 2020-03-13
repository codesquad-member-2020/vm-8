import View from "./view.js";
import Model from "./model.js";

const wallet = document.querySelector(".wallet");
const walletTotalView = document.querySelector(".wallet-total");
const VMMoneyView = document.querySelector(".vm-selector-money");
const walletList = document.querySelector(".wallet-list");
const walletMoney_qty = document.querySelectorAll(".wallet-money-qty");

const views = {
  walletTotalView: walletTotalView,
  walletQtyView : walletMoney_qty,
  VMMoneyView: VMMoneyView

};

const model = new Model("http://localhost:5500/json/walletMoney.json");
const view = new View(model, views);

walletList.addEventListener("click", function(event) {
  if (event.target.tagName !== "BUTTON") return;
  console.log(event.target.value);
  model.pay(Number(event.target.value));
});

// decreaseButton.addEventListener("click", model.decrease.bind(model));
// increaseButton.addEventListener("click", model.increase.bind(model));