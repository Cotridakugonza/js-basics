// if (condition){
// //this part of code runs if the condition is true//
// };

//number//
let number = 6;
if (number>0){
    console.log(`${number} is a positive integer`)
};

//string//
let weather = "raining";
if (weather ==="raining"){
  console.log("Remember to carry an umbrella")
}
;

//boolean//
let isRaining = true;
if (isRaining){
 console.log("Remember to carry your umbrella")
};







//else//
let isRainingOne = true;
if (isRainingOne){
 console.log("Remember to carry your umbrella")
} else{
    console.log("You don't need an umbrella")
};







let numberTwo = -5;
if (numberTwo>0){
    console.log(`${numberTwo} is a positive integer`)
} else {
    console.log(`${numberTwo} is a negative integer`)
};


/*elseif
switch statements*/
let weatherNow = "sunny";
if(weatherNow === "rainy"){
    console.log("you need an umbrella")
}else if(weatherNow==="cloudy"){
    console.log("you might need an umbrella") 
} else if(weatherNow==="sunny"){
    console.log("Wear light clothes")
}else{
    console.log("Do what you want")
};

/*switch statements*/
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day");
}
//Just incase the day doesn't match any case,ivalid day is printed/

//switches//

/*W3 SCHOOLS EXAMPLE*/
/*The getDay() method returns the weekday as a number between 0 and 6.
(Sunday=0, Monday=1, Tuesday=2 ..)*/

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
        "Invalid day"
  }