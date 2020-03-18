import Observable from "../module/observable.js";

class WalletModel extends Observable {
  constructor(url) {
    super();
    this.url = url;
    this.getInitialData(this.url);
    this.walletData = {
      walletMoney: {},
      walletTotal: 0,
      VMCash: 0,
      currentIndex : null,
    };
  }
  pay(value) {
    for (var i = 0; i < this.walletData.walletMoney.length; i++) {
      if (
        this.walletData.walletMoney[i].money == value &&
        this.walletData.walletMoney[i].money_qty != 0
      ) {
        this.walletData.boolean = false;
        this.walletData.currentIndex = i;
        this.walletData.walletTotal -= value;
        this.walletData.VMCash += value;
        this.walletData.walletMoney[i].money_qty -= 1;
        // if (this.walletData.walletMoney[i].money_qty === 0 ) this.walletData.boolean = true;
        // this.walletData.currentQty = this.walletData.walletMoney[i].money_qty;
        // this.walletData.currentValue = value

      }

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

export default WalletModel;
