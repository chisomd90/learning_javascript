//REST AND SPREAD OPERATOR
// ...
// REST OPERATOR
// used in destructuring to collect remaining values

const countries = ["Brazil", "Russia", "Japan", "Togo", "Portugal"];
const [first,,, ...others] = countries;
console.log(others);


const user = {
    name: 'John Doe',
    age: 32,
    gender: "Male",
    isMarried: true,
};

const {isMarried, age, ...left} = user;
console.log(left);



// Spreadm operator ...
// used in unpacking values
// ===

const updatedUser = {
    ...user,
    country: "Nigeria",
};
console.log(updatedUser);

const developingCountries = ["Mali", ...countries, "Iran", "India"];
console.log(developingCountries);

const nums = [5,7,9,3,7];

console.log(Math.max(...nums)); //math.max(5,7,9,3,7)


// Optional chaining
user?.profilePicture;



//nullish coalescence - allows us to provide default values if a variable equals to null or undefined

const profilePicture = null;

console.log(profilePicture || "default avatar");


