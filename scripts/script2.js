"use strict";

// Cart Modal

const cartSubmit = document.querySelector("#submitCart");

document
  .querySelector("#submitCart")
  .addEventListener("click", cartModalHandler);

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
const creditSelection = document.querySelector("#credit-payment-modal");

document
  .querySelector("#cart-modal")
  .addEventListener("click", creditModalHandler);
function creditModalHandler(e) {
  e.preventDefault();
  document.querySelector("#credit-payment-modal").style.display = "flex";
  document.querySelector("#cart-modal").style.display = "none";
}
const cashReceipt = document.querySelector("#receipt-modal");
document
  .querySelector(".checkout-cash-modal")
  .addEventListener("submit", showModal);

const creditReceipt = document.querySelector("#receipt-modal");
document
  .querySelector(".checkout-credit-modal")
  .addEventListener("submit", showModal);

function showModal(e) {
  e.preventDefault();
  document.querySelector("#receipt-modal").style.display = "flex";
  document.querySelector("#credit-payment-modal").style.display = "none";
  document.querySelector("#cash-payment-modal").style.display = "none";
}

class Products {
  constructor() {
    this.products = [];
    this.total = 0;
  }
  add(productName, productPrice, productDescription, productCategory) {
    let newProduct = new Items(
      productName,
      productPrice,
      productDescription,
      productCategory
    );
    this.products.push(newProduct);
  }

  // totalPrice(productPrice) {
  //   let total = productPrice;
  //   let salesTax = 0.06;
  //   let subtotal = total * salesTax;
  // }
}

function display(location, list) {
  document.querySelector(location).innerHTML = "";
  newProduct.products.forEach((product, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <p>${newProduct.products[0].productName}</p>
    <p>$${newProduct.products[0].productPrice}</p>
    <p>${newProduct.products[0].productDescription}</p>
    <p>Category: ${newProduct.products[0].productCategory}</p>
    <button id="addToCart">Add to Cart</button>
    `;
    document.querySelector(location).append(div);
  });
}

// function displayItem(location, list) {
//   document.querySelector(location).innerHTML = "";
//   for (let item of list) {
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <p>${newProduct.products[0].productName}</p>
//     <p>$${newProduct.products[0].productPrice}</p>
//     <p>${newProduct.products[0].productDescription}</p>
//     <p>Category: ${newProduct.products[0].productCategory}</p>
//     <button id="addToCart">Add to Cart</button>
//     `;
//   }
// }
// array.displayItem("#example", exampleList);
// showTotals("#billBudget", budgetList.list[0].bill);

class Items {
  constructor(productName, productPrice, productDescription, productCategory) {
    this.productName = productName;
    this.productPrice = Number(productPrice);
    this.productDescription = productDescription;
    this.productCategory = productCategory;
  }
}

function addToCartHandler() {
  event.preventDefault();
  console.log("I was clicked");
  let section = document.createElement("section");
  section.innerHTML = `
  <p>${newProduct.products[0].productName}</p>
  <p>$${newProduct.products[0].productPrice}</p>
      `;
  document.querySelector("#productsCart").append(section);
}

const newProduct = new Products();
newProduct.add(
  "Snazzy old camera",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras"
);
newProduct.add(
  "Coffee Grinder Clock",
  "50",
  "How often have you wanted to know the time while you are grinding your coffee?  Wonder no more with this antique Coffee Grinder/Clock combo.",
  "Kitchen Supplies"
);
newProduct.add(
  "Dohicky",
  "75",
  "The only thing that we know is that this thing looks cool and anyone that owns it is immediately 20% cooler.",
  "Gadgets"
);
newProduct.add(
  "Blaster Fan",
  "45",
  "This original Hot-Hot Fan will keep you nice and cool-cool. What more could you want!?",
  "Household"
);
newProduct.add(
  "Microphone",
  "85",
  "Use it to yell at your kids or pretend to do some morning announcements.",
  "Office Supplies"
);
newProduct.add(
  "Receipt Printer",
  "25",
  "For when you want to provide proof of purchase the hard way.",
  "Office Supplies"
);
newProduct.add(
  "Pencil Sharpener",
  "25",
  "Don't stick your fingers inside. Pencils only.",
  "Office Supplies"
);
newProduct.add(
  "Rotary Phone",
  "65",
  "Dial up your friends with style.",
  "Home Goods"
);
newProduct.add(
  "Music Player",
  "70",
  "Want to go back to the simpler days of ...?",
  "Cameras"
);
newProduct.add(
  "Boombox",
  "250",
  "That's how I became the Fresh Prince of Bel Aire.",
  "Cameras"
);
newProduct.add(
  "Stopwatch",
  "45",
  "Time people or things that...like to be timed.",
  "Cameras"
);

display("#productsList", newProduct);
console.log(newProduct);
// newProduct.display();

const addProductButton = document.querySelector("#addToCart");
addProductButton.addEventListener("click", addToCartHandler);
