'use strict';


const {Sequelize, DataTypes} = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}



sequelize.authenticate()
.then(()=>{
  console.log("======================")
  console.log("database connected !!!")
  console.log("======================")
})
.catch((error)=>{
  console.log("error in db",error)
})






db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./user.model') (sequelize ,DataTypes)
db.Product = require('./product.model') (sequelize ,DataTypes)
db.Order = require('./order.model') (sequelize ,DataTypes)
db.Category = require('./category.model') (sequelize ,DataTypes)
db.orderItem = require('./orderItem.model') (sequelize ,DataTypes)

sequelize.sync({force:true})

db.User.hasMany(db.Product, {
  foreignKey: "seller_id", // Foreign key in Product model
  as: "products", // Alias for User's products
});

db.Product.belongsTo(db.User, {
  foreignKey: "seller_id", // Foreign key in Product model
  as: "seller", // Alias for the User who owns the product
});

// Category and Product associations
db.Category.hasMany(db.Product, {
  foreignKey: "category_id", // Foreign key in Product model
  as: "products", // Alias for Category's products
});

db.Product.belongsTo(db.Category, {
  foreignKey: "category_id", // Foreign key in Product model
  as: "category", // Alias for the Category of the product
});

// User and Order associations (for clients)
db.User.hasMany(db.Order, {
  foreignKey: "client_id", // Foreign key in Order model
  as: "orders", // Alias for User's orders
});

db.Order.belongsTo(db.User, {
  foreignKey: "client_id", // Foreign key in Order model
  as: "client", // Alias for the User who made the order
});

// Order and OrderItem associations
db.Order.hasMany(db.orderItem, {
  foreignKey: "order_id", // Foreign key in orderItem model
  as: "orderItems", // Alias for Order's items
});

db.orderItem.belongsTo(db.Order, {
  foreignKey: "order_id", // Foreign key in orderItem model
  as: "order", // Alias for the Order of the item
});

// Product and orderItem associations
db.Product.hasMany(db.orderItem, {
  foreignKey: "product_id", // Foreign key in orderItem model
  as: "orderItems", // Alias for Product's order items
});

db.orderItem.belongsTo(db.Product, {
  foreignKey: "product_id", // Foreign key in orderItem model
  as: "product", // Alias for the Product of the item
});



module.exports = db;
