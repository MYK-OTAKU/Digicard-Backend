// controllers/favoriteController.js
const { Favorite } = require("../models");

exports.addFavorite = async(req, res) => {
    try {
        const favorite = await Favorite.create({
            ...req.body,
            userId: req.params.userId,
        });
        res.status(201).json(favorite);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.removeFavorite = async(req, res) => {
    try {
        const favorite = await Favorite.destroy({
            where: {
                id: req.params.favoriteId,
                userId: req.params.userId,
            },
        });
        if (!favorite) {
            return res.status(404).json({ error: "Favorite not found" });
        }
        res.json({ message: "Favorite removed" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getFavorites = async(req, res) => {
    try {
        const favorites = await Favorite.findAll({
            where: {
                userId: req.params.userId,
            },
        });
        res.json(favorites);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};