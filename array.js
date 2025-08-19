//ARRAYS - elmeents
// [el1, el2, el3]

const students = ["pious", "Daniel", "moshood", "Emmanuel", "Samuel"];

// array properties
// length

console.log(students);
console.log(students.length);

//get element based on position

console.log(students[3]);
console.log(students[students.length - 1]); //last element in array

// change element in an array by sing position
students[0] = "Zach";
students[0] = "Emma";

console.log(students);

// array methods -
// add or remove elements to/from an array (push, unshift) (pop. shift)
// structure dt

console.log(students.push("Ola"));
students.push("Blessings");
students.push("Ade");

students.pop(); //end
students.shift(); //front
console.log(students);

//at, indexOf, lastIndexOf

const nums = ["a", "b", "c", "d", "e", "6"];
console.log(nums.at(0));
console.log(nums.indexOf("c"));
console.log(nums.lastIndexOf("c"));

//includes

console.log(nums.includes("A"));

// extracting portions from an array
// slice(start, end(non-inclusive))
console.log(nums.slice(0, 3));

//concat
console.log(students.concat(["jane", "peter"]));

//conversion to a string , toString, join(seperator)

console.log(students.toString());

console.log(nums.toString());
console.log(nums.join("-"));

//[]- empty array
console.log(Array.isArray([7]));
console.log(Array.from("1234"));
console.log(Array.from("abcd"));

//reverse
const grades = [1, 2, 3];
console.log(grades);
console.log(grades.reverse());

//complex array methods - higher array methods
// because they take anothr fns=ction to tell them what to do
// for Each, map, find, sort, filter, every, some, reduce

const transaction = [1000, -200, 3000, -2500, 600];
const users = ["ade", "john", "peter"];

//forEach - loop through this array - perform an action
transaction.forEach((transaction) => {
  console.log(transaction * 2);
});

users.forEach((user) => {
  console.log(user.toUpperCase());
});

//map - loop through this array - perform an action and returns the new array

const letterFromUsers = users.map((user) => user.charAt(0));
console.log(letterFromUsers);

const newTransactions = transaction.map((transaction) => transaction / 10);
console.log(newTransactions);

//FIND and  FILTER

//find, returns the first element that passes a search conditiion
const bestUser = users.find((user) => user.startsWith("a"));
console.log(bestUser);

const greaterThan500 = transaction.find((transaction) => transaction > 500);

//filter - returns every elements that passes a search condition

const aUsers = users.filter((user) => user.startsWith("a"));
console.log(aUsers);

const debits = transaction.filter((transaction) => transaction < 0);
console.log(debits);

//sort - arranges elements in an array
console.log(users.sort());

//when using sort with number we need to write a compare function

const specialNumbers = [11, 2, 3, 22, 34, 14, 1];
const lowToHigh = specialNumbers.sort((a, b) => a - b);
console.log(lowToHigh);

const highToLow = specialNumbers.sort((a, b) => b - a);
console.log(highToLow);

//every - some reduce
const allGreaterThan10 = specialNumbers.every((num) => num > 10);
console.log(allGreaterThan10);

const someGreaterThan10 = specialNumbers.every((num) => num > 10);
console.log(someGreaterThan10);

//reduce - accumlates values in an array into one (number)
const cartprices = [10, 70, 20, 30];
//a -accumulator, b-current value

const totalPrice = cartprices.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(totalPrice);
