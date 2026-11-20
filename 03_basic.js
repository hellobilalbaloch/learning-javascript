// Datatype conversion 

let score = 33; 

console.log(typeof score);
console.log(typeof(score));

let ValueInNumber = Number(score); // converted sring into number.
console.log(typeof(ValueInNumber));
console.log(ValueInNumber);


// 33 => 33
// 33abc =>NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let isloggedIn = "bilal"; 

let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn);

// 1 => true.
// 0 => false.
// "" => false
// "bilal" => true

let someNumber = 33;

let someNumberString = String(someNumber)
console.log(someNumberString);
console.log(typeof(someNumberString));
