import View from "./vm_product_view.js";
import VMProductModel from "./vm_product_model.js";

const wallet = document.querySelector(".wallet");

const model = new VMProductModel();
const view = new View(model);

wallet.addEventListener("click", function (event) {
    if(event.target.className === 'wallet-money') {
        console.log('click ' + event.target.innerHTML);       
    }
})


// decreaseButton.addEventListener("click", model.decrease.bind(model));
// increaseButton.addEventListener("click", model.increase.bind(model));