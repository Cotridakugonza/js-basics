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
let day = 1;
switch (day) {
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

  let contact1 ="Brian"
  if(contact1==="Brian"){
    console.log("Javascript")
  }else if(contact1==="Allan"){
    console.log("Python")
  }else if (contact1==="kapeyi"){
    console.log("facilator@refactory")
  }else{
    console.log("not in our records")
  };


  let produce = prompt("enter your desired produce ie;beans ,soybean,cowpeas, ")

