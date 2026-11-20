// Strings. 

// const name = "Bilal Baloch"; 
const repoCount = 2;

const messagetoUser = `Hello, ${name} you have ${repoCount} repos.` // perfer this to use when adding string because it is modern rather than to use + (perferable syntax.)

console.log(messagetoUser);

let gameName = new String("CallOfDuty");

console.log(gameName[4]) // Access string using key value pair, this is syntax
console.log(gameName.length); // Giving length of string or how much character are there!
console.log(gameName.toUpperCase()); // convert all letters to uppercase
console.log(gameName.toLowerCase());  // convert all letters to lowercase
console.log(gameName.charAt(4)) // telling in gameName which character is at 4th position 
console.log(gameName.indexOf('O')) // telling O is at which position. 

let newString = gameName.substring(0, 4); // last one value doesnt include but first one do
console.log(newString);

const anotherString = gameName.slice(0,7)
console.log(anotherString);

let newString1 = "  hitesh  "
console.log(newString1);
console.log(newString1.trim()); // replace spaces because sometime we do not want intentionally the extra spaces.

let url = "https://bilal-baloch-personal.vercel.app/bilal%20balochproject"
console.log(url.replace('%20' , '-'))

console.log(url.includes('baloch'));

console.log(url.split('-'))


// Practice after lecture

let userName = "bilalbaloch_02";

// if i want to check length of user name. 

console.log(userName.length); // will give me length

// if i want to change the whole user name into upperCase or LowerCase. 

console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

// if i want name from user name than 

let name = userName.substring(0 , 5)
console.log(name); // prints bilal 

// let say for userName it become 03 mistakenly now, 
userName = "bilalbaloch_03";

isLoggedIn = false; // because user name become 03 in end. 

// To fix lets see replace method of string. 

let replacementFixOfUserName = userName.replace("03", "02")
console.log(replacementFixOfUserName); // fixed