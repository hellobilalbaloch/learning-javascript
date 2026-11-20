// Memory 

// Stack (Primitive) and Heap(Non-Primitive).

let myUserName = "mbilalbaloch";
let anotherUserName = myUserName;
anotherUserName = "hellobilalbaloch";

console.log(anotherUserName);

let user = {
  userName: "mbilalbaloch",
  email: "username@amazon.com", 
  isLoggedIn: true
}

let user2 = user;

user2.email = "bilalbaloch@amazon.com";

/* in reference type, if we change the value of user2,
 it will also change the value of user because both
 are pointing to the same object in memory. */