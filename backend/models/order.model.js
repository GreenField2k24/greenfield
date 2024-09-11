module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define("orders", {
        total_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
          },
          status: {
            type: DataTypes.ENUM("Pending", "Completed", "Cancelled"),
            defaultValue: "Pending",
          },
    });
    return Orders;
  };

























