const { Sequelize } = require('sequelize');
const sequelize = require('./index').getDatabaseInstance();
//define models
const Brand = require('../../models/brand')
const Category = require('../../models/category')
const Size = require('../../models/size')
const Product = require('../../models/product')
const Image = require('../../models/image')
const ProductOption = require('../../models/productOption')
const ProductDetail = require('../../models/productDetail')
const Order = require('../../models/order')

let optionSync = { force: true }
async function syncModel() {
    await Brand.brand.sync(optionSync)
    await Category.category.sync(optionSync)
    await Size.size.sync(optionSync)
    await ProductOption.ProductOption.sync(optionSync)
    await Product.product.sync(optionSync)
    await Image.image.sync(optionSync)
    
}

// Get Models
async function restartDB() {
    await sequelize.sync({ force: true });
    console.log("This creates the table, dropping it first if it already existed");
}

async function syncDB() {
    await sequelize.sync();
    console.log("creates the table if it doesn't exist (and does nothing if it already exists)")
}
async function deleteDB() {
    await sequelize.drop()
    console.log("deletes all tables")
}
async function alterDB() {
    await sequelize.sync({ alter: true });
    console.log("alter all tables")
}
module.exports = {
    restartDB,
    syncDB,
    deleteDB,
    alterDB,
    syncModel
}