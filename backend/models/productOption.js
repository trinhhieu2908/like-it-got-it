const Sequelize = require('sequelize')
const databaseServer = require('../integration/sql')
const { size } = require('./size')
const { product } = require('./product')

/*
  Thông tin sản phẩm cho từng option khác nhau. Ví dụ màu khác, size khác. 
  Lien ket voi bang Product: N - 1,
  Lien ket voi bang ProductDetail: 1 - N,
  Lien ket voi bang Size: 1 - 1,
  Lien ket voi bang Color: 1 - 1,
*/
const productOption = databaseServer.getDatabaseInstance().define('productOption', {
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
      id sản phẩm chung
    */
    idProduct: {
      allowNull: false,
      type: Sequelize.INTEGER
    }, 
    idSize: {
      allowNull: false,
      type: Sequelize.INTEGER,
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
async function addProductOption (idProduct, idSize) {
  try {
    const pd = await productOption.create({
      idProduct,
      idSize,
    })
    return [null, pd]
  } catch (error) {
    return [error, null]
  }
}
async function getProductOptionById (id) {
  try {
    const pd = await productOption.findByPk(id, {
      // include: {
      //   model: product,
      //   as: "ProductOption"
      // }
    })
    return [null, pd]
  } catch (error) {
    return [error, null]
  }
}
productOption.belongsTo(product, {
  foreignKey: {
    name: "idProduct",
    allowNull: false
  }
})
productOption.belongsTo(size, {
  foreignKey: {
    name: "idSize",
    allowNull: false
  }
})


// productOption.associate = (models) => {
//   productOption.belongsTo(models.products, {
//       foreignKey: "idProduct"
//   })
// }
module.exports = {
  productOption,
  addProductOption,
  getProductOptionById
}