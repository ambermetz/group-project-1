"use strict";

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
}

function display(location, list) {
  document.querySelector(location).innerHTML = "";
  // newProduct.products.forEach((product, index) => {
  for (let i = 0; i < newProduct.products.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
    <p>${newProduct.products[i].productName}</p>
    <p>$${newProduct.products[i].productPrice}</p>
    <p>${newProduct.products[i].productDescription}</p>
    <p>Category: ${newProduct.products[i].productCategory}</p>
    <button index='${i}' class='addToCart'>Add to Cart</button>
    `;
    document.querySelector(location).append(div);
  }
}

class Items {
  constructor(productName, productPrice, productDescription, productCategory) {
    this.productName = productName;
    this.productPrice = Number(productPrice);
    this.productDescription = productDescription;
    this.productCategory = productCategory;
  }
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

const addProductButton = document.querySelector("#productsList");
addProductButton.addEventListener("click", addToCartHandler);

function addToCartHandler(event) {
  let index = event.target.attributes[0].value;
  if (event.target.classList.contains("addToCart")) {
    let section = document.createElement("section");
    let itemContent = `<p> $${newProduct.products[index].productPrice} - ${
      newProduct.products[index].productName
    }</p>`;
    section.innerHTML = itemContent;
    let receiptItem = document.createElement("section");
    receiptItem.innerHTML = itemContent;
    document.querySelector("#productsCart").append(section);

    newProduct.total += newProduct.products[index].productPrice;

    document.querySelector("#productsTotal").innerHTML = "";
    const totalDiv = document.createElement("div");
    totalDiv.innerHTML = `
    <h1>Total<h1>
    <p>Total: $${newProduct.total}</p>
    <p>Sales Tax: ${0.06}</p>
    <p>Subtotal: $${newProduct.total * 0.06 + newProduct.total}</p>
    `;
    document.querySelector("#productsTotal").append(totalDiv);
    document.querySelector("#productsReceipt").append(receiptItem);
  }
  let subtotal = newProduct.total * 0.06 + newProduct.total;
  document.querySelector("#owed").setAttribute("value", subtotal);
  document.querySelector("#credit_owed").setAttribute("value", subtotal);
  document.querySelector("#productsReceipt").append(subtotal);
}

document.querySelector("#cashInput").addEventListener("input", cashSubmit);
function cashSubmit(event) {
  let cashInput = document.querySelector("#cashInput").value;
  let subtotal = newProduct.total * 0.06 + newProduct.total;
  console.log(Number(cashInput));
  console.log(subtotal);
  let changeOwed = Number(subtotal) - Number(cashInput);
  document.querySelector("#change").setAttribute("value", changeOwed);
}

//Disables the Amount Owed and change inputs.
document.querySelector("#owed").disabled = true;
document.querySelector("#credit_owed").disabled = true;
document.querySelector("#change").disabled = true;
