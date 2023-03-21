class Car {
    name = " ";
    model = 0;
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

show(){
    console.log(" name :-" + this.name);
    console.log(" model :-" + this.model);
}
}
let c = new Car("elantra","2012");
c.show();