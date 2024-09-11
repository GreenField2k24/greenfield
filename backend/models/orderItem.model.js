module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define("orderItem", {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    });
  
  
    return OrderItem;
  };
  










