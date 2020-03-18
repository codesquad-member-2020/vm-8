class VmView {
  constructor(model, target) {
    this.model = model;
    this.target = target;
    this.model.subscribe(this.render.bind(this));
  }
  render(products) {
    this.target.productUl.innerHTML = "";
    let className = "";
    products.forEach(product => {
      if (product.focus === "true") {
        className = "product-name-focus";
      } else {
        className = "product-name";
      }
      const template = `<li><div class="${className}">${product.name}</div><p class="product-price">${product.price}</p></li>`;
      this.target.productUl.innerHTML += template;
    });
  }
}

export default VmView;