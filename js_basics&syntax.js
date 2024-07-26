//setting variables and printing them
let names = "Stephen, Bria, Chiamaka, Akil, Emmanuel, Nana, Darrion"
let age ="255,30,42,35,12,14,45"
let grades = "A+, A+, B+, B-, A, A-, A+"
let attendance = "Present, present, absent, online, present, present, absent"

console.log("The student grades are: " + names) 
console.log("Their student ages are: " + age) 
console.log("And here are their grades, respectively: " + grades) 
console.log("And their respective attendance: " + attendance) 

//declaring variables 
let value_1;
let value_2;

value_1 = 92;
value_2 = 112;

//doing arithmetic and printing them
let sum = value_1 + value_2;
let difference = value_2 - value_1; 
let product = value_1*value_2; 
let quotient = value_1/value_2;

console.log("Hey Stephen, of the numbers are " + value_1 + " and " + value_2)
console.log("The sum of the numbers are:  ", + sum);
console.log("The difference of the are: " +  difference);
console.log("The product of the numbers are: " + product);
console.log("The quotient  of the numbers are: " + quotient);

//updating values an printing 
value_1 = 500;
value_2 = 2597; 

console.log("The updated numbers are: " + value_1 + " and " + value_2 + " respectively");

// Using comparison operators
console.log("Are the numbers equal? ", value_1 === value_2 );
console.log("Is the first number greater than the second?", value_1 > value_2);
console.log("The first number is not equal to the second", value_1 !== value_2);


//using logical operators 
let isPositive = value_1 > 0 && value_2 > 0;
let isOdd = value_1 % 2 ===1  || value_2 % 2 ===0; 


console.log("Both are positive: ", isPositive);
console.log("All the numbers are even", isOdd);

