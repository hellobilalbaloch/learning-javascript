// Variable and constant
const accountId = 57892;
let accountEmail = "bilalbalochwork@google.com";
var accountPassword = "shelovescake";
accountCity = "Hyderabad";
let accountState;

// accountId = 3; wrong X, cannot change the value of constants not allowed...

accountEmail = "muhammadbb@gmail.com" // can do this because this is allowed we can change the value of variables.
accountPassword = "shehatesme";
accountCity = "Lahore";

/*
Perfer not use var...
because of issue in block scope and functional scope.
*/

console.log(accountId, accountEmail, accountPassword, accountCity);
