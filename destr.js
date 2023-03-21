let vehicles = ["elantra","wagonr","Maruti"];
// let elantra = vehicles[0];
// let wagonr = vehicles[1];
// let maruti = vehicles[2];

let [elantra,  ,wagonr] = vehicles

console.log(wagonr);
console.log(vehicles);

function calculate(a,b){
    
    let add = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;
    return [add,sub,mul,div];
    
}
let result = calculate(30,20);
console.log(result);