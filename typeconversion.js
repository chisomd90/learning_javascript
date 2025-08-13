// TYPE CONVERSION

// const first = prompt("Enter a First Number: ");
// const second = prompt("Enter a Second Number: ");
// const total = first + second;

// console.log(first, second);
// console.log(total);




//to convert string to a number, use parseInt, Number

const mystr = "92";
console.log(typeof mystr);

const convertedNum = parseInt(mystr);
//const convertedNum = Number(mystr);


console.log(typeof convertedNum);



//to convert  number imnto string, use String constructor


const myNum = 76;
console.log(typeof myNum);

const convertedstring = String(myNum);
console.log(typeof convertedstring);


const first = "10";
const second = "10";

const total = parseInt(first) + Number(second);
console.log(total);


//TYPE COERCION(force)

const a = "5";
const b = 3;


console.log(a + b); //concatenation 53
console.log(a - b); //5
console.log(a / b); //5
console.log(a * b); //5
console.log(a - b - b + b * 2); //5

//NaN -- Not a Number


