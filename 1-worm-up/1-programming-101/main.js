console.log("Hello, World!");
console.log("Welcome to the world of JavaScript!");

const a = 10
const b = 20

const sum = a + b
console.log("sum:", sum)

const multiply = a * b
console.log("multiply:", multiply)



// Difference between "const" and "let"



// 1. const: 
// Definition:- once a variable is declared with const, its value cannot be changed.

// Example:

// const x = 20;
// const x = 30;

// so once you try to reassign a value of x it will throw an error because x is declared as a constant variable.





// 2. let:
// Definition: once a variable is declared with let, its value can be changed.
// Example:

let y = 20;
y = 30;
console.log("y:", y);

// in above example we assigned a let y wiht value 20, then we resassigned it with value 30, so our output will be the 30



// let try with some other expamples

let firstName = "Akash"
let lastName = 8

console.log(firstName + lastName)


let arr = [1, 2, 3, 4, 5]
let arrSum = arr[2] + arr[4]
console.log("arrSum:", arrSum)