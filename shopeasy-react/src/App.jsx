import { useState } from "react";
import { products } from "./products";
import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  // STATE: React remembers the cart.
  // When the cart changes, the screen updates BY ITSELF.
  const [cart, setCart] = useState([]);

  // The total is just calculated from the cart. Nothing to keep in sync!
  let total = 0;
  for (let item of cart) {
    total = total + item.price;
  }

  function addToCart(product) {
    setCart([...cart, product]); // new cart = old items + the new one
  }

  function removeFromCart(index) {
    setCart(cart.filter((item, i) => i !== index)); // keep everything except this one
  }

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <header>
        <h1>🛒 ShopEasy</h1>
        <div className="cart-summary">
          Cart: {cart.length} items | ₹{total}
        </div>
      </header>

      {/* ===== BANNER ===== */}
      <section className="banner">
        <h2>Big Sale is ON! 🎉</h2>
        <p>Pick your favourites and add them to the cart.</p>
      </section>

      <main>
        {/* ===== PRODUCTS: one ProductCard for every product in the list ===== */}
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>

        {/* ===== CART PANEL ===== */}
        <aside>
          <h2>Your cart</h2>
          <ul>
            {cart.length === 0 && <li className="empty">Your cart is empty</li>}
            {cart.map((item, i) => (
              <li key={i}>
                {item.name} - ₹{item.price}
                <button onClick={() => removeFromCart(i)}>✕</button>
              </li>
            ))}
          </ul>
          <p className="total">Total: ₹{total}</p>
        </aside>
      </main>

      <footer>Made by Coding Club 💙</footer>
    </>
  );
}

export default App;
