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

// END OF RECEIPT MODAL

const products = {
  camera: {
    id: "camera",
    productImage: "assets/camera.jpg",
    productImageAlt: "old camera",
    productName: "Snazzy Old Camera",
    productPrice: 500,
    productDescription: `This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.`,
    productCategory: "Cameras",
    productButton: "<button value='but1'>Add to cart</button>"
  },
  clock: {
    id: "clock",
    productImage: "assets/coffeeclock.jpg",
    productImageAlt: "rustic coffee clock",
    productName: "Coffee Grinder Clock",
    productPrice: 100,
    productDescription:
      "How often have you wanted to know the time while you are grinding your coffee?  Wonder no more with this antique Coffee Grinder/Clock combo.",
    productCategory: "Multi-Purpose",
    productButton: "<button value='but2'>Add to cart</button>"
  },
  dohicky: {
    id: "dohicky",
    productImage: "assets/dohicky.jpg",
    productImageAlt: "dohicky",
    productName: "Thing-a-ma-jig",
    productPrice: 200,
    productDescription:
      "The only thing that we know is that this thing looks cool and anyone that owns it is immediately 20% cooler.",
    productCategory: "Other",
    productButton: "<button value='but3'>Add to cart</button>"
  },
  fan: {
    id: "oldFan",
    productImage: "assets/fan.jpg",
    productImageAlt: "old fan",
    productName: "Hot-Hot Fan",
    productPrice: 50,
    productDescription:
      "This original Hot-Hot Fan will keep you nice and cool-cool. What more could you want!?",
    productCategory: "Home Goods",
    productButton: "<button value='but4'>Add to cart</button>"
  },
  microphone: {
    id: "microphone",
    productImage: "assets/microphone.jpg",
    productImageAlt: "microphone",
    productName: "Old School Microphone",
    productPrice: 55,
    productDescription:
      "Use it to yell at your kids or pretend to do some morning announcements.",
    productCategory: "Office Supplies",
    productButton: "<button value='but5'>Add to cart</button>"
  },
  receiptPrinter: {
    id: "receiptPrinter",
    productImage: "assets/noidea.jpg",
    productImageAlt: "receipt printer",
    productName: "Receipt Printer",
    productPrice: 95,
    productDescription:
      "For when you want to provide proof of purchase the hard way.",
    productCategory: "Office Supplies",
    productButton: "<button value='but6'>Add to cart</button>"
  },
  pencilSharpener: {
    id: "pencilSharpener",
    productImage: "assets/pencilsharpener.jpg",
    productImageAlt: "pencil sharpener",
    productName: "Pencil Sharpener",
    productPrice: 25,
    productDescription: "Don't stick your fingers inside. Pencils only.",
    productCategory: "Office Supplies",
    productButton: "<button value='but7'>Add to cart</button>"
  },
  phone: {
    id: "phone",
    productImage: "assets/phone.jpg",
    productImageAlt: "black rotary phone",
    productName: "Rotary Phone",
    productPrice: 85,
    productDescription: "Dial up your friends with style.",
    productCategory: "Office Supplies",
    productButton: "<button value='but8'>Add to cart</button>"
  },
  musicPlayer: {
    id: "musicPlayer",
    productImage: "assets/sony.jpg",
    productImageAlt: "sony music player",
    productName: "Music Player",
    productPrice: 45,
    productDescription: "Want to go back to the simpler days of ...?",
    productCategory: "Music",
    productButton: "<button value='but9'>Add to cart</button>"
  },
  boombox: {
    id: "boombox",
    productImage: "assets/stereo.jpg",
    productImageAlt: "sony boombox",
    productName: "Dope Boombox",
    productPrice: 150,
    productDescription: "That's how I became the Fresh Prince of Bel Aire.",
    productCategory: "Music",
    productButton: "<button value='but10'>Add to cart</button>"
  },
  stopwatch: {
    id: "stopwatch",
    productImage: "assets/stopwatch.jpg",
    productImageAlt: "stopwatch",
    productName: "Stopwatch",
    productPrice: 30,
    productDescription: "Time people or things that...like to be timed.",
    productCategory: "Gadget",
    productButton: "<button value='but11'>Add to cart</button>"
  },
  recorder: {
    id: "recorder",
    productImage: "assets/tape.jpg",
    productImageAlt: "tape recorder",
    productName: "Tape Recorder",
    productPrice: 175,
    productDescription: "Record all those tapes.",
    productCategory: "Spy Tech",
    productButton: "<button value='but12'>Add to cart</button>"
  }
};
console.log(products);

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
          <p>${product.productButton}</p>
        </div>
      </section>
      `
  );
}, "");
// <button value="button1"><i class="fas fa-shopping-cart cart-icon"></i></button>
// let cart = [];

// class Cart {
//   constructor() {
//     this.cart = [];
//   }
//   add() {
//     this.cart.push(newCart);
//   }
//   // }

//   // class Prod {
//   //   constructor(addProductName, addProductPrice) {
//   //     let addProductName = addProductName;
//   //     let addProductPrice = addProductPrice;
//   //   }
// }
function clickCartIconHandler(event) {
  event.preventDefault();
  // console.log("You clicked me!!!!");
  if (event.target.value === "but1") {
    console.log("You pressed button1");
  } else if (event.target.value === "but2") {
    console.log("You pressed button2");
  } else if (event.target.value === "but3") {
    console.log("You pressed button3");
  } else if (event.target.value === "but4") {
    console.log("You pressed button4");
  } else if (event.target.value === "but5") {
    console.log("You pressed button5");
  } else if (event.target.value === "but6") {
    console.log("You pressed button6");
  } else if (event.target.value === "but7") {
    console.log("You pressed button7");
  } else if (event.target.value === "but8") {
    console.log("You pressed button8");
  } else if (event.target.value === "but9") {
    console.log("You pressed button9");
  } else if (event.target.value === "but10") {
    console.log("You pressed button10");
  } else if (event.target.value === "but11") {
    console.log("You pressed button11");
  } else if (event.target.value === "but12") {
    console.log("You pressed button12");
  }

  // for (const productKey of cart) {
  //   const prod = products[productKey];
  //   prod.productPrice;
  //   prod.productName;
  //   products[productKey].productPrice;
  //   products[productKey].productName;
  // }

  // const div = document.createElement("div");
  // div.innerHTML = `
  //     <p>${products.productName}</p>
  //     <p>${products.productPrice}</p>
  //     `;
  // document.querySelector("#cart-modal").append(div);
}

