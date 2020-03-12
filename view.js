class View {
    constructor(model, target) {
      console.log("target is ", target);
      this.target = target;
      this.model = model;
      this.model.subscribe(this.render.bind(this));
    }
  
    render(data) {
      this.target.innerHTML = `${data}`;
    }
  }
  
  export default View;