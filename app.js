const cart = [
  { title: "Headphones", price: 200, quantity: 2 },
  { title: "Laptop", price: 1000, quantity: 1 },
  { title: "Mouse", price: 50, quantity: 3 },
  { title: "AirPods", price: 400, quantity: 2 },
  { title: "TV", price: 1200, quantity: 2 },
];
// total amount
// 1. Write a function that prints out the title of each product in the cart array.
const printTitle = () => {
  cart.map((product) => {
    console.log(product.title);
  });
};
printTitle();

// 2. Write a function that calculates the total number of items (quantity) in the cart.
const totalQuantity = () => cart.reduce((acc, curr) => acc + curr.quantity, 0);
console.log(totalQuantity());

// 3. Write a function that finds and prints the most expensive product in the cart.
const mostExpensive = () => {
  let expensive = cart[0].price; //
  let myDetails;
  cart.map((product) => {
    if (product.price > expensive) {
      expensive = product.price;
      myDetails = product;
    }
  });
  return myDetails;
};
console.log(mostExpensive());

//4. Write a function that calculates the total value of the cart by multiplying the price
//and quantity for each product, and then summing up the results.

const totalValueInCart = () => {
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  return total;
};
console.log(totalValueInCart());

//5. Write a function that filters and displays products that cost more 100

//6. Write a function that checks if a certain product is in the cart
// based on its title.e.g is Laptop in the cart
const searchItemInCart = (searchTerm) => {
  const item = cart.find(
    (product) => product.title.toLowerCase() === searchTerm.toLowerCase()
  );
  if (item) {
    return item;
  } else {
    return "That item is not in your cart";
  }
};
console.log(searchItemInCart("tv"));

//7. Write a function that displays each product along with its total value (price * quantity).

const displayItemValue = () => {
  cart.forEach((product) => {
    console.log(`${product.title} costs ${product.price * product.quantity}`);
  });
};
displayItemValue();

//8. Write a function that concatenates all the
// product titles into a single string, separated by dash.
const concatTitle = () => {
  return cart.map((product) => product.title).join("-");
};
console.log(concatTitle());

//9. Write a function that checks if the cart contains
//any products that are more expensive than 70.
const checkMore70 = () => {
  return cart.some((product) => product.price > 70);
};
console.log(checkMore70());

//10. Write a function that clears the entire cart (removes all products).
const clearCart = () => [];
