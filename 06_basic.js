// Datatypes summary. 

// Primitive Data Types

// There are 7 primitive data types in JavaScript: String, Number, BigInt, Boolean, undefined, Symbol, and null.

const score = 100; // Number
const scoreValue = 30.2; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol("123"); // Symbol
const id2 = Symbol("123"); // Symbol
console.log(id === id2) // => false

const bigNumber = 3456789012345678901234567890n; // BigInt
// Reference Data Types (Non-Primitive). 

// objects, arrays, functions.

const heros = ["Iron Man", "Spiderman", "Thor"]; // Array

let myObj = {
  name: "Bilal Baloch",
  age: 19,
  isLoggedIn: false,
}

let myFunction = function(){
  console.log("Hello World");
}