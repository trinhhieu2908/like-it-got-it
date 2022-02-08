const { Sequelize } = require('sequelize');
const sequelize = require('./index').getDatabaseInstance();
//define models
const Product = require('../../models/product')
const ProductOption = require('../../models/productOption')
const Brand = require('../../models/brand')
const Order = require('../../models/order')
const Category = require('../../models/category')
const Image = require('../../models/image')
const ProductDetail = require('../../models/productDetail')
const Size = require('../../models/size')
// Get Models
async function restartDB() {
    await sequelize.sync({ force: true });
    console.log("This creates the table, dropping it first if it already existed");
}

async function syncDB() {
    await sequelize.sync();
    console.log("creates the table if it doesn't exist (and does nothing if it already exists)")
}

module.exports = {
    restartDB,
    syncDB
}