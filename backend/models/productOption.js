const Sequelize = require('sequelize')
const databaseServer = require('../integration/sql')
/*
  Thông tin sản phẩm cho từng option khác nhau. Ví dụ màu khác, size khác. 
  Lien ket voi bang Product: N - 1,
  Lien ket voi bang ProductDetail: 1 - N,
  Lien ket voi bang Size: 1 - 1,
  Lien ket voi bang Color: 1 - 1,
*/
const product = databaseServer.getDatabaseInstance().define('productOption', {
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
    idColor: {
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
// async function addProductOption () {
//   try {
//     const pd = await productOption.create({
//       idCategory: productInfo.idCategory,
//       idBrand: productInfo.idBrand,
//       name: productInfo.name,
//       price: productInfo.price,
//       priceAfterSale: productInfo.priceAfterSale,
//       saleOff: productInfo.saleOff,
//       desc: productInfo.desc,
//       hot: productInfo.hot
//     })
//     return [null, pd]
//   } catch (error) {
//     return [error, null]
//   }
// }
module.exports = {

}