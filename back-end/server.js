const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
const historyRoutes = require("./routes/historyRoutes");
app.use("/api/history", historyRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));