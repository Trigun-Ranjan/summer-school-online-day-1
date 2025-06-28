// 2. Hoisting Demo

// Hoisting with var
console.log(x); // undefined
var x = 5;

// Hoisting with let
console.log(y); //  ReferenceError: Cannot access 'y' before initialization
let y = 10;