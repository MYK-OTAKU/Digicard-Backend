// routes/scan.js
const express = require("express");
const scanController = require("../controllers/scanController");

const router = express.Router();

router.post("/", scanController.scanQRCode);
router.get("/:id/analyze", scanController.analyzeScan);

module.exports = router;