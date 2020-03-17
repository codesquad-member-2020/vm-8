class VMView {
    constructor(model, model2, target) {
      this.target = target;
      this.model = model;
      this.model2 = model2;

      this.model.subscribe(this.render.bind(this));
      this.model2.subscribe(this.render2.bind(this));

    }
  
    render(data) {
      // this.target.innerHTML = `${data}`;
      this.target.innerHTML = `${data.VMCash+"원 들어왔넹"}`;
      
      console.log("그릴거야"+data);
    }
    render2(data){

    }
  }
  
  export default VMView;