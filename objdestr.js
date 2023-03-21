class Car{
    name = "";
    model = 0;

    constructor(name,model){
        this.name = name;
        this.model = model;
    }


}
function print({name,model}){
    console.log(name);
    console.log(model);
}
let car = new Car("elantra",2015);
print(car);