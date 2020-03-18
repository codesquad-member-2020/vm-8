class VmView {
  constructor(model, model2,target) {
    this.model = model;
    this.model2 = model2;
    this.target = target;
    this.model.subscribe(this.render.bind(this));
    this.model2.subscribe(this.walletDataRender.bind(this));

  }
  render(products) {
    products.forEach(product => {
      const template = `<li class="product-li"><div class="product-name">${product.name}</div><p class="product-price">${product.price}</p></li>`;
      this.target.productUl.innerHTML += template;
      if (product.focus === "true") {
        document.querySelector('.product-li').className = 'product-li-focus';
      }
    });
  }
  
  walletDataRender(data){
    if(data.value==0) return;
    this.target.vmMessageView.innerHTML += `${data.value+" 원이 투입되었습니다."}<br><br>`;
  }

}

export default VmView;