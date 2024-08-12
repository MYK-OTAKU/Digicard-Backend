// models/settings.js
module.exports = (sequelize, DataTypes) => {
    const Settings = sequelize.define("Settings", {
        language: {
            type: DataTypes.STRING,
            defaultValue: "en",
        },
        theme: {
            type: DataTypes.STRING,
            defaultValue: "light",
        },
    });

    Settings.associate = (models) => {
        Settings.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
        });
    };

    return Settings;
};