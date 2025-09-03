const express = require("express");
const app = express();

// --- Custom Middleware ---

// 1. Logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// 2. Request counter middleware
let counter = 0;
app.use((req, res, next) => {
  counter++;
  req.requestCount = counter;
  next();
});

// --- Routes ---

app.get("/", (req, res) => {
  res.json({
    message: "Welcome!",
    requestCount: req.requestCount
  });
});

app.get("/about", (req, res) => {
  res.json({
    message: "About page",
    requestCount: req.requestCount
  });
});

// --- Start Server ---
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
