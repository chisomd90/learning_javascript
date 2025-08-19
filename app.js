const africanCountries = ["Ghana", "Nigeria", "Togo", "South Africa", "Liberia"];
console.log(africanCountries);

console.log(africanCountries.includes("Tanzania"));
console.log(africanCountries.length);


africanCountries.unshift("Senegal");
console.log(africanCountries);

africanCountries.push("Zimbabwe");
console.log(africanCountries);

const accToDesc = africanCountries.sort();
console.log(accToDesc);
console.log(accToDesc.reverse());


const joinCountries = africanCountries.concat((["China", "Japan"]));
console.log(joinCountries);

const getUser = africanCountries.find((user) => user.startsWith("T"));
console.log(getUser);


const getAllUser = africanCountries.filter((user) => user.length > 5);
console.log(getAllUser);


africanCountries.map((africanCountries) => {
  console.log(africanCountries.toUpperCase());
});

const checkCountries = africanCountries.every((country) => country.includes("p"));
console.log(checkCountries);

const myBal = 2000;
const transactions = [200, -400, 30, 500, 1000]

const credit = transactions.filter((credits) => credits > 0)
console.log(credit);

const debit = transactions.filter((debits) => debits > 0);
console.log(debit);

const checkBal = credit.some((cre) => cre > myBal);
console.log(checkBal);

const totalTransaction = transactions.reduce((acc, curr) => acc + curr, myBal);
console.log(totalTransaction);


