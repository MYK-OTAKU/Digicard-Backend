// routes/favorite.js
const express = require("express");
const favoriteController = require("../controllers/favoriteController");

const router = express.Router();

router.post("/:userId", favoriteController.addFavorite);
router.delete("/:userId/:favoriteId", favoriteController.removeFavorite);
router.get("/:userId", favoriteController.getFavorites);

module.exports = router;