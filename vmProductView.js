class View {
    constructor(model) {
      this.model = model;
      this.model.subscribe(model);
    }
  
    render(data) {
      // this.target.innerHTML = `${data}`;
      console.log("그릴거야"+data);
    }
  }
  
  export default View;