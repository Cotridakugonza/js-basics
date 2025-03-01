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

let includes = challange.includes("script")
console.log(includes);
let slice = challange.substring(3,6);
console.log(slice);
let split = challange.split(3,7,11);
console.log(split);

let media = ['Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'];
let replace = challange.replace("30 days of python");


//exercise 4
let word = "30 days of javascript";
let character = word.charAt(15);
console.log(character);

let character2 = word.charCodeAt(11);
console.log(character2);


let character3 = word.indexOf(j);
console.log(character3);
let character4 = word.lastIndexOf(a);
console.log(character4);

let word2='You cannot end a sentence with because because because is a conjunction';
let character5 = word2.indexOf("because");
console.log(character5);
let character6 = word2.lastIndexOf("because");
console.log(character6);
let search = word2.search("because");
console.log(search);
let trimmer = word.trim();


/*exercise 5*/
let start = "3o days of javasript";
console.log(start.startsWith(30));

console.log(start.endsWith(javascript));
console.log(start.match(a/g));

let part1 = "30 Days of";
let part2 = " JavaScript";
let merge = part1.concat(part2);
console.log(merge); 

console.log(start.repeat(2));


//exercise 6
console.log(typeof`10`=== number); //false because `10` is a string an 10 is a number
let num = Number(`10`);
console.log(typeof num === `number`);
//The parseFloat function converts its first argument to a string, 
// parses that string as a decimal number literal, then returns a number or NaN
console.log(parseFloat('9.8') === 10); // false
//it is  Converted to exactly 10 by rounding
let fixedNum = Math.round(parseFloat('9.8'));
console.log(fixedNum === 10); // true

let tsentence = "I hope this course is not full of jargon";
consosle.log(tsentence.includes(jargon));

let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);

let randomNum2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum2);

let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3); 

let jsString = "JavaScript";
let randomIndex = Math.floor(Math.random() * jsString.length);
console.log(jsString[randomIndex]); 


// exercise7
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
let sentencee = "You cannot end a sentence with because because because is a conjunction";
let extraction = sentencee.substring(); 
console.log(extraction);


console.log(1);           // A non-zero number is Truthy
console.log("Hello");     // A non-empty string is Truthy
console.log([]);          // An empty array is Truthy

console.log(0);          // The number 0 is Falsy
console.log("");         // An empty string is Falsy
console.log(null);       // The null value is Falsy


// exercise 8
let firstName="cotrida";
let lastName="kugonza";
let country="uganda";
let city="Gulu";


console.log(typeof(firstName));

console.log(typeof(lastName));

console.log(typeof(country));

console.log(typeof(city));


let ownerOfWork = "kugonza cotrida";
console.log(ownerOfWork);

//End of 20_feb_assesment lesson on datatypes by Andrew @refactor.academy//

