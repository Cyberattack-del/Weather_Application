
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");

dotenv.config(); // Load environment variables

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // CORS for all origins (change this as needed for security)
  },
});

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB error:", err);
    process.exit(1); // Exit the app if MongoDB connection fails
  });

// Socket.io connection
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Make io available to routes
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
const historyRoutes = require("./routes/history");
app.use("/api/history", historyRoutes);

// Server start
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});