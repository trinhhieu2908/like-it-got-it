const Sequelize = require('sequelize')
const databaseServer = require('../integration/sql')
/*
  Thông tin hình ảnh cho sản phẩm.  
  Lien ket voi bang Product: 1 - 1,
*/
const image = databaseServer.getDatabaseInstance().define('image', {
    /*
      Id tự tăng
    */
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    idProduct: {
        allowNull: false,
       type: Sequelize.INTEGER
    },
    url: {
        allowNull: false,
        type: Sequelize.TEXT,
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