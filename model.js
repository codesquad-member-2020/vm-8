import Observable from "./observable.js";

class Model extends Observable {
  constructor(url) {
    super();
    this.url = url;
    this.getInitialData(this.url);
    this.walletData = {
      walletMoney : {} ,
      walletTotal : 0,
      VMCash : 0
    };
  }
  pay(value) {
    
    this.walletData.walletTotal -= value;
    this.walletData.VMCash += value;
    if(this.walletData.walletMoney.money === value){
        this.walletData.walletMoney.money_qty -= 1;
    }
    this.notify(this.walletData);
  }
  setWalletData(initialData) {
    this.walletData.walletMoney = initialData;
    const walletTotal = initialData.reduce(
      (total, data) => (total += data.money * data.money_qty),
      0
    );
    this.walletData.walletTotal = walletTotal;
    this.notify(this.walletData);
  }
  getInitialData() {
    fetch(this.url)
      .then(function(res) {
        return res.json();
      })
      .then(myJson => this.setWalletData(myJson));
  }
}

export default Model;
