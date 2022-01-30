const Sequelize = require('sequelize')
const databaseServer = require('../integration/sql')
/*
  Thông tin phân loại cho sản phẩm.  
  Lien ket voi bang Product: 1 - 1,
*/
const category = databaseServer.getDatabaseInstance().define('category', {
    /*
      Id tự tăng
    */
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    name: {
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