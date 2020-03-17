class View {
    constructor(model, target) {
      this.model = model;
      this.target = target;
      this.model.subscribe(this.render.bind(this));
    }
  
    render(data) {
      // this.target.innerHTML = `${data}`;
      console.log("그릴거야"+data);
    }
  }
  
  export default View;