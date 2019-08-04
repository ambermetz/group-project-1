class Products {
  constructor() {
    this.products = [];
  }

  add(
    productName,
    productPrice,
    productDescription,
    productCategory,
    productClick
  ) {
    let newProduct = new Items(
      productName,
      productPrice,
      productDescription,
      productCategory,
      productClick
    );
    this.products.push(newProduct);
  }

  display() {
    document.querySelector("#productsList").innerHTML = "";
    newProduct.products.forEach((product, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p class="productName">${product.productName}</p>
        <p class="productPrice">${product.productPrice}</p>
        <p>${product.productDescription}</p>
        <p>Category: ${product.productCategory}</p>
        <button class="butard" onclick=${
          product.productClick
        } index="${index}">Add to Cart</button>
        `;
      document.querySelector("#productsList").append(div);
    });
  }
  totalPrice(productPrice) {
    let total = productPrice;
    let salesTax = 0.06;
    let subtotal = total * salesTax;
  }
}

// document
//   .querySelector("button")
//   .addEventListener("click", buttonClickedHandler);

// const addProductButton = document.querySelector("#addToCart");
// addProductButton.addEventListener("click", addToCartHandler);

class Items {
  constructor(
    productName,
    productPrice,
    productDescription,
    productCategory,
    productClick
  ) {
    this.productName = productName;
    this.productPrice = Number(productPrice);
    this.productDescription = productDescription;
    this.productCategory = productCategory;
    this.productClick = productClick;
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
  "Something Else",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras"
);
newProduct.add(
  "Something Else",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras"
);
newProduct.add(
  "Something Else",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras",
  "handleClick()"
);
newProduct.add(
  "Something Else",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras"
);
newProduct.add(
  "Something Else",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras"
);
newProduct.add(
  "Something Else",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras"
);
newProduct.add(
  "Something Else",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras"
);
newProduct.add(
  "Something Else",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras"
);
newProduct.add(
  "Something Else",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras"
);
newProduct.add(
  "Something Else",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras"
);
newProduct.add(
  "Something Else",
  "500",
  "This really awesome camera was actually owned by Marilyn Monroe! Seriously. If you don't buy it now you'll probably regret it for the rest of your life.",
  "Cameras"
);

function display(list, location) {
  document.querySelector(location).innerHTML = "";
  for (let item of list) {
    const div = document.createElement("div");
    // div.classList.add();
    div.innerHTML = `
          <p> ${item.name} $${item.price}</p>
          `;
    document.querySelector(location).append(div);
  }
}

function addToCartHandler() {
  event.preventDefault();
  console.log("I was clicked");

  console.log(PRODUCT_NAME);

  const section = document.createElement("section");
  section.innerHTML = `
      <p>${PRODUCT_NAME}</p>
      <p>${newProduct.productPrice}</p>
          `;
  console.log(section);
  // document.querySelector("#productsCart").append(section);
}

// console.log(newProduct);
newProduct.display();

let shoppingCart = [];
let obj = {};

function addToCart(pname, pprice) {
  obj["name"] = pname;
  obj["price"] = pprice;
  shoppingCart.push(obj);

  console.log(shoppingCart);
}

let name = document.querySelector(".productName").innerHTML;
let price = document.querySelector(".productPrice").innerHTML;
const buttons = document.getElementsByClassName("butard");

for (var i = 0; i < buttons.length; i++) {
  var self = buttons[i];

  self.addEventListener(
    "click",
    function(event) {
      event.preventDefault();

      addToCart(name, price);
    },
    false
  );
}

// Cart Modal

// `const cartSubmit = document.querySelector("#submitCart");

// document
//   .querySelector("#submitCart")
//   .addEventListener("click", cartModalHandler);

// function cartModalHandler(e) {
//   e.preventDefault();
//   document.querySelector("#cart-modal").style.display = "flex";
// }

// // Cash Modal

// const cashSelection = document.querySelector("#cash-payment-modal");
// document
//   .querySelector("#cart-modal")
//   .addEventListener("click", cashModalHandler);
// function cashModalHandler(e) {
//   e.preventDefault();
//   document.querySelector("#cash-payment-modal").style.display = "flex";
//   document.querySelector("#cart-modal").style.display = "none";
// }
// const creditSelection = document.querySelector("#credit-payment-modal");

// document
//   .querySelector("#cart-modal")
//   .addEventListener("click", creditModalHandler);
// function creditModalHandler(e) {
//   e.preventDefault();
//   document.querySelector("#credit-payment-modal").style.display = "flex";
//   document.querySelector("#cart-modal").style.display = "none";
// }
// const cashReceipt = document.querySelector("#receipt-modal");
// document
//   .querySelector(".checkout-cash-modal")
//   .addEventListener("submit", showModal);

// const creditReceipt = document.querySelector("#receipt-modal");
// document
//   .querySelector(".checkout-credit-modal")
//   .addEventListener("submit", showModal);

// function showModal(e) {
//   e.preventDefault();
//   document.querySelector("#receipt-modal").style.display = "flex";
//   document.querySelector("#credit-payment-modal").style.display = "none";
//   document.querySelector("#cash-payment-modal").style.display = "none";
// }
