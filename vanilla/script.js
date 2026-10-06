// ===== The cart is just a list (array) of items =====
let cart = [];

// Runs when someone clicks "Add to cart"
function addToCart(name, price) {
  cart.push({ name: name, price: price });
  updatePage(); // IMPORTANT: we must call this every time the cart changes
}

// Runs when someone clicks the ✕ button in the cart
function removeFromCart(index) {
  cart.splice(index, 1); // remove 1 item at this position
  updatePage();          // ...and call it here too
}

// Redraws the cart by hand. If we forget a part, the page shows wrong info.
function updatePage() {
  // 1. Work out the total price
  let total = 0;
  for (let item of cart) {
    total = total + item.price;
  }

  // 2. Update the number and price in the top bar
  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("cart-total").textContent = total;

  // 3. Update the total inside the cart panel
  document.getElementById("side-total").textContent = total;

  // 4. Rebuild the cart list from scratch
  let list = document.getElementById("cart-list");
  list.innerHTML = "";

  if (cart.length === 0) {
    list.innerHTML = "<li class='empty'>Your cart is empty</li>";
  }

  for (let i = 0; i < cart.length; i++) {
    list.innerHTML +=
      "<li>" + cart[i].name + " - ₹" + cart[i].price +
      " <button onclick='removeFromCart(" + i + ")'>✕</button></li>";
  }
}

// Show the empty-cart message when the page first loads
updatePage();
