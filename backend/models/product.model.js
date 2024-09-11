module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("products", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
          },
          stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
          },
  
    });
  
  
    return Products;
  };
  










