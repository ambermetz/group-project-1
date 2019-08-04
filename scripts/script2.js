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
  display() {
    document.querySelector("#productsList").innerHTML = "";
    newProduct.products.forEach((product, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
      <p>${product.productName}</p>
      <p>$${product.productPrice}</p>
      <p>${product.productDescription}</p>
      <p>Category: ${product.productCategory}</p>
      <button id="addToCart" index="${index}">Add to Cart</button>
      `;
      document.querySelector("#productsList").append(div);
    });
  }
  // totalPrice(productPrice) {
  //   let total = productPrice;
  //   let salesTax = 0.06;
  //   let subtotal = total * salesTax;
  // }
}

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
  <p>${newProduct.productName}</p>
  <p>$${newProduct.productPrice}</p>
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
// newProduct.add(
//   "Something Else",
//   "500",
//   "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
//   "Cameras"
// );
// newProduct.add(
//   "Something Else",
//   "500",
//   "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
//   "Cameras"
// );
// newProduct.add(
//   "Something Else",
//   "500",
//   "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
//   "Cameras"
// );
// newProduct.add(
//   "Something Else",
//   "500",
//   "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
//   "Cameras"
// );
// newProduct.add(
//   "Something Else",
//   "500",
//   "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
//   "Cameras"
// );
// newProduct.add(
//   "Something Else",
//   "500",
//   "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
//   "Cameras"
// );
// newProduct.add(
//   "Something Else",
//   "500",
//   "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
//   "Cameras"
// );
// newProduct.add(
//   "Something Else",
//   "500",
//   "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
//   "Cameras"
// );
// newProduct.add(
//   "Something Else",
//   "500",
//   "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
//   "Cameras"
// );
// newProduct.add(
//   "Something Else",
//   "500",
//   "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
//   "Cameras"
// );
// newProduct.add(
//   "Something Else",
//   "500",
//   "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
//   "Cameras"
// );
console.log(newProduct);
newProduct.display();

// Values need to be moved into the newProducts.add calls above

// const products = {
//     camera: {
//       id: "camera",
//       productImage: "assets/camera.jpg",
//       productImageAlt: "old camera",
//       productName: "Snazzy Old Camera",
//       productPrice: 500,
//       productDescription: `This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.`,
//       productCategory: "Cameras",
//       productButton: "<button value='but1'>Add to cart</button>"
//     },
//     clock: {
//       id: "clock",
//       productImage: "assets/coffeeclock.jpg",
//       productImageAlt: "rustic coffee clock",
//       productName: "Coffee Grinder Clock",
//       productPrice: 100,
//       productDescription:
//         "How often have you wanted to know the time while you are grinding your coffee?  Wonder no more with this antique Coffee Grinder/Clock combo.",
//       productCategory: "Multi-Purpose",
//       productButton: "<button value='but2'>Add to cart</button>"
//     },
//     dohicky: {
//       id: "dohicky",
//       productImage: "assets/dohicky.jpg",
//       productImageAlt: "dohicky",
//       productName: "Thing-a-ma-jig",
//       productPrice: 200,
//       productDescription:
//         "The only thing that we know is that this thing looks cool and anyone that owns it is immediately 20% cooler.",
//       productCategory: "Other",
//       productButton: "<button value='but3'>Add to cart</button>"
//     },
//     fan: {
//       id: "oldFan",
//       productImage: "assets/fan.jpg",
//       productImageAlt: "old fan",
//       productName: "Hot-Hot Fan",
//       productPrice: 50,
//       productDescription:
//         "This original Hot-Hot Fan will keep you nice and cool-cool. What more could you want!?",
//       productCategory: "Home Goods",
//       productButton: "<button value='but4'>Add to cart</button>"
//     },
//     microphone: {
//       id: "microphone",
//       productImage: "assets/microphone.jpg",
//       productImageAlt: "microphone",
//       productName: "Old School Microphone",
//       productPrice: 55,
//       productDescription:
//         "Use it to yell at your kids or pretend to do some morning announcements.",
//       productCategory: "Office Supplies",
//       productButton: "<button value='but5'>Add to cart</button>"
//     },
//     receiptPrinter: {
//       id: "receiptPrinter",
//       productImage: "assets/noidea.jpg",
//       productImageAlt: "receipt printer",
//       productName: "Receipt Printer",
//       productPrice: 95,
//       productDescription:
//         "For when you want to provide proof of purchase the hard way.",
//       productCategory: "Office Supplies",
//       productButton: "<button value='but6'>Add to cart</button>"
//     },
//     pencilSharpener: {
//       id: "pencilSharpener",
//       productImage: "assets/pencilsharpener.jpg",
//       productImageAlt: "pencil sharpener",
//       productName: "Pencil Sharpener",
//       productPrice: 25,
//       productDescription: "Don't stick your fingers inside. Pencils only.",
//       productCategory: "Office Supplies",
//       productButton: "<button value='but7'>Add to cart</button>"
//     },
//     phone: {
//       id: "phone",
//       productImage: "assets/phone.jpg",
//       productImageAlt: "black rotary phone",
//       productName: "Rotary Phone",
//       productPrice: 85,
//       productDescription: "Dial up your friends with style.",
//       productCategory: "Office Supplies",
//       productButton: "<button value='but8'>Add to cart</button>"
//     },
//     musicPlayer: {
//       id: "musicPlayer",
//       productImage: "assets/sony.jpg",
//       productImageAlt: "sony music player",
//       productName: "Music Player",
//       productPrice: 45,
//       productDescription: "Want to go back to the simpler days of ...?",
//       productCategory: "Music",
//       productButton: "<button value='but9'>Add to cart</button>"
//     },
//     boombox: {
//       id: "boombox",
//       productImage: "assets/stereo.jpg",
//       productImageAlt: "sony boombox",
//       productName: "Dope Boombox",
//       productPrice: 150,
//       productDescription: "That's how I became the Fresh Prince of Bel Aire.",
//       productCategory: "Music",
//       productButton: "<button value='but10'>Add to cart</button>"
//     },
//     stopwatch: {
//       id: "stopwatch",
//       productImage: "assets/stopwatch.jpg",
//       productImageAlt: "stopwatch",
//       productName: "Stopwatch",
//       productPrice: 30,
//       productDescription: "Time people or things that...like to be timed.",
//       productCategory: "Gadget",
//       productButton: "<button value='but11'>Add to cart</button>"
//     },
//     recorder: {
//       id: "recorder",
//       productImage: "assets/tape.jpg",
//       productImageAlt: "tape recorder",
//       productName: "Tape Recorder",
//       productPrice: 175,
//       productDescription: "Record all those tapes.",
//       productCategory: "Spy Tech",
//       productButton: "<button value='but12'>Add to cart</button>"
//     }

const addProductButton = document.querySelector("#addToCart");
addProductButton.addEventListener("click", addToCartHandler);
