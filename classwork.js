// EXAMPLE 1

let totalScoreA = 96 + 108 + 89;
let avgA = totalScoreA / 3;

let totalScoreB = 88 + 91 + 110;
let avgB = totalScoreB / 3;

console.log(`Average score of A is ${avgA}`);
console.log(`Average score of B is ${avgB}`);

if (avgA > avgB) {
  console.log(`Team A wins with an average score of ${avgA}`);
} else if (avgB > avgA) {
  console.log(`Team B wins with an average score of ${avgB}`);
} else {
  console.log("It's a draw");
}

// EXAMPLE 2

let userbal = 400;

let usrItem1 = 120;
let usrItem2 = 80;
let usrItem3 = 150;

let totalCost = usrItem1 + usrItem2 + usrItem3;

console.log(`Total cost of items is ${totalCost}`);

totalCost <= userbal
  ? console.log("You can checkout")
  : console.log("Insufficent bal");

// EXAMPLE 3

let movieRating = 18;
const userAge = 17;

userAge >= movieRating
  ? console.log("You can watch the movie")
  : console.log("You are not old enough to watch this movie");


  //EXAMPLE 4

  let ticketPrice = 150;
  let userBal = 120;
  let discountAmt = 30;
  let userFanStatus = false;
  let priceAfterDiscount = ticketPrice - discountAmt;
  


  userFanStatus === true ? console.log(`Ticket price is ${priceAfterDiscount}`) : console.log(`Ticket price is ${ticketPrice}`);
 
  

  !userFanStatus && userBal >= ticketPrice || userFanStatus && userBal >= priceAfterDiscount ? console.log("You can buy the football ticket") : console.log("You do not have enough money for the football ticket");



  //EXAMPLE 4

  const jacketPrice = 250
  const dicountJacket = 50
  let userbal1 = 200
  const priceAfterDiscount2 = jacketPrice - dicountJacket

  userbal1 >= jacketPrice ? console.log("You can buy the jacket") : console.log("You do not have enough money to buy the jacket");
  
  //EXAMPLE 5

  const minimumAge = 16
  const studAge = 15

  studAge >= minimumAge ? console.log("You are eligible for a driving license") : console.log("You are not eligible for a driving license yet");
  
  