// models/user.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        language: {
            type: DataTypes.STRING,
            defaultValue: "en",
        },
        theme: {
            type: DataTypes.STRING,
            defaultValue: "light",
        },
    });

    User.associate = (models) => {
        User.hasMany(models.Scan, {
            foreignKey: "userId",
            as: "scans",
        });
        User.hasMany(models.Favorite, {
            foreignKey: "userId",
            as: "favorites",
        });
    };

    return User;
};