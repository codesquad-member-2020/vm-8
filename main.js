import View from "./view.js";
import Model from "./model.js";

const wallet = document.querySelector(".wallet");

const model = new Model();
// const view = new View(model, root);

wallet.addEventListener("click", function (event) {
    if(event.target.className === 'wallet-money') {
        console.log('click ' + event.target.innerHTML);       
    }
})


// decreaseButton.addEventListener("click", model.decrease.bind(model));
// increaseButton.addEventListener("click", model.increase.bind(model));