class WalletView {
    constructor(model, target) {
      this.target = target;
      this.model = model;
      this.model.subscribe(this.render.bind(this));
    }
  
    render(data) {
        this.target.walletTotalView.innerHTML = `${data.walletTotal+" 원"}`;
        this.target.VMMoneyView.innerHTML = `${data.VMCash+" 원"}`;
        if(this.target.walletMoneyQtyView.value){

        };
        // this.target.walletQtyView.innerHTML = `${data.money_qty}`;
    }
    test(data){
        console.log(data);
    }
  }
  
  export default WalletView;