// event listener

document.querySelector("#productsList").innerHTML = productsTemplate;

const cart = document.createElement("div");

document
  .querySelector("#camera")
  .addEventListener("click", clickCartIconHandler);
document
  .querySelector("#clock")
  .addEventListener("click", clickCartIconHandler);
document
  .querySelector("#dohicky")
  .addEventListener("click", clickCartIconHandler);
document.querySelector("#fan").addEventListener("click", clickCartIconHandler);
document
  .querySelector("#microphone")
  .addEventListener("click", clickCartIconHandler);
document
  .querySelector("#receiptPrinter")
  .addEventListener("click", clickCartIconHandler);
document
  .querySelector("#pencilSharpener")
  .addEventListener("click", clickCartIconHandler);
document
  .querySelector("#phone")
  .addEventListener("click", clickCartIconHandler);
document
  .querySelector("#musicPlayer")
  .addEventListener("click", clickCartIconHandler);
document
  .querySelector("#boombox")
  .addEventListener("click", clickCartIconHandler);
document
  .querySelector("#stopwatch")
  .addEventListener("click", clickCartIconHandler);
document
  .querySelector("#boombox")
  .addEventListener("click", clickCartIconHandler);
document
  .querySelector("#recorder")
  .addEventListener("click", clickCartIconHandler);
// console.dir(newCart);
