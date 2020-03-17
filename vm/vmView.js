class VmView {
  constructor(model, target) {
    this.model = model;
    this.target = target;
    this.model.subscribe(this.render.bind(this));
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
}

export default VmView;