import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import CodeAssistant from "./pages/CodeAssistant";
import ImageGenerator from "./pages/ImageGenerator";

// -------------------------
// PROTECTED ROUTE
// -------------------------

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  // -------------------------
  // CART
  // -------------------------

  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("mindly-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "mindly-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );
  };

  const updateQuantity = (productId, quantity) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // -------------------------
  // AUTHENTICATION
  // -------------------------

  const [user, setUser] = useState(() => {
    try {
      const savedUser =
        localStorage.getItem("mindly-user");

      return savedUser
        ? JSON.parse(savedUser)
        : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "mindly-user",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem("mindly-user");
    }
  }, [user]);

  // Login
  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  // Logout
  const handleLogout = () => {
    setUser(null);

    localStorage.removeItem("mindly-token");
    localStorage.removeItem("mindly-user");
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* ---------------- HOME ---------------- */}

        <Route
          path="/"
          element={
            <Home
              cart={cart}
              user={user}
              onLogout={handleLogout}
            />
          }
        />

        {/* ---------------- SHOP ---------------- */}

        <Route
          path="/shop"
          element={
            <Shop
              cart={cart}
              addToCart={addToCart}
            />
          }
        />

        {/* ---------------- PRODUCT ---------------- */}

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
            />
          }
        />

        {/* ---------------- CART ---------------- */}

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />

        {/* ---------------- CHECKOUT ---------------- */}

        <Route
          path="/checkout"
          element={
            <ProtectedRoute user={user}>
              <Checkout
                cart={cart}
                clearCart={clearCart}
              />
            </ProtectedRoute>
          }
        />
	
	{/* ---------------- AI CHAT ---------------- */}

<Route
  path="/chat"
  element={
    <ProtectedRoute user={user}>
      <Chat />
    </ProtectedRoute>
  }
/>

{/* ---------------- CODE AI ---------------- */}

<Route
  path="/code-assistant"
  element={
    <ProtectedRoute user={user}>
      <CodeAssistant />
    </ProtectedRoute>
  }
/>

{/* ---------------- IMAGE GENERATOR ---------------- */}

<Route
  path="/image-generator"
  element={
    <ProtectedRoute user={user}>
      <ImageGenerator />
    </ProtectedRoute>
  }
/>

        {/* ---------------- LOGIN ---------------- */}

        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/" replace />
            ) : (
              <Login
                onLogin={handleLogin}
              />
            )
          }
        />

        {/* ---------------- REGISTER ---------------- */}

        <Route
          path="/register"
          element={
            user ? (
              <Navigate to="/" replace />
            ) : (
              <Register
                onLogin={handleLogin}
              />
            )
          }
        />

        {/* ---------------- 404 ---------------- */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;