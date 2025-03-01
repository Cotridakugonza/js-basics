// function add(a,b){
//     let sum = a+b
//     return sum;
// }
// console.log(add(5,3));

// function square(a){
//     let square = a*a
//     return square
// }

// const square =function square(a){
//     let square = a*a
//     return square
// }

// const square =(a)=>a*a   

function calculateTotalCost(produce,pricePerkg,quantity){
    let totalCost=pricePerkg*quantity;
    console.log(`The total price of ${quantity} kgs of ${produce}  is ${totalCost}`);

}
calculateTotalCost("Maize",8000,20)
calculateTotalCost("Beans",12000,20)
calculateTotalCost("G-nuts",4000,10)