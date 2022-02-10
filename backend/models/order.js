const Sequelize = require('sequelize')
const databaseServer = require('../integration/sql').getDatabaseInstance()
/*
  Thông tin giỏ hàng cho từng đơn hàng. 
  Lien ket voi bang ProductDetail: 1 - N,
*/
const order = databaseServer.define('order', {
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
    idProductDetail: {
      allowNull: false,
      type: Sequelize.INTEGER
    }, 
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    totalPrice: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    emailCustomer: {
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
// async function createPaymentLine(sapPurchase, eachBankAccount, CBA) {
//   try {
//     const PL = await paymentLine.create({
//       sapPurchaseId: sapPurchase.sapPurchaseId,
//       outGoingPaymentId: sapPurchase.outGoingPaymentId,
//       bankAccountId: CBA.id,
//       bankName: CBA.bankName,
//       accountNumber: CBA.accountNumber,
//       paidAmount: eachBankAccount.paidAmount,
//       order: eachBankAccount.order,
//     })
//     return [null,PL]
//   } catch (error) {
//     return [error,null]
//   }
  
// }
// async function createPaymentLineNoBank(sapPurchase) {
//   try {
//     const PL = await paymentLine.create({
//       sapPurchaseId: sapPurchase.sapPurchaseId,
//       outGoingPaymentId: sapPurchase.outGoingPaymentId,
//       bankAccountId: null,
//       bankName: null,
//       accountNumber: null,
//       paidAmount: sapPurchase.totalAmount,
//       order: 0,
//     })
//     return [null,PL]
//   } catch (error) {
//     return [error,null]
//   }
  
// }

// async function findAllPLByOGP (outGoingPaymentId) {
//   try {
//     const resultPaymentLine = await paymentLine.findAll({
//       where: {
//         outGoingPaymentId: outGoingPaymentId
//       }
//     })
//     return [null,resultPaymentLine]
//   } catch (error) {
//     console.log('Error: ', error)
//     return [error,null]
//   }
// }

// async function listPaymentLineById (sapPurchaseId,outGoingPaymentId) {
//   try {
//     const resultPaymentLine = await paymentLine.findAll({
//       where: {
//         sapPurchaseId: sapPurchaseId,
//         outGoingPaymentId: outGoingPaymentId
//       }
//     })
//     return [null,resultPaymentLine]
//   } catch (error) {
//     console.log('Error: ', error)
//     return [error,null]
//   }
// }
module.exports = {

}