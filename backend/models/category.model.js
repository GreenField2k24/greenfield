module.exports = (sequelize, DataTypes) => {
    const Categorys = sequelize.define("categorys", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
    });
    return Categorys;
  };


















