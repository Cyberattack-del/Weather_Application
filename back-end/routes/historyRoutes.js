const express = require("express");
const router = express.Router();
const {
  saveSearch,
  getHistory,
  clearHistory,
} = require("../controllers/historyController");

router.post("/", saveSearch);
router.get("/", getHistory);
router.delete("/", clearHistory);

module.exports = router;