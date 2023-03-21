class Car{
    constructor (name){
        this.brand = name;
    }
    show(){
            return 'i have' + this.brand;
    }

}
class Model extends Car{
    constructor (name,mod){
        super(name);
        this.model=mod;
    }
    display(){
        console.log( 'i have' + this.model);
    }
} 
const mc = new Model("ford","mustang");
 mc.display();