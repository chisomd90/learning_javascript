// Conditional statement

//if (condition){
//.  lins of code to be performed
//}

//example..

if (1 < 2) {
  console.log("Ola");
}

//example 2

let balance = 6000;
let amount = 2000;

if (balance >= amount) {
  balance -= amount; //uber
  console.log("Transaction succesful, balance is " + balance);
}

// determine if the password is long enough ( >= 10)
// improve your logic check if the oassowrd contains "#" - good password

const password = "#password1234";

if (password.length >= 10 && password.includes("#")) {
  console.log("Password is strong enough");
}

// log to the console if a users age is eligible to vote

const age = 18;

if (age >= 18) {
  console.log("Your are eligible to vote");
}

// if else statement

if (9 > 7) {
  console.log("YES");
} else {
  console.log("NO");
}

if (balance >= amount) {
  balance -= amount; //uber
  console.log("Transaction succesful, balance is " + balance);
} else {
  console.log("Insufficient Funds");
}

//write an if else statement to check if a num is positive or negative

const num = 76;

if (num > 0) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}

// write an if else statement to determine if a number is odd or even
const num1 = 76;

if (num1 % 2 === 0) {
  console.log(`${num1} is an even number`);
} else {
  console.log(`${num1} is an odd number`);
}

// Multiple else if

// overpopulated >= 300, underpopulated <= 50 and balanced populateion > 50 and <300

const censusResult = 52;

if (censusResult >= 300) {
  console.log("Over Populated");
} else if (censusResult <= 50) {
  console.log("Under Populated");
} else {
  console.log("balanced population");
}

// lottery system for a company a,b,c(winner),d
const usersChoice = "a";

if (usersChoice === "c") {
  console.log("Congratulation");
} else {
  console.log("Try again");
}

// lottery system for a company a(trip to dubai),b(try again),c(winner),d(blender)

const usersChoiceB = "a";
if (usersChoiceB === "a") {
  console.log("Trip to Dubai");
} else if (usersChoiceB == "c") {
  console.log("car");
} else if (usersChoiceB === "d") {
  console.log("Blender");
} else {
  console.log("TRY AGAIN");
}

//classwork
//aged grouping

const age1 = 100;

if (age1 < 18) {
  console.log("Teenager");
} else if (age1 >= 18 && age1 <= 39) {
  console.log("Young adult");
} else {
  console.log("Adult");
}
