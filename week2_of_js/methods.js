let person={
    name:"John",
    age:30,
    speak:function(){
        
       console.log ("Hello my name is"   +  this.name  +  "I am"  +  this.age)
    }
}
person.speak()
console.log(person.name)

let store={
    name:"karibu groceries",
    Location:"Maganjo",
    stock:{
        beans:120,
        peas:300,
        maize:400,
    },
    saleProduce(){
        console.log("sold successfully")
    }

}
store.stock.beans

let calculator ={
    add(a,b){
        return a+b  
    },
    subtract(a,b){
        return a-b
    }
}
console.log(calculator.add(5,4))
console.log(calculator.subtract(19,4))

