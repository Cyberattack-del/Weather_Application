const express = require("express");
const router = express.Router();
const History = require("../models/History");

// POST route to add a new search term and emit real-time updates
router.post("/add", async (req, res) => {
  try {
    const { term } = req.body;

    // Create and save a new history entry
    const entry = new History({ term });
    await entry.save();

    // Fetch latest history and frequency of terms
    const latest = await History.find().sort({ timestamp: -1 }).limit(50);
    const frequency = await History.aggregate([
      { $group: { _id: "$term", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    // Emit event to all connected clients
    req.io.emit("historyUpdated", { latest, frequency });

    // Send response with the new entry
    res.status(201).json(entry);
  } catch (err) {
    console.error("Error in POST /add:", err);
    res.status(500).json({ error: "Failed to save history." });
  }
});

// GET route to retrieve the search history
router.get("/", async (req, res) => {
  try {
    const history = await History.find().sort({ timestamp: -1 }).limit(50);
    res.json(history);
  } catch (err) {
    console.error("Error in GET /history:", err);
    res.status(500).json({ error: "Failed to fetch history." });
  }
});

module.exports = router;