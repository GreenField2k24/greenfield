module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
      fullName:{
        type:DataTypes.STRING,
        allowNull:false
      },
      email:{
        type:DataTypes.STRING,
        allowNull:false,
       unique: true,
      },
      username:{
        type:DataTypes.STRING,
        allowNull:false,
       unique: true,
      },
      password:{
        type:DataTypes.STRING,
        allowNull:false
      },
      role: {
        type: DataTypes.ENUM("admin", "client", "seller"),
        allowNull: false,
      },
      wishlist: {
        type: DataTypes.JSON,
        allowNull: true, // Utilisé principalement pour les clients
      },
      avatar:{
        type:DataTypes.STRING,
        allowNull:true
      },
     
  
    });
  
  
    return Users;
  };
  