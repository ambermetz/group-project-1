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

const cartClickListener = document.querySelector("main");
cartClickListener.addEventListener("click", addProduct);

// e.preventDefault();
//   if (e.target.contains(".cart-icon")) {
//     console.log("You clicked me!!!!");
//   }

// Cart Modal

const cartSubmit = document.querySelector("#submitCart");

document.querySelector("#submitCart").addEventListener("click", cartModalHandler);

function cartModalHandler(e) {
  e.preventDefault();
  document.querySelector("#cart-modal").style.display = "flex";
}

// Cash Modal

const cashSelection = document.querySelector("#cash-payment-modal");

document
  .querySelector("#cart-modal")
  .addEventListener("click", cashModalHandler);

function cashModalHandler(e) {
  e.preventDefault();
  document.querySelector("#cash-payment-modal").style.display = "flex";
  document.querySelector("#cart-modal").style.display = "none";
}
// // Credit Modal

const creditSelection = document.querySelector("#credit-payment-modal");

document.querySelector("#cart-modal").addEventListener("click", creditModalHandler);

function creditModalHandler(e) {
  e.preventDefault();
  document.querySelector("#credit-payment-modal").style.display = "flex";
  document.querySelector("#cart-modal").style.display = "none";
}

////RECEIPT MODAL

const cashReceipt = document.querySelector(".pop-up-modal");
document.querySelector(".checkout-cash-modal").addEventListener("submit", showModal);



const creditReceipt = document.querySelector(".pop-up-modal");
document.querySelector(".checkout-credit-modal").addEventListener("submit", showModal);

function showModal(e) {
  e.preventDefault();
  console.log("this was clicked");
  document.querySelector(".pop-up-modal").style.display = "flex";
  document.querySelector("#credit-payment-modal").style.display = "none";
  document.querySelector("#cash-payment-modal").style.display = "none";
}



// END OF RECEIPT MODAL

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
//
