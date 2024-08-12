// models/scan.js
module.exports = (sequelize, DataTypes) => {
    const Scan = sequelize.define("Scan", {
        data: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    });

    Scan.associate = (models) => {
        Scan.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
        });
    };

    return Scan;
};