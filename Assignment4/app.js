var myString = "Trigun";
let myNumber = 42;
const myBoolean = true;
let myUndefined;
let myNull = null;

console.log(typeof myString);     // string.
console.log(typeof myNumber);     // number.
console.log(typeof myBoolean);    // boolean.
console.log(typeof myUndefined);  // undefined.
console.log(typeof myNull);       // object (known quirk in JS).
   

console.log(varHoist);  // undefined (hoisted).
var varHoist = "Hoisted with var";

// console.log(letHoist); //  ReferenceError (uncomment to test).
// let letHoist = "Not hoisted with let";

//  Why? this happen
// `var` declarations are hoisted and initialized with `undefined`.
// `let` and `const` are hoisted but not initialized, causing ReferenceError.

let userName = prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));

if (userAge < 18) {
  alert(`Hey ${userName}, you’re a teen!`);
} else if (userAge >= 18 && userAge <= 60) {
  alert(`Welcome ${userName}, you’re an adult!`);
} else {
  alert(`Hello ${userName}, you’re a senior citizen!`);
}


// For loop (1 to 10)
for (let i = 1; i <= 10; i++) {
  console.log("For loop:", i);
}

// While loop (even numbers from 2 to 20)
let even = 2;
while (even <= 20) {
  console.log("While loop (even):", even);
  even += 2;
}

// Do...while loop (10 down to 1)
let countdown = 10;
do {
  console.log("Do...while loop:", countdown);
  countdown--;
} while (countdown >= 1);




// Function Declaration
function add(a, b) {
  return a + b;
}
console.log("Add:", add(5, 3));

// Function Expression
const square = function(num) {
  return num * num;
};
console.log("Square:", square(4));

// Arrow Function
const greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("Tirgun"));



function processNumber(num, callback) {
  callback(num);
}

processNumber(5, function(n) {
  console.log("Double is", n * 2);
});





let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operation (+, -, *, /):");

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
    break;
  default:
    result = "Invalid operation";
}

alert(`Result: ${result}`);
