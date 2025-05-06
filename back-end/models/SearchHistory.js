const mongoose = require("mongoose");

const SearchHistorySchema = new mongoose.Schema({
  city: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SearchHistory", SearchHistorySchema);