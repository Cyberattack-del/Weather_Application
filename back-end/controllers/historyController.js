const SearchHistory = require("../models/SearchHistory");

exports.saveSearch = async (req, res) => {
  const { city } = req.body;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const history = new SearchHistory({ city });
    await history.save();
    res.json({ message: "Search saved", history });
  } catch (err) {
    res.status(500).json({ error: "Failed to save search" });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await SearchHistory.find().sort({ date: -1 }).limit(20);
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
};

exports.clearHistory = async (req, res) => {
  try {
    await SearchHistory.deleteMany({});
    res.json({ message: "History cleared" });
  } catch (err) {
    res.status(500).json({ error: "Failed to clear history" });
  }
};