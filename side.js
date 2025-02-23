// exercise 1

let a =4
let b =3

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
 

//Exercise 2
let myAge = 250;
let yourAge=25;
let theagedifference =myAge-yourAge;
console.log(theagedifference);



//Exercise 3
let challange ="30 days of Javascript";
console.log(challange.length);
console.log(challange.toUpperCase());
console.log(challange.toLowerCase());

let isMath = false;
let isPhysics = true;
let isEnglish = false;
let isHistory = false;
let isGeography = true;
let isIct = false;

function subjects() {
    if (isMath === false && isPhysics === false && isEnglish === true && isHistory === true && isGeography === true && isIct === false) {
        return `She hates sciences`;
    } else if (isMath === true && isPhysics === true && isEnglish === true && isHistory === true && isGeography === true && isIct === false) {  
        return `She loves all subjects`;
    } else if (isMath === false && isPhysics === false && isEnglish === false && isHistory === false && isGeography === false && isIct === false) {  
        return `She hates all subjects`;
    } else {
        return `No specific preference`;  
    }
}

console.log(subjects()); 
