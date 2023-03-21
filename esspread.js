// let numOne = [1,2,4];
// let numTwo = [5,6,7];
// let ans = [...numOne,...numTwo];
// console.log(ans);

// let array = [1,2,3,4,5,6];
// let [one,two,...rest] = array;
// console.log(one);
// console.log(two);
// console.log(rest);

let myvehicle = {
    brand:'ford',
    model:'Mustang',
    color:'red'
}
let updatevehicle = {
    type:'car',
    year:2016,
    color:'red'
}
let updatedvehicle = {...myvehicle,...updatevehicle};
console.log(updatedvehicle);