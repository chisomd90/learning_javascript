//MATH object
//Math
// Constant PI


//methods
// pow, min , max, round, ceil, floor, trunc, random

//power -
console.log(Math.pow(3, 2)); //exponential
console.log(Math.min(23, 4, 2, -98)); //minimun number of a set
console.log(Math.max(23, 4, 2, -98)); //maximum number of a set
console.log(Math.max(-23, -4, -2, -98)); //maximum number of a set

//round, ceil(up), floor(down), trunc(removes)
console.log(Math.round(7.55)); //normal rounding off nums
console.log(Math.ceil(91.2)); //round up
console.log(Math.floor(9.99)); // round down
console.log(Math.trunc(10.23));  //removes the dp


// random -> Generate pseudorandom nums between 0-1

console.log(Math.random());

//0-10
console.log(Math.trunc(Math.random() * 11));

//1-3
const randomNumber = Math.floor(Math.random() * 3) + 1;

//1-20
console.log(Math.trunc(Math.random() * 20));


//0-5
const customers = ["ola", "season", "pius", "Blessing", "Moshood", "Samuel"]

//pick a random lucky winner
const randomLuckyNum = Math.floor(Math.random() * customers.length);
console.log(customers[randomLuckyNum]);

//5-10

const min = 10;
const max = 50;

const rNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rNum);


