// Exercise1
//year today//
const now = new Date();
let year = now.getFullYear();
console.log(year);

//month in number//
let month = now.getMonth()
console.log(Number(month));

//date today/
let dateToday =  now.getDate()
console.log(dateToday);

//day today as a number//
let today = now.getDay()
console.log(Number(today));

//Hours now//
let hours = now.getHours()
console.log(hours)

//Minutes now/
let minutes = now.getMinutes()
console.log(minutes)

//number of seconds that elapsed from Jan,1,1970 to now//



//Exercise2//


// calculating the area of a triangle
const base = parseFloat(prompt("Enter base: "));
const height = parseFloat(prompt("Enter height: "));
const area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

//  calculating the perimeter of a triangle
const sideA = parseFloat(prompt("Enter side a: "));
const sideB = parseFloat(prompt("Enter side b: "));
const sideC = parseFloat(prompt("Enter side c: "));
const perimeter = sideA + sideB + sideC;
console.log(`The perimeter of the triangle is ${perimeter}`);


//Exercise3//

//  calculating the area and perimeter of a rectangle
const length = parseFloat(prompt("Enter length: "));
const width = parseFloat(prompt("Enter width: "));
const areaRectangle = length * width;
const perimeterRectangle = 2 * (length + width);
console.log(`The area of the rectangle is ${areaRectangle}`);
console.log(`The perimeter of the rectangle is ${perimeterRectangle}`);

// calculating the area and circumference of a circle
const radius = parseFloat(prompt("Enter radius: "));
const pi = 3.14;
const areaCircle = pi * radius * radius;
const circumferenceCircle = 2 * pi * radius;
console.log(`The area of the circle is ${areaCircle}`);
console.log(`The circumference of the circle is ${circumferenceCircle}`);

// Calculating slope, x-intercept, and y-intercept of y = 2x - 2
const slopeEquation = 2;
const xIntercept = 2 / 2; // Setting y = 0, solving for x
const yIntercept = -2;
console.log(`Slope of y = 2x - 2 is ${slopeEquation}`);
console.log(`X-intercept is (${xIntercept}, 0)`);
console.log(`Y-intercept is (0, ${yIntercept})`);

// Find the slope between points (2,2) and (6,10)
const x1 = 2, y1 = 2;
const x2 = 6, y2 = 10;
const slopePoints = (y2 - y1) / (x2 - x1);
console.log(`Slope between (2,2) and (6,10) is ${slopePoints}`);

// Comparing slopes
console.log(`The slopes are ${slopeEquation === slopePoints ? "equal" : "different"}`);

// Calculate y = x^2 + 6x + 9 for different values of x
function calculateY(x) {
    return x * x + 6 * x + 9;
}

for (let x = -10; x <= 10; x++) {
    let y = calculateY(x);
    console.log(`For x = ${x}, y = ${y}`);
    if (y === 0) {
        console.log(`y is 0 when x = ${x}`);
    }
}

//Exercise 4//
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
const hour = parseFloat(prompt("Enter hours:"));
const ratePerHour = parseFloat(prompt("Enter rate per hour:"));

const totalPay = hour * ratePerHour;
console.log(`Your weekly earning is ${totalPay}`);

// Checking name length
if (firstName.length > 7) {
    console.log("Your name is long");
} else {
    console.log("Your name is short");
}

// Comparing first name and last name length
if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else if (firstName.length < lastName.length) {
    console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);
} else {
    console.log(`Your first name, ${firstName} and your family name, ${lastName} are of the same length`);
}

//exercise 5//
const birthYear = parseInt(prompt("Enter your birth year:"));
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

// Driving permission//
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive`);
} else {
    console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
}

//exercise 6//
const yearsLive = parseInt(prompt("Enter number of years you live:"));
const secondsLived = yearsLive * 365 * 24 * 60 * 60;
console.log(`You lived ${secondsLived} seconds.`);


const nowW = new Date();
const yearR = now.getFullYear();
const monthH = (now.getMonth() + 1).padStart(2, '0');
const day = (now.getDate()).padStart(2, '0');
const hourss = (now.getHours()).padStart(2, '0');
const minutess = (now.getMinutes()).padStart(2, '0');

console.log(`${year}-${month}-${day} ${hours}:${minutes}`); // YYYY-MM-DD HH:mm
console.log(`${day}-${month}-${year} ${hours}:${minutes}`); // DD-MM-YYYY HH:mm
console.log(`${day}/${month}/${year} ${hours}:${minutes}`); // DD/MM/YYYY HH:mm


//exercise 6//
let dateAndTime = now.getDate()
let time = now.getHours()
let time1 = now.getHours()
 console.log(`${dateAndTime}+${time}+${time1}`)

