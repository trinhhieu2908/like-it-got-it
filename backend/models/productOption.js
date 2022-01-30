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