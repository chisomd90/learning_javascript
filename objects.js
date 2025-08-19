// OBJECTS - {key: value, key: value}
//descriptive
//can take in any data type
//object methods - function declaration written by the dev inside of the object

const person = {
  name: "John doe",
  age: 42,
  complexion: "dark",
  isMarried: true,
  friends: ["jane", "peter", "susan"],
  description: function () {
    return `My name is ${this.name}, and I am ${this.age}, years old and I am ${this.complexion} in complexion`;
  },
  maritalSummary: function () {
    return `${this.name} ${this.isMarried ? "is" : "is not"} married`;
  },
};
console.log(person);
console.log(person.description());
console.log(person.maritalSummary());

//get properties from object, dot notationm bracket notation
//dot notation , objectName.propertyName
//bracket notation, objectName['propertyName]

console.log(person.name);
console.log(person.name.toUpperCase());
console.log(person.friends);
console.log(person.friends[1]);

console.log(person["friends"]);
console.log(person["friends"][1]);
console.log(person["age"]);

//ad =d. new properties to an object

person.height = `6'1`;
person.gender = `Male`;
person.height = `6'1`;
person["Hobby"] = "swimming";

console.log(person);

// delete properties
delete person.complexion;

console.log(person);

//nested objects

const customer = {
  id: "Cust-1",
  personalInfo: {
    firstName: "Peter",
    lastName: "Pan",
    gender: "Male",
    dateOfBirth: "1999-06-12",
    nationality: "Nigerian",
  },
  contactInfo: {
    email: "peterpan@gmail.com",
    phone: "+2347087028470",
    address: {
      street: "!2, Bode Thomas",
      city: "Lagos",
      postalCode: "10010",
    },
  },
  accountInfo: {
    cardType: "Visa",
    accountNumber: "012345678",
    accountType: "Savings",
  },
  greeting: function () {
    return `Hello ${this.personalInfo.firstName}, Welcome Back`;
  },

  getAddress: function () {
    return `${this.personalInfo.firstName} lives at ${this.contactInfo.address.street} street, ${this.contactInfo.address.city}`;
  },
};

console.log(customer.personalInfo.dateOfBirth);
console.log(customer.contactInfo.address.street);

//adding bank name to the account info
customer.accountInfo.bankName = "GTBank";
console.log(customer.greeting());
console.log(customer.getAddress());

//complex data structure

//object destructuring - pick multiple propertiees from obj at a time

const book = {
    title: "Purple Hibiscus",
    author: "Chimamanda Ngozi Adichie",
    yearPublished: 2003,
    theme: ["Family", "Religion", "Freedom"],
    setting: {
        country: "Nigeria",
        cities: ["Enugu", "Nsukka"],
        timePeriod: "Postcolonial Nigeria",
    },
};


const {title, yearPublished, theme, setting:{country}} = book;
console.log(title, yearPublished, theme, country
    
);

