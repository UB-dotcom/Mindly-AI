import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("mindly-cart");

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart:", error);
      return [];
    }
  });

  // Save cart whenever cart changes
  useEffect(() => {
    localStorage.setItem(
      "mindly-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // Add product to cart
  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      // Product already exists
      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      // New product
      return [
        ...currentCart,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // Remove product
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    setCart((currentCart) => {
      if (quantity <= 0) {
        return currentCart.filter(
          (item) => item.id !== productId
        );
      }

      return currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity,
            }
          : item
      );
    });
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Home cart={cart} />
          }
        />

        {/* SHOP */}
       <Route
  path="/shop"
  element={
    <Shop
      cart={cart}
      addToCart={addToCart}
    />
  }
/>

        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
            />
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              clearCart={clearCart}
            />
          }
        />
	<Route
  path="/checkout"
  element={
    <Checkout
      cart={cart}
      clearCart={clearCart}
    />
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;