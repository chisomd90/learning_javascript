// Asynchronous JS
// non-blocking code

console.log("A");

setTimeout(() => {
    console.log("B");
}, 5000);

console.log("C");

//a c b


// fetch DATA from an external source

// API - application programming interface

const url = "https://jsonplaceholder.typicode.com/users";


// callbacks (.then) async/await
//PPROMISES - pending fulfiled()


//json - javascript object notation

const fetchUsers = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.log(error);
         
    }
};
fetchUsers();


const productUrl = "https://fakestoreapi.com/products";



const fecthProducts = async () => {
   try {
     const response = await fetch(productUrl);
     const data = await response.json();
     console.log(data);
    
   } catch (error) {
    console.log(error);
   }
};

fecthProducts();