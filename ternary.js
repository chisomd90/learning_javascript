//ternary operators
// condition ? first action : second action

let otpSent = 4578;
let optEntered = 4578;

optEntered === otpSent ? console.log("Transaction completed") : console.log("Wrong OTP");


//example

let num = 41

num % 2 === 0 ? console.log("EVEN NUMBER") : console.log("ODD NUMBER");


let balance = 8000;
let amount = 8000;

amount <= balance ? console.log("TRANSACTION SUCESSFUL") : console.log("INSUFFICIENT BALANCE");


const isMarried = false;

//He is married or he is not married

const statement = `He ${isMarried ? "is" : "is not"} married`;
console.log(statement);