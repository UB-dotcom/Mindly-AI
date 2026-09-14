const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const pool = require("./db");

const app = express();

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mindly-ai-phi.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

// ========================================
// AUTH MIDDLEWARE
// ========================================

function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
}


// ========================================
// ROOT
// ========================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Mindly AI Backend is Working 🚀",
  });
});


// ========================================
// HEALTH CHECK
// ========================================

app.get("/api/health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      success: true,
      message: "API and PostgreSQL are working 🚀",
      databaseTime: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database error:", error.message);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});


// ========================================
// REGISTER
// ========================================

app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [normalizedEmail]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await pool.query(
      `INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, name, email, created_at`,
      [
        name.trim(),
        normalizedEmail,
        hashedPassword,
      ]
    );
const user = result.rows[0];

const token = jwt.sign(
  {
    id: user.id,
    email: user.email,
  },
  JWT_SECRET,
  {
    expiresIn: "7d",
  }
);

res.status(201).json({
  success: true,
  message: "Account created successfully.",
  token,
  user,
});

  } catch (error) {
    console.error("Register error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to create account.",
    });
  }
});


// ========================================
// LOGIN
// ========================================

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    // Find user
    const result = await pool.query(
      `SELECT id, name, email, password, created_at
       FROM users
       WHERE email = $1`,
      [normalizedEmail]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const user = result.rows[0];

    // Verify password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Remove password before response
    delete user.password;

    res.json({
      success: true,
      message: "Login successful.",
      token,
      user,
    });

  } catch (error) {
    console.error("Login error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to login.",
    });
  }
});


// ========================================
// CREATE ORDER
// ========================================

app.post("/api/orders", authenticateToken, async (req, res) => {
  const client = await pool.connect();

  try {
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Order must contain at least one item.",
      });
    }

    // Calculate totals on the server
    const preparedItems = items.map((item) => {
      const productId = Number(item.id);
      const price = Number(item.price);
      const quantity = Number(item.quantity);

      if (
        !Number.isFinite(productId) ||
        !Number.isFinite(price) ||
        !Number.isInteger(quantity) ||
        quantity <= 0
      ) {
        throw new Error("Invalid order item.");
      }

      const subtotal = price * quantity;

      return {
        productId,
        name: String(item.name || "Product"),
        price,
        quantity,
        subtotal,
      };
    });

    const totalAmount = preparedItems.reduce(
      (total, item) => total + item.subtotal,
      0
    );

    await client.query("BEGIN");

    const orderResult = await client.query(
      `INSERT INTO public.orders
        (user_id, total_amount, status, payment_status)
       VALUES ($1, $2, $3, $4)
       RETURNING id, user_id, total_amount, status, payment_status, created_at`,
      [
        req.user.id,
        totalAmount,
        "pending",
        "pending",
      ]
    );

    const order = orderResult.rows[0];

    for (const item of preparedItems) {
      await client.query(
        `INSERT INTO public.order_items
          (order_id, product_id, product_name, price, quantity, subtotal)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          order.id,
          item.productId,
          item.name,
          item.price,
          item.quantity,
          item.subtotal,
        ]
      );
    }

    await client.query("COMMIT");

    res.status(201).json({
      success: true,
      message: "Order created successfully.",
      order,
    });
  } catch (error) {
    await client.query("ROLLBACK");

    console.error("Create order error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to create order.",
    });
  } finally {
    client.release();
  }
});

// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {
  console.log(
    `Mindly AI Backend running on http://localhost:${PORT}`
  );
});