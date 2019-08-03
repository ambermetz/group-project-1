"use strict";

// class CheckoutItems {
//   constructor(productName, productPrice) {
//     this.productName = productName;
//     this.productPrice = productPrice;
//   }
// }

// class ShoppingCart {
// //   constructor() {
//     this.cart = [];
//     this.total = 0;
//     this.salesTax = 0.06;
//     this.subTotal = 0;
//   }
//   addItemToCart(productName, productPrice) {
//     const newProduct = new CheckoutItems(productName, productPrice);
//     this.cart.push(newProduct);

//     // index needs to be taken into account
//   }
//   displayProduct() {
//     // - Creates a div on the cart page and users innerHTML to display items
//     // ● Provide a receipt for the payment which includes the item(s) bought, the subtotal, total
//   }
//   total() {
//     this.total += productPrice;
//     console.log(this.total);

//     this.subTotal += this.total * this.salesTax;
// //   }

// //   changeAmount() {
//     // ● If the user is paying in cash, ask for the amount tendered and provide change.
//     // take the total from the cash checkout page and display remaining.
//   }
// }

// const findIndex = document.querySelector(".productName");
// const productName = findIndex.textContent;
// console.dir(findIndex);

// // const newShoppingCart = new ShoppingCart();
// // console.dir(newShoppingCart);
// // newShoppingCart.cart(productName, productPrice);

// const cartClickListener = document.querySelector(".cart-icon");
// cartClickListener.addEventListener("click", clickCartIconHandler);

// function clickCartIconHandler() {
//   // console.log("You clicked me!!!!");
//   // const productName = event.target[0].value;
//   // const productPrice = event.target[].value;

//   addressBook.add(productName, productPrice);

//   addressBook.display();
//   if (event.target.classList.contains(".cart-icon")) {
//     const index = e.target.getAttribute("index");
//     // }
// }

// newShoppingCart.addItemToCart("test", "test");

// const div = document.createElement("div");
// div.innerHTML = `
//     <p>This is working</p>
//     `;
// document.querySelector(".productName").append("#cart-modal");

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
// // Credit Modal

const creditSelection = document.querySelector("#credit-payment-modal");

document
  .querySelector("#cart-modal")
  .addEventListener("click", creditModalHandler);

function creditModalHandler(e) {
  e.preventDefault();
  document.querySelector("#credit-payment-modal").style.display = "flex";
  document.querySelector("#cart-modal").style.display = "none";
}

////RECEIPT MODAL

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

// END OF RECEIPT MODAL

const products = {
  camera: {
    id: "camera",
    productImage: "assets/camera.jpg",
    productImageAlt: "old camera",
    productName: "Snazzy Old Camera",
    productPrice: 500,
    productDescription: `This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.`,
    productCategory: "Cameras"
  },
  clock: {
    id: "clock",
    productImage: "assets/coffeeclock.jpg",
    productImageAlt: "rustic coffee clock",
    productName: "Coffee Grinder Clock",
    productPrice: 100,
    productDescription:
      "How often have you wanted to know the time while you are grinding your coffee?  Wonder no more with this antique Coffee Grinder/Clock combo.",
    productCategory: "Multi-Purpose"
  },
  dohicky: {
    id: "dohicky",
    productImage: "assets/dohicky.jpg",
    productImageAlt: "dohicky",
    productName: "Thing-a-ma-jig",
    productPrice: 200,
    productDescription:
      "The only thing that we know is that this thing looks cool and anyone that owns it is immediately 20% cooler.",
    productCategory: "Other"
  },
  fan: {
    id: "oldFan",
    productImage: "assets/fan.jpg",
    productImageAlt: "old fan",
    productName: "Hot-Hot Fan",
    productPrice: 50,
    productDescription:
      "This original Hot-Hot Fan will keep you nice and cool-cool. What more could you want!?",
    productCategory: "Home Goods"
  },
  microphone: {
    id: "microphone",
    productImage: "assets/microphone.jpg",
    productImageAlt: "microphone",
    productName: "Old School Microphone",
    productPrice: 55,
    productDescription:
      "Use it to yell at your kids or pretend to do some morning announcements.",
    productCategory: "Office Supplies"
  },
  receiptPrinter: {
    id: "receiptPrinter",
    productImage: "assets/noidea.jpg",
    productImageAlt: "receipt printer",
    productName: "Receipt Printer",
    productPrice: 95,
    productDescription:
      "For when you want to provide proof of purchase the hard way.",
    productCategory: "Office Supplies"
  },
  pencilSharpener: {
    id: "pencilSharpener",
    productImage: "assets/pencilsharpener.jpg",
    productImageAlt: "pencil sharpener",
    productName: "Pencil Sharpener",
    productPrice: 25,
    productDescription: "Don't stick your fingers inside. Pencils only.",
    productCategory: "Office Supplies"
  },
  phone: {
    id: "phone",
    productImage: "assets/phone.jpg",
    productImageAlt: "black rotary phone",
    productName: "Rotary Phone",
    productPrice: 85,
    productDescription: "Dial up your friends with style.",
    productCategory: "Office Supplies"
  },
  musicPlayer: {
    id: "musicPlayer",
    productImage: "assets/sony.jpg",
    productImageAlt: "sony music player",
    productName: "Music Player",
    productPrice: 45,
    productDescription: "Want to go back to the simpler days of ...?",
    productCategory: "Music"
  },
  boombox: {
    id: "boombox",
    productImage: "assets/stereo.jpg",
    productImageAlt: "sony boombox",
    productName: "Dope Boombox",
    productPrice: 150,
    productDescription: "That's how I became the Fresh Prince of Bel Aire.",
    productCategory: "Music"
  },
  stopwatch: {
    id: "stopwatch",
    productImage: "assets/stopwatch.jpg",
    productImageAlt: "stopwatch",
    productName: "Stopwatch",
    productPrice: 30,
    productDescription: "Time people or things that...like to be timed.",
    productCategory: "Gadget"
  },
  recorder: {
    id: "recorder",
    productImage: "tape recorder",
    productImageAlt: "tape.jpg",
    productName: "Tape Recorder",
    productPrice: 175,
    productDescription: "Record all those tapes.",
    productCategory: "Spy Tech"
  }
};
// takes an array of items and reduces it to a single value.
let productsTemplate = Object.values(products).reduce((acc, product) => {
  return (
    acc +
    `<section id="${product.id}">   
  <div class="item">
          <img alt="${product.productImageAlt}" src="${product.productImage}" />
        </div>
        <div class="itemContent">
          <p class="productName">${product.productName}</p>
          <p class="productPrice">$${product.productPrice}</p>
          <p>${product.productDescription}</p>
          <p>Category: ${product.productCategory} </p>
          <i class="fas fa-shopping-cart cart-icon"></i>
        </div>
      </section>
      `
  );
}, "");

document.querySelector("#productsList").innerHTML = productsTemplate;

// event listener

//for (const productKey of cart) {
// const prod = products[productkey]
// prod.productPrice;
// prod.productName;
// products[productkey].productPrice;
// products[productkey].productName;
// }
