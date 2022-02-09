const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const databaseServer = require('../integration/sql')
const {image} = require('./image')
const {category} = require('./category')
const {brand} = require('./brand')
const {productOption} = require('./productOption')
/*
  Thong tin san pham chung. 
  Lien ket voi bang Image: 1 - N,
  Lien ket voi bang Category: 1 - 1,
  Lien ket voi bang Brand: 1 - 1,
  Lien ket voi bang Product Option: 1 - N,
*/
const product = databaseServer.getDatabaseInstance().define('product', {
    /*
      Id tự tăng
    */
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    /*
      id category
    */
    idCategory: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    idBrand: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    name: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    price: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    /*
      Phần trăm giảm giá. VD: 10,1 -> 10,1 %
    */
    saleOff: {
      allowNull: false,
      type: Sequelize.FLOAT,
      defaultValue: 0.0
    },
    priceAfterSale: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    desc: {
      allowNull: true,
      type: Sequelize.TEXT,
    },
    /*
      0: false,
      1: true
    */
    hot: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
        },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
})
async function addProduct(productInfo) {
  try {
    const pd = await product.create({
      idCategory: productInfo.idCategory,
      idBrand: productInfo.idBrand,
      name: productInfo.name,
      price: productInfo.price,
      priceAfterSale: productInfo.priceAfterSale,
      saleOff: productInfo.saleOff,
      desc: productInfo.desc,
      hot: productInfo.hot,
    })
    return [null, pd]
  } catch (error) {
    return [error, null]
  }
}
async function listAllProducts(skip, limitNumber) {
  const offset = parseInt(skip)
  const limit = parseInt(limitNumber)
  try {
    const pd = await product.findAll({
      include: [
        { model: image, 
        },
        { model: brand, 
          attributes: ['name']
        },
        { model: category, 
          attributes: ['name']
        },
        { model: productOption,
          order: ['idSize','ASC']
        }
      ],
      limit,
      offset,
      order: [['updatedAt', 'DESC']]
    })
    return [null, pd]
  } catch (error) {
    return [error, null]
  }
}

async function updateProduct(productInfo, idProduct) {
  try {
    const pd = await product.findByPk(idProduct)
    if(!pd) {
      return [{
          "message": `Can not find product with id ${idProduct}`
        }, null]
    }
    const updatePD = await pd.set(productInfo)
    await pd.save()
    return [null, updatePD]
  } catch (error) {
    return [error, null]
  }
}
async function deleteProduct(idProduct) {
  try {
    const pd = await product.findByPk(idProduct)
    if(!pd) {
      return [{
          "message": `Can not find product with id ${idProduct}`
        }, null]
    }
    const pdDelete = await pd.destroy({
      where: {
        id: idProduct
      }
    })
    return [null, pdDelete]
  } catch (error) {
    return [error, null]
  }
}

async function listProductById(idProduct) {
  try {
    const pd = await product.findByPk(idProduct, {
      include: [
        { model: image, 
          //as: 'images',
        },
        { model: brand, 
          // as: 'brandName',
          attributes: ['name']
        },
        { model: category, 
          // as: 'brandName',
          attributes: ['name']
        }
      ]
    }
    )
    if(!pd) {
      return [{
          "message": `Can not find product with id ${idProduct}`
        }, null]
    }
    return [null, pd]
  } catch (error) {
    return [error, null]
  }
}
product.hasMany(image, {
  foreignKey: {
    name: "idProduct",
    allowNull: true
  }
})
product.belongsTo(brand, {
  foreignKey: {
    name: "idBrand",
    allowNull: true
  }
})
product.belongsTo(category, {
  foreignKey: {
    name: "idCategory",
    allowNull: true
  }
})
product.hasMany(productOption, {
  foreignKey: {
    name: "idProduct",
    allowNull: true
  }
})
module.exports = {
  addProduct,
  listAllProducts,
  updateProduct,
  deleteProduct,
  listProductById
}