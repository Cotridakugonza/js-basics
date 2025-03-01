 let weight =[5,10,,15,20];
let branches = ["Maganjo" , "Mutugga"]
let users = ["Manager","director","Sales agent"]
let productList =["Beans","Grain Maize","cow peas","G-nuts","Soybeans"]
let suppliers = ["John traders Ltd","Agrofarm Ltd","Matugga farms","Maganjo Cooperative"]

console.log(suppliers.length)
let lastIndex =suppliers.length-1 //helps to kno who wmany thing sare in the list//
console.log(lastIndex)

//capture firts supplier//
let firtsSupplier = suppliers[0];
console.log(firtsSupplier);

suppliers[0]="Matugga farms"
console.log(suppliers);





//Method one//
let stockOfBeans={
    produceName:"beans",
    quantity:200,
}
let stockOfGroundNuts={
    produceName:"beans",
    quantity:200,
}
let stockOfCowPeas={
    produceName:"beans",
    quantity:200,
}
let stockOfMaize={
    produceName:"beans",
    quantity:200,
}

//method two//
let stockInventory = [
    { produce: "Beans", quantity: 2000 },
    { produce: "Grain Maize", quantity: 1500 },
    { produce: "Cow Peas", quantity: 1800 },
    { produce: "G-nuts", quantity: 1200 },
    { produce: "Soybeans", quantity: 1000 }
];
console.log(`Available stock with quantities:`,stockInventory)

let salesRecords =[
    {produce:"Beans",buyer:"Micheal",amountPaid:50000,salesAgents:"Alice" , date:"2023-02-10"},
    {produce:"SoyBeans",buyer:"Birunji",amountPaid:60000,salesAgents:"Brian" , date:"2023-02-10"}

];

//name,amountdue,contact,NIN
let trustedBuyers = [
       {name:"James Ouma",NIN:"CM6767689098JG",amountDue:150000,dueDate:"2025-03-01"},
       {name:"Mariam Njeri",NIN:"CF969876534JG",amountDue:120000,dueDate:"2025-03-09"}
]
let salesAgents =["Micheal","Birunji","Angella,Cotrida"]
console.log(salesAgents.length);