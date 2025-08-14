//STrInGs test characters in double or single quotes


const firstName = 'John'
const lastName = 'Doe'
const middleName = 'Peter'


// String Properties - length
console.log(firstName.length, middleName.length);

//string concactenaton (joining of strings)

const fullName = firstName + " " + lastName
console.log(fullName);
console.log(fullName.length);

//STRING METHODS - built in js functions that can work on strings
//toUpperCase, toLowerCase

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());


//startsWith, endswith, includes
console.log(fullName.startsWith("J"));
console.log(fullName.endsWith("oe"));
console.log(fullName.includes("n D"));


// replace and replaceAll
console.log(fullName.replace("o", "#"))
console.log(fullName.replaceAll("o", "#"))


const myEmail = "chisomd90@gmail.com";
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.replace("@", "*"));
console.log(myEmail.startsWith("m"));
console.log(myEmail.endsWith("google.com"));


// charAt, indexOf, lastIndexOf
console.log(myEmail.charAt(2));
console.log(myEmail.indexOf("o"));
console.log(myEmail.lastIndexOf("o"));


//concat, trim , slice, substring, substr

console.log(fullName.concat(" is my name"));


//trim removes whitespaces


const username = "    user001  "
console.log(username);
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());

//Extract portions of a string
const surname = 'Brooke';

//slice, substring (start, end, (non-inclusive))
console.log(surname.slice(2,5)); //ook
console.log(surname.substring(1));


//substr (start, number of characters)
console.log(surname.substr(2,2));


//concatenation

const author = "Chinua achebe";
const bookTitle = "Things Fall Apart";
const yearPublished = 1997;


//template literals

const summary = `The book ${bookTitle} was authored by ${author.toUpperCase}`;

const summary2 = `${author} wrote the book ${bookTitle}`;
console.log(summary2);

//quote   Tinubu said and I quote 'Let the Poor Breathe
const quote = `Tinubu said and I quote 'Let the Poor Breathe'`;
console.log(quote);

const welcometext = "hello world"
console.log(welcometext.toUpperCase());

const language = "JAVASCRIPT"
console.log(language.toLowerCase());

const hello = "Hello";
console.log(hello.charAt(0));

const greetings = "Hello world";
console.log(greetings.slice(6,11));

const msg = "I like cats";
console.log(msg.replace("cats", "dogs"))


console.log(greetings.includes("Hello"));

const sokra = "Sokratis Papastathopoulos";
console.log(sokra.length);


const nickName = "Stoney";
const favClub = "Man city";

console.log(`I am ${nickName} and my favourite club is ${favClub}`);
