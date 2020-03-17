class VmView {
  constructor(model) {
    this.model = model;
    this.model.subscribe(this.render);
  }
  render(product) {
    console.log(product);
  }
}

export default VmView;