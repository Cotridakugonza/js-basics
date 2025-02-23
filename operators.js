let pricePerKg = 2500;
let quantity = 10;
let totalCost = pricePerKg*quantity;
console.log(`The total cost of 1okgs of beans is ${totalCost}`);
//discount
let discount =5000;
let discountedPrice =totalCost-discount;
console.log(discountedPrice)
//logical operators
let stockISAvailable=true;
let buyerIsLegit =false;
console.log(stockISAvailable && buyerIsLegit)
//concatination
let buyerName="bomboka";
let productName ="soya";
let receiptMessage="you have bought"+quantity+"kgs of"+productName;
console.log(receiptMessage)
//assignment operators
let stock =2000;
let sales=1000;
stock-=sales;
stock=stock-sales;
console.log(stock)
//another example under assignment operators
let food =20;
let eaten=13;
food=food-eaten;
food-=food;
console.log(food)
