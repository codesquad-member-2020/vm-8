import Observable from "../module/observable.js";

class VmModel extends Observable {
  constructor() {
    super();
    this.products;
    this.init();
    this.selectMoney;
    this.selectedNumber = "";
  }
  async init() {
    const response = await fetch("../json/vmProduct.json");
    const data = await response.json();
    this.products = data.product;
    this.notify(this.products);
  }
  checkPrice(selectMoney) {
    this.selectMoney = selectMoney;
    this.products.forEach(product => {
      if (product.price <= this.selectMoney) {
        product.focus = "true";
      }
    });
    this.notify(this.products);
  }
  selectNumber(number, isSelected) {
    if (number != "10") this.selectedNumber = this.selectedNumber + number;
    if (isSelected == false) return;
    return this.selectProduct();
  }
  selectProduct() {
    console.log(this.selectedNumber + " 번 상품선택");
    
    for(var i = 0; i<this.products.length; i++){
        if(this.selectedNumber==this.products[i].id){
            console.log(this.products[i].price);
            this.selectedNumber = "";
        
        }
    };
    
  }
}

export default VmModel;
