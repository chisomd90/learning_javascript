//JAVASCRIPT FUNCTION
//reusable blocks of code that perform a specific task or return a value
// call or invoke the functiion

// a function that welcomes our user when they log in
// format
function welcomeUser() {
  console.log("Welcome User");
}

//calling a fucntion

welcomeUser();
welcomeUser();

// functions with parameteers - values that are passes to function
function welcomeUser2(user) {
  console.log(`Welcome ${user}`);
}

welcomeUser2("Season");
welcomeUser2("Daniel");
welcomeUser2("Ola");

// default parameters

function welcomeUser3(user = "anonymous") {
  console.log(`Welcome ${(user = "anonymous")}`);
}

welcomeUser3();

//function returning a value - giving back a result
// return keyword

//fucntion that return the addition of two numbers

function add(a, b) {
  return a + b;
}

let sum = add(10, 12);
console.log(sum);

// function that return the product (*) of two numbers

function product(num1, num2) {
  return num1 * num2;
}

console.log(product(67, 3));

// fucntion that returns the naira equivalent of a dollar amount passed into it
//10$ will give me (10$ * 1600)

function convertToNaira(dollarAmount) {
  return `${dollarAmount} dollars will give you ${dollarAmount}`;
}

//write a fucntion that returns the average of three numbers
function calcAvg(n1, n2, n3) {
  const avg = (n1 + n2 + n3) / 3;
  return avg;
}

console.log(calcAvg(3, 5, 7));

// write a func that calculates and returns the age of user,
// your function should take in year of birth as parameter

function calcAge(year) {
  return 2025 - year;
}

console.log(calcAge(2000));

function oddOrEven(num) {
  if (num % 2 === 0) {
    return `${num} is EVEN`;
  } else {
    return `${num} is odd`;
  }
}

console.log(oddOrEven(90));
console.log(oddOrEven(71));

// write a fucntion to check if a withdrawal is possible or not

let bal = 2000;
function withdrawalAmount(amount) {
  if (bal >= amount) {
    bal -= amount;
    return "Transaction Succesful";
  } else {
    return "Insufficient Funds";
  }
}

console.log(withdrawalAmount(1800));
console.log(bal);

//Write a function called depositAmount that performs the function of
//deposit and returns the balance of the user after the deposit

function depositAmount(amount) {
  bal += amount;
  return bal;
}
console.log(depositAmount(2000));
console.log(withdrawalAmount(1000));
console.log(bal);
console.log(withdrawalAmount(1000));
console.log(withdrawalAmount(1000));

// RETURN KEYWORD
// anycode after return is inaccesible code

function example() {
  console.log("Okay after return");
  return "hello";
  // unreachable code
}

example();

// return the first letter of every word taken in

function firstletter(word) {
  return `The first letter of the word ${word} is ${word.charAt(0)}`;
}
console.log(firstletter("IGWE"));

//function that returns the full name of a user if provided with the
//first name and last name e.g 'ola' 'john' --> Ola John

function getFullName(firstname, lastname) {
  // return firstname + " " + lastname;
  return `${firstname} ${lastname}`;
}

//function to determine the longest of two strings

console.log(getFullName("Daniel", "chisom"));

function longestString(string1, string2) {
  if (string1.length > string2.length) {
    return string1;
  } else if (string1.length < string2.length) {
    return string2;
  } else {
    return "They have the same length";
  }
}

console.log(longestString("fishes", "cat"));

//function expressions, treats function like variable
// func exp that return the square of a num

const squareNumber = function (num) {
  return num ** 2;
};

console.log(squareNumber(7));

// func exp that converst number of days to weeks, 21 days

const daysToWeeeks = function (days) {
  return days / 7;
};

// Arrow function (modern) also treats functions like variables

// arrow functions that returns the difference between two nums

const difference2 = (num1, num2) => {
  return;
};

//shorten arrow functions (only one line inside if the bkock of code)

const difference = (n1, n2) => n1 - n2;
console.log(difference(9, 6));

//HOISTING - behavior in JS where function declaraton are
// moved to the the top before the code is executed

hoistedFunc(); // this is orking because of HOISTING
function hoistedFunc() {
  console.log("I am a func dec");
}

// write an arrow func called getMaxNum that gets the maximun of two numbers

//getMaxNum(34, 67) --> 67

const getMaxNum = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return "Same Num";
  }
};

console.log(getMaxNum(5, 5));

// Write a Javascript arrow function that accepts a string as a parameter
//returns the string in all capital

const stringCaps = (text) => text.toUpperCase();

console.log(stringCaps("daniel"));

//write a fucntion called checkLoanEligibility,
// which recives an amount as a parameter and returs
//whether a user is eligibkle or not based on the criterion
//the loan amount can not be more than twice the amount of savings

let savings = 2000;

const checkLoanEligibility = (loanAmount) => {
  if (loanAmount < 2 * savings) {
    return "ELIGIBLE";
  } else {
    return "NOT ELIGIBLE";
  }
};
console.log(checkLoanEligibility(5000));

// function that returns true or false if a substring is inside a string
const containSubstring = (word1, word2) => word1.includes(word2);
console.log(containSubstring("addition", "n"));

// function that converts minutes to seconds and returns the second equivalent

const minToSec = (minutes) => `${minutes * 60} seconds`;

console.log(minToSec(2));
