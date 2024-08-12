// controllers/user.js
const User = require("../models/User");

// Créer un utilisateur
exports.createUser = async(req, res) => {
    try {
        const { nomUtilisateur, email, motDePasse } = req.body;
        const user = await User.create({ nomUtilisateur, email, motDePasse });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lire tous les utilisateurs
exports.getUsers = async(req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lire un utilisateur par ID
exports.getUserById = async(req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour un utilisateur
exports.updateUser = async(req, res) => {
    try {
        const { nomUtilisateur, email, motDePasse } = req.body;
        const user = await User.findByPk(req.params.id);
        if (user) {
            user.nomUtilisateur = nomUtilisateur;
            user.email = email;
            user.motDePasse = motDePasse;
            await user.save();
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer un utilisateur
exports.deleteUser = async(req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};