const order = require('../models/order')
const productDetail = require('../models/productDetail')
async function addOrder(req,res) {
    const body = req.body
    const orderBody = {
        "id": body.id, 
        "emailCustomer": body.emailCustomer,
        "quantity": body.numberOfProduct,
        "totalPrice": body.totalPrice,
        "fullName": body.fullName,
    }
    const pdDetailBody = body.productDetail
    const od = await order.addOrder(orderBody)
    const pdDetail = await productDetail.addProductDetail(pdDetailBody)
    if(od[0] || pdDetail[0]){
        return res.json({
            errorMsg: od[0].message,
            data: null
        })
    }
    return res.json({
        errorMsg: null,
        data: {"order": od[1], 
            "productDetail": pdDetail[1]}
    })
}
module.exports = {
    addOrder
}