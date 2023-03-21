let fruit = ['guava','banana','apple'];
// let fruit = new array['apple','puneapple','strawberry'];
console.log(fruit);

// for(i=0;i<fruit.length;i++)
// {
//     console.log("fruits" + fruit[i] );
// }


fruit.forEach(element => {
    console.log(element);
});

fruit.map((item)=> {
    console.log(item);
})

let nos = [1,2,3,4];
let squares = nos.map((item)=>{
    return item * item;
});
console.log("sqaure=" + squares);

