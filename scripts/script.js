"use strict";

class CheckoutItems {
  constructor(productName, productPrice) {
    this.productName = productName;
    this.productPrice = productPrice;
  }
}

class AddProducts {
  constructor() {
    this.products = [];
  }
}

const newAddProduct = new AddProducts();

function addProduct(e) {
  console.log("You clicked me!!!!");

  if (event.target.classList.contains(".cart-icon")) {
    const index = e.target.getAttribute("index");
    console.log(index);
  }
}

// e.preventDefault();
//   if (e.target.contains(".cart-icon")) {
//     console.log("You clicked me!!!!");
//   }

const cartClickListener = document.querySelector("main");
cartClickListener.addEventListener("click", addProduct);

// click on add to cart button -> add the product name & price to an empty array.
// index needs to be taken into account

// ○ The item(s) the user will buy will be added to a cart until they are ready
// for checkout.

// class checkout items
// -items need to go into an empty Array.
//     - add method - event listener (outside of the method) that will add the item to a cart page.
// - Creates a div on the cart page and users innerHTML to display items
// - Items price need to be displayed by adding them all together in the array:
// - delete button  - that removes the div from the page
//                              - update the total
// - display method for the total to show in a div at the top of the page.

// ● Provide a way for the user to check out and view their cart.
// Completed:
// created buttons already

// Need to do:

// ● Give the subtotal, sales tax, and the total.
// Subtotal = will have this as a method in the checkout class
// Create a method to take the items and show a subtotal, sales tax, and total

// ● If the user is paying in cash, ask for the amount tendered and provide change.
// take the total from the cash checkout page and display remaining.

// ● If the user is paying with a card, ask for the card number, expiration, and CVV.
// Done

// ● Provide a receipt for the payment which includes the item(s) bought, the
// subtotal, total, and anything else of interest.

// Create a modal when Submit button is pushed
// create a modal function that adds in the other functions and displays them.

// ● A stretch goal is to implement validation for credit card numbers...
// Might be an HTML thing that we can look into.

// class Item {
//   constructor(name, description, category, price) {
//     this.name = name;
//     this.description = description;
//     this.category = category;
//     this.price = price;
//   }
// }

const cashSubmit = document.querySelector("#cash");

document.querySelector("#cash").addEventListener("submit", showModal);

function showModal(event) {
  ".pop-up-showModal".style.display = "flex";
}

const creditSubmit = document.querySelector("#credit");

document.querySelector("#credit").addEventListener("submit", showModal);